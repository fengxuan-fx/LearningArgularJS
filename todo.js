var todoApp = angular.module("todoApp",[]);

todoApp.controller("TodoListController",function(){

	var todoList = this;
	todoList.test="Alex";
	todoList.todos = [
		{text : "learn angular",done:true},
		{text : "build an angular app",done:false}
	];


	//remaining
	todoList.remaining = function(){
		var count = 0;
		angular.forEach(todoList.todos , function(todo){
			count + = todo.done ? 0 : 1;
		});
		return count;
	};
});
