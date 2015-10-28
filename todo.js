var todoApp = angular.module("todoApp",[]);

todoApp.controller("TodoListController",function(){

	var todoList = this;
	todoList.test="Alex";
	todoList.todos = [
		{text : "learn angular",done : true},
		{text : "build an angular app",done : false},
		{text : "build my site with MEAN",done : false}
	];


	//remaining
	todoList.remaining = function(){
		var count = 0;

		//something wrong there   " + = "
		angular.forEach(todoList.todos , function(todo){
			//wrong way 
			// count + = todo.done ? 0 : 1;
			count += todo.done ? 0 : 1;
			
		});
		return count;
	};



	  
});
