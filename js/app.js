var BookStore = angular.module('BookStore', []);

BookStore
	.controller('BookController', ['$scope', function($scope) {

		$scope.appTitle = "Book Store Application";
	}]);