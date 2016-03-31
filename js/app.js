var BookStore = angular.module('BookStore', []);

BookStore
	.controller('BookController', ['$scope', function($scope) {

		$scope.appTitle = "Book Store Application";

		$scope.books = [
			{ 
				title  : 'The Life-Changing Magic of Tidying Up: The Japanese Art of Decluttering and Organizing', 
				author : 'Marie Kondo', 
				price  : '9.68' 
			},
			{ 
				title  : 'Quieting Your Heart: 6-Month Bible-Study Journal', 
				author : 'Darlene Schacht', 
				price  : '7.14' 
			},
			{ 
				title  : 'First 100 Words', 
				author : 'Roger Priddy', 
				price  : '3.19' 
			},
		];

		$scope.save = function(book) {

			$scope.books.push({
				title : $scope.title,
				author: $scope.author,
				price : $scope.price
			});

			$scope.title = '';
			$scope.author = '';
			$scope.price = '';
		};

	}]);