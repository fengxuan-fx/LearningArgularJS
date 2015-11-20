var myApp = angular.module("myApp",[]);
myApp.controller("userCtrl",function($scope){

	$scope.fName = "";
	$scope.lName = "";
	$scope.passw1 = "";
	$scope.passw2 = "";
	
	$scope.edit = true;
	$scope.error = false;
	$scope.incomplete = false;

	$scope.users = [
		{id:1,fName:'Feng',lName:'Xuan'},
		{id:2,fName:'Spark',lName:'Ou'},
		{id:3,fName:'Marlon',lName:'Xiang'},
		{id:4,fName:'Alex',lName:'Li'},
	];


	$scope.editUser = function(id){

		if(id == "new"){
		 	$scope.edit = true;
			$scope.fName = "";
			$scope.lName = "";
		}else{
			$scope.edit = false;
			$scope.fName = $scope.users[id-1].fName;
			$scope.lName = $scope.users[id-1].lName;
		}
	};



	$scope.$watch("passw1",function(){$scope.test();});
	$scope.$watch("passw2",function(){$scope.test();});
	$scope.$watch("fName",function(){$scope.test();});
	$scope.$watch("lName",function(){$scope.test();});

	$scope.test = function(){
		if($scope.passw1 !== $scope.passw2){
			$error = true;
		}else{
			$error = false;
		}

		$scope.incomplete = false;
		 if ($scope.edit && (!$scope.fName.length ||!$scope.lName.length ||!$scope.passw1.length || !$scope.passw2.length)) {
		 	$scope.incomplete = true;
 		}

	};

});