/* It's a good habit to wrap your entire app in a closure.*/
(function(){

/* Used by <html ng-app="store"> in index.html to create app on document load. 
'angular' is the Angular library; 'module' is a method that creates a module; the method's first argument (a string) is the module's name; the second (a list; now empty) will store the module's dependencies.*/
var app = angular.module('store', [ ]);

/* By convention, first argument (name of controller, a string) should be a camelcase and should include the word 'controller' and reference it's module. 
Second argument is an anonymous function that gets executed when StoreController is called.*/
app.controller('StoreController', function(){
  this.products = gems;
});

app.controller('PanelController', function(){
  this.tab = 1;
  this.selectTab = function(setTab) {
    this.tab = setTab;
  };
  this.isSelected = function(checkTab){
    return this.tab === checkTab;
  };
});

var gems = [{
    name: 'Dope Dodecahedron',
    price: 12.95,
    description: '12 facets of beauty. Can it be yours?',
    canPurchase: true,
    soldOut: false,
    images: [
    {
      'full': '../static/images/Dodecahedron_Rendering.jpg'
    }]
  },
  { 
    name: 'Pretty Pentagonal',
    price: 5.95,
    description: '5 facets of beauty. Can it be yours?',
    canPurchase: true,
    soldOut: false,
    images: [
    {
      'full': '../static/images/pentagon.gif'
    }]
  },
  { 
    name: 'Sexy Hexagon',
    price: 6.95,
    description: "6 facets of beauty. Can it be yours? No, because it's not for sale.",
    canPurchase: false,
    soldOut: false,
    images: [
    {
      'full': '../static/images/hexagon.jpg'
    }]
  }
]

})();
