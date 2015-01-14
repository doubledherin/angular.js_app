/* It's a good habit to wrap your entire app in a closure.*/
(function(){

/* Used by <html ng-app="store"> in index.html to create app on document load. 
'angular' is the Angular library; 'module' is a method that creates a module; the method's first argument (a string) is the module's name; the second (a list; now empty) will store the module's dependencies.*/
var app = angular.module('store', [ ]);

/* By convention, first argument (name of controller, a string) should be a camelcase and should include the word 'controller' and reference it's module. 
Second argument is an anonymous function that gets executed when StoreController is called.*/
app.controller('StoreController', function(){
  this.product = gem
});

var gem = {
    name: 'Dodecahedron',
    price: 2.95,
    description: '. . .',
}

})();
