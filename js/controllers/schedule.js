angular.module("edufyt")
		.controller("scheduleCtrl", function($scope){
			$scope.schedule =	[{date : "12th feb", lectures : 'lecture1', assignment: 'assignment1', tests : 'test1'},
								{date : "13th feb", lectures : 'lecture2', assignment: 'assignment2', tests : 'test2'},
								{date : "14th feb", lectures : 'lecture3', assignment: 'assignment3', tests : 'test3'},
								{date : "15th feb", lectures : 'lecture4', assignment: 'assignment4', tests : 'test14'},
								{date : "16th feb", lectures : 'lecture5', assignment: 'assignment5', tests : 'test5'},
								{date : "17th feb", lectures : 'lecture6', assignment: 'assignment6', tests : 'test6'}
			];

		});