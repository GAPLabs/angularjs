var BookStore = angular.module('BookStore', []);

BookStore.controller('BookController', function($scope) {
	
	$scope.books = [
		{ 
			title  : 'The Life-Changing Magic of Tidying Up: The Japanese Art of Decluttering and Organizing', 
			author : 'Marie Kondo', 
			price  : '9.68' 
		},
		{ 
			title  : 'First 100 Words', 
			author : 'Roger Priddy', 
			price  : '3.19' 
		},
		{ 
			title  : 'Quieting Your Heart: 6-Month Bible-Study Journal', 
			author : 'Darlene Schacht', 
			price  : '7.14' 
		},
	];
});