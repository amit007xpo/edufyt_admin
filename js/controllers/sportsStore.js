angular.module("sportsStore")
	.constant("dataUrl", "http://localhost:2403/products/")
	.controller("sportsStoreCtrl", function($scope, $http, dataUrl){
		    $scope.data = {};
		    $http({
			method : "GET",
			url : "http://localhost:2403/products/"
		    }).then(function mySucces(response) {
			$scope.data.products = response.data;
		    }, function myError(response) {
			$scope.data.error = response.statusText;
		    });
	
/*	$scope.data = {
		products: [
			{name: "Product #1", description: "A product", category: "Category #1", price: 100},
			{name: "Product #2", description: "A product", category: "Category #1", price: 110},
			{name: "Product #3", description: "A product", category: "Category #2", price: 50},
			{name: "Product #4", description: "A product", category: "Category #3", price: 300}]
		};  */
});
