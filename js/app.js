'use strict';

var data = {
    names: ['Pike Place Market', 'Capitol Hill', 'Seattle Public Library', 'South Lake Union', 'Sea-Tac Airport', 'Website'],
    customerMin: [14, 32, 49, 35, 68, 3],
    customerMax: [55, 48, 75, 88, 124, 6],
    cupAvg: [1.2, 3.2, 2.6, 1.3, 1.1, 0],
    lbsAvg: [3.7, 0.4, 0.2, 3.7, 2.7, 6.7]
}

function calcCustHour(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function calcCupHour(cust_hour, cupAvg) {
    return (cust_hour * cupAvg);
}

function calcCupHourlbs(cupHour) {
    return (cupHour / 20);
}

function calcLbsHour(cust_hour, lbsAvg) {
    return (cust_hour * lbsAvg);
}

function calcTotalHour(cup_hour_lbs, lbs_hour) {
    return (cup_hour_lbs + lbs_hour);
}

var data_time = {
    hour_open: 6,
    hour_close: 21,
    hours: [''],

    getHours: function() {
        for (var i = this.hour_open; i < this.hour_close; i++) {
            var y = i - this.hour_open;
            if (i < 12) {
                data_time.hours[y] = (i + ':00am');
            } else if (i === 12) {
                data_time.hours[y] = (i + ' noon');
            } else {
                data_time.hours[y] = (i - 12 + ':00pm');
            }
        }
    }
}
data_time.getHours();

var data_location = [];
for (var i = 0; i < data.names.length; i++) {
    data_location[i] = new Location(data.names[i], data.customerMin[i], data.customerMax[i], data.cupAvg[i], data.lbsAvg[i]);
}


function Location(name, min, max, cupAvg, lbsAvg) {
    this.loc_name = name;
    this.customerMin = min;
    this.customerMax = max;
    this.cupsAvg = cupAvg;
    this.lbsAvg = lbsAvg;
    this.cust_hour = [];
    this.cup_hour = [];
    this.cup_hour_lb = [];
    this.lbs_hour = [];
    this.total_hour = [];
    this.reportValues = [data_time.hours, this.total_hour, this.cust_hour,                    this.cup_hour, this.cup_hour_lb, this.lbs_hour];
    this.getMath = function() {
        for (var i = data_time.hour_open; i < data_time.hour_close; i++) {
            var y = i - data_time.hour_open;

            this.cust_hour.push(calcCustHour(this.customerMin, this.customerMax));
            this.cup_hour.push(calcCupHour(this.cust_hour[y], this.cupsAvg));
            this.cup_hour_lb.push(calcCupHourlbs(this.cup_hour[y]));
            this.lbs_hour.push(calcLbsHour(this.cust_hour[y], this.lbsAvg));
            this.total_hour.push(calcTotalHour(this.cup_hour_lb[y], this.lbs_hour[y]));
        }
    };
    this.getMath();
    renderAll(this.loc_name, this.reportValues);
}

function renderAll(name, reportValues) {

  var columns = [
      'Hour',
      'Total lbs.',
      'Customers/Hour',
      'Cups/Hour',
      'Cup/hour (lbs)',
      'lbs./Hour'
  ];

      var loc_tbl = document.createElement('p');
      document.body.appendChild(loc_tbl);
      var loc_tbl_header = document.createElement('h2');
      loc_tbl_header.textContent =  name + ' Sales:';
      loc_tbl.appendChild(loc_tbl_header);

      //changed 'table to 'tableData
      var tbl = document.createElement('tableData');
      loc_tbl.appendChild(tbl);

      for (var y = 0; y < columns.length; y++) {
          var tbl_head = function() {
              var head = document.createElement('th');
              head.textContent = columns[y];
              tbl.appendChild(head);
          }();
      }

      for (var y = data_time.hour_open; y < data_time.hour_close; y++) {
          var row = document.createElement('tr');
          tbl.appendChild(row);

          for (var z = 0; z < reportValues.length; z++) {
              var td = document.createElement('td');


              if (typeof(reportValues[z][y - data_time.hour_open]) !== 'string') {
                  td.textContent = (Math.round(reportValues[z][y - data_time.hour_open] * 10) / 10);
              } else {
                  td.textContent = reportValues[z][y - data_time.hour_open];
              }
              row.appendChild(td);
          }
      }
}

var coffeeShop = document.getElementById('coffeeShop');

function handleSubmit(event) {
  event.preventDefault(); //gotta have it. prevents page reload


   var name = event.target.locationName.value;
   var customerMin = event.target.customerMin.value;
   var customerMax = event.target.customerMax.value;
   var cupAvg = event.target.cupsAvg.value;
   var lbsAvg = event.target.lbsAvg.value;



   var newShop = new Location(name, customerMin, customerMin, cupAvg, lbsAvg);

   data_location.push(newShop);



   //renderAll();
};

coffeeShop.addEventListener('submit', handleSubmit);
