//pay attention to $$$$$  not &&&&&&
angular.module("myNoteApp",[]).controller("myNoteCtrl",function($scope){

	$scope.message = "";
	$scope.save = function(){alert("Note Saved");};
	$scope.clean = function(){$scope.message = "";};
	$scope.left = function(){return 100 - $scope.message.length;};

});

