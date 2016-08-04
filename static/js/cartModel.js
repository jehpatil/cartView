var cart = angular.module("myApp", []);

	cart.controller('myCtrl',function ($scope) {

	   	$scope.item_list = [
	 		  	{ id:1,	name: "Item_1", price:100, vat: 5,description: "Item_1", quantity:0, addedToCart: false},
 	           	{ id:2,  name: "Item_2", price:500, vat: 7,description: "Item_2", quantity:0, addedToCart: false},
 	    	  	{ id:3,	name: "Item_3", price:800, vat: 4,description: "Item_3", quantity:0, addedToCart: false},
 	           	{ id:4,  name: "Item_4", price:1000, vat: 6,description: "Item_4", quantity:0, addedToCart: false}
 		   	];
	   	
	   	$scope.cart_list = [];
	  
	   	$scope.addItem = function(item) {
	   		if (item.quantity == 0) 
	   		{
		    	$scope.cart_list.push(item);
		    	//$scope.price = item.price * item.quantity;
		    	item.quantity++;
		    	console.log($scope.price,item.quantity);
			}
			else
			{
//		    	$scope.price+=item.price;
		    	item.quantity++;
		    	console.log($scope.price,item.quantity);
			}
		}
		$scope.deletecCartItem = function(item) {
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
	    $scope.newTotal = function (item) {
	    		var cartTotal = 0;
	   		    $scope.cart_list.forEach(function(item) {
		    	cartTotal += item.price * item.quantity;
    				});	
		    	$scope.cartTotal = cartTotal;
	//	    	console.log(cartTotal);
      	}	  	
 });