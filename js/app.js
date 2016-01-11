var coffeeMaster = function() {
         this.coffeeShops = [];
         this.addShop = function(shop){
           this.coffeeShops.push(shop);
         };
         this.generateReport = function(){
           for (var i = 0; i < this.coffeeShops.length; i++){
             console.log("The " + this.coffeeShops[i].location + " location needs to have " + this.coffeeShops[i].getcoffeePerHour() + " coffees per hour, and " + this.coffeeShops[i].getcoffeePerDay() + " coffees per day.");
           }
         };
       };

var coffeeShop = function(location,min,max,avg,pound,hours) {
    this.location = location;
    this.min = min;
    this.max = max;
    this.avg = avg;
    this.pound = pound;
    this.hours = 14;
    this.customersPerHour = function(){
      return (Math.floor(Math.random() * (this.max - this.min + 1)) + this.min);
         };
    this.getcoffeePerHour = function(){
      return Math.round((this.customersPerHour() * this.avg));
         };
     this.getcoffeePerDay = function(){
           this.coffeePerDay = 0;
           for (var i = 1; i <= this.hours; i++) {
              this.coffeePerDay += this.getcoffeePerHour();
            }
            return this.coffeePerDay;
          };
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
              console.log ('why dont you work')

              coffeemas.generateReport();

              function myCreateFunction() {
    var table = document.getElementById("myTable");
    var header = table.createTHead();
    var row = header.insertRow(0);
    var cell = row.insertCell(0);
    cell.innerHTML = "<b>Coffee Shop Data</b>";
}
