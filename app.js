(function(){
  angular.module('ShoppingListCheckOff',[])
  .controller('ToBuyController',ToBuyController)
  .controller('AlreadyBoughtController',AlreadyBoughtController)
  .provider('ShoppingListCheckOffService',ShoppingListCheckOffServiceProvider);

ToBuyController.$inject = ['ShoppingListCheckOffService'];

function ToBuyController(ShoppingListCheckOffService){
  var buy = this;
  buy.toBuy = ShoppingListCheckOffService.getToBuy();
  buy.remove = function(index){
    ShoppingListCheckOffService.manipulate(index);
    // console.log('press');

  };
}
AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtController(ShoppingListCheckOffService){
  var ab = this;
  ab.bought = ShoppingListCheckOffService.getBought();
}

  function ShoppingListCheckOffService(){
    var service = this;
    var toBuy = [{name:'yam',quantity:'29'},{name:'Milk',quantity:'5'},{name:'Rice',quantity:'4'},{name:'Salt',quantity:'2'},
  {name:'Garri',quantity:'2'}];
  var bought = [];


  service.manipulate = function (index){
    var item = {};
    item.name = toBuy[index].name;
    item.quantity = toBuy[index].quantity;
    toBuy.splice(index,1);
    bought.push(item);
  };
  service.getToBuy = function(){
    return toBuy;
  };
  service.getBought = function(){
    return bought;
  };
  }

  function ShoppingListCheckOffServiceProvider(){
    var provider = this;
    provider.$get = function(){
      var shopService = new ShoppingListCheckOffService();
      return shopService;
    };
  }
})();
