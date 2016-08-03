angular.module("myApp", [])
	   .controller('myCtrl',function ($scope) {

	   	$scope.item_list = [
	 		  	{	name: "Item_1", price:100, vat: 5,description: "Item_1", quantity:0, addedToCart: false},
 	           	{   name: "Item_2", price:500, vat: 7,description: "Item_2", quantity:0, addedToCart: false},
 			   	];
	   	
	   	$scope.cart_list = [];
	  
	   	$scope.addItem = function(item) {
		    $scope.cart_list.push(item);
		    item.addedToCart = true;
	     //    var tot = 0;
	     //    $scope.tot =(item.price + ((item.vat * item.price) / 100));
	    	// console.log(item.price, tot);
	   	}
	    $scope.deleteItem = function (index) {
	 	   $scope.cart_list.splice(index, 1);
		}
		$scope.increaseQuantity = function(item) {
    		item.quantity++;
  		}
	  	$scope.decreaseQuantity = function(item) {
   		item.quantity--;        	
    	if (item.quantity <= 0) 
    	{
            item.quantity = 0;
     		var itemIndex = $scope.cart_list.indexOf(item);
            if (itemIndex > -1) {
 				$scope.cart_list.splice(itemIndex, 1);	
 	        }
// 	        console.log(item.quantity, itemIndex);
        }
    }
});