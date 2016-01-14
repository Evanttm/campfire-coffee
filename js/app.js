var hours = ['6:00am', '7:00am',  '8:00am', '9:00am', '10:00am' ,'11:00am', '12:00pm' , ' 1:00pm', '2:00pm' , '3:00pm' , '4:00pm' , '5:00pm' , '6:00pm' , '7:00pm', '8:00pm', '9:00pm'];



var coffeeMaster = function() {
         this.coffeeShops = [];
         this.addShop = function(shop){
           this.coffeeShops.push(shop);
         };
         this.generateReport = function(){
           for (var i = 0; i < this.coffeeShops.length; i++){
             console.log("The " + this.coffeeShops[i].location + " location needs to have " + this.coffeeShops[i].getcoffeePerHour() + " coffees per hour, and " + this.coffeeShops[i].getcoffeePerDay() + " Lbs per day.");
           }
         };
       };

var coffeeShop = function(location,min,max,avg,pound,hours) {
    this.location = location;
    this.min = min;
    this.max = max;
    this.avg = avg;
    this.pound = pound;
    this.perHour = [];
    this.coffeePerDay = 0;
    this.customerHour = [];
    this.customersPerHour = function(){
      return (Math.floor(Math.random() * (this.max - this.min + 1)) + this.min);
     };
    this.getcoffeePerHour = function(){
      for (var i = 0; i < 16; i++) {
        this.perHour.push(Math.round(this.customerHour[i] * this.avg));
      }
     };
     this.getcoffeePerDay = function(){
           for (var i = 0; i < 16; i++) {
              this.coffeePerDay += this.perHour[i];
            }
            return this.coffeePerDay;
    };
this.getCustomer = function() {
  for (var i = 0; i < 16; i++) {
    this.customerHour.push(this.customersPerHour());
  }
};
this.getCustomer();
this.getcoffeePerHour();
this.getcoffeePerDay();
};


coffeeShop.prototype.renderShopRow = function() {
 this.generateHourly();
 var tableDataEl = document.getElementById('tableData');

 var trEl = document.createElement('tr');
 var tdEl = document.createElement('td');
 tdEl.textContent = this.locName;
 trEl.appendChild(tdEl);
 var tdElem = document.createElement('td');
 tdElem.textContent = this.total;
 trEl.appendChild(tdElem);

 for (var i = 0; i < this.perHourArray.length; i++) {

   var tdEl = document.createElement('td');
   tdEl.textContent = this.perHourArray[i];
   trEl.appendChild(tdEl);
 }
 tableDataEl.appendChild(trEl);
};

var pikePlace = new coffeeShop ("Pike Place Market", 14, 55, 1.2, 3.7);
var capitolHill = new coffeeShop ("Capitol Hill",32,48,3.2,0.4);
var seattleLake = new coffeeShop ("Seattle Lake Union",35,88,1.3,3.7);
var seattlePublic = new coffeeShop ("Seattle Public Library",49,75,2.6,0.2);
var seaTac = new coffeeShop ("Sea-Tac Airport",68,124,1.1,2.7);


             var coffeemas = new coffeeMaster();

              coffeemas.addShop(pikePlace);
              coffeemas.addShop(capitolHill);
              coffeemas.addShop(seattleLake);
              coffeemas.addShop(seattlePublic);
              coffeemas.addShop(seaTac);


              coffeemas.generateReport();


function renderHeadRow() {
  var paragraph = document.createElement('p');
    document.body.appendChild(paragraph);
  var headding = document.createElement('h1');
    headding.textContent = "PikePlace";
    paragraph.appendChild(headding);
  var tableDataEl = document.createElement("table");
    paragraph.appendChild(tableDataEl);
  var trEl= document.createElement("tr");
    tableDataEl.appendChild(trEl);
  var thEl1 = document.createElement("th");
    thEl1.textContent = "Time";
    tableDataEl.appendChild(thEl1);
  var thEl2 = document.createElement("th");
    thEl2.textContent = "Customers";
    tableDataEl.appendChild(thEl2);
  var thEl3 = document.createElement("th");
    thEl3.textContent = "Lbs";
    tableDataEl.appendChild(thEl3);
  var thEl4 = document.createElement("th");
    thEl4.textContent = "total";
    tableDataEl.appendChild(thEl4);

for ( var i = 0; i < hours.length; i++) {
  var trEl = document.createElement("tr");
      tableDataEl.appendChild(trEl);
  var tdEl1 = document.createElement("td");
      tdEl1.textContent = hours[i];
      trEl.appendChild(tdEl1);
  var tdEl2 = document.createElement("td");
      tdEl2.textContent = pikePlace.customerHour[i];
      trEl.appendChild(tdEl2);
  var tdEl3 = document.createElement("td");
      tdEl3.textContent = pikePlace.perHour[i];
      trEl.appendChild(tdEl3);
  var tdEl4 = document.createElement("td");
      tdEl4.textContent = pikePlace.coffeePerDay;
      trEl.appendChild(tdEl4);
    }
};

              renderHeadRow();
function myCreateFunction() {
    var table = document.getElementById("myTable");
    var header = table.createTHead();
    var row = header.insertRow(0);
    var cell = row.insertCell(0);
    cell.innerHTML = "<b>Coffee Shop Data</b>";
};

// var data_location = [];
// for (var i = 0; i < data.names.length; i++) {
//
//   data_location[i] = new Location(data.names[i], data.customer_min[i], data.customer_max[i], data.lbs_ave[i]);
// }
//
// var data_loc = [];
// for (i = 0; i < data_location.length; i++) {
//   data_loc[i] = [data_time.hours, data_location[i].total_hour, data_location[i].cust_hour, data_location[i].cup_hour, data_location[i].cup_hour_lb, data_location[i].lbs_hour];
// }



//
// for (var i = 0; i < data_loc.length; i++) {
//   var loc_tbl = document.createElement('p');
//   document.body.appendChild(loc_tbl);
//   var loc_tbl_header = document.createElement('h3');
//   loc_tbl_header.textContent = data_location[i].loc_name + ' Estimated Sales:';
//   loc_tbl.appendChild(loc_tbl_header);
//   // create and fill table
//   var tbl = document.createElement('table');
//   loc_tbl.appendChild(tbl);
//
//   // create and fill table header info.
//   for (var j = 0; j < columns.length; j++) {
//     var tbl_head = function() {
//       var head = document.createElement('th');
//       head.textContent = columns[j];
//       tbl.appendChild(head);
//     }();
//   }
//
//   // create and fill table rows.
//   for (var j = data_time.hour_open; j < data_time.hour_close; j++) {
//     var row = document.createElement('tr');
//     tbl.appendChild(row);
//
//     for (var k = 0; k < data_loc[i].length; k++){  // fill table rows.
//       var td = document.createElement('td');
//       if (typeof(data_loc[i][k][j - data_time.hour_open]) !== 'string') {
//         td.textContent = (Math.round(data_loc[i][k][j - data_time.hour_open] * 10 ) / 10);
//       }
//       else {
//         td.textContent = data_loc[i][k][j - data_time.hour_open];
//       }
//       row.appendChild(td);
//     }
//   }
// }
//














// rendertable(){
//   for(x){
//
//   }
//
// for(i){
//
//   for(y){
//
//
//
//
//
//   }
// }
//
//
// }
