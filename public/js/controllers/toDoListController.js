toDoList.controller('toDoListController',['ToDoTasks', function(ToDoTasks){
  
  var self = this;
  
  self.tasks = ToDoTasks.reverse();

  self.addTask = function(){
    self.newTask.status = false;
    self.tasks.unshift(self.newTask);
    self.newTask = {};
  };

  self.closeTask = function(task){
    var index = self.tasks.indexOf(task);
    self.tasks[index].status = true;
  };

  self.clearAll = function(){
    self.tasks = [];
  };

  self.getMark = function(status){
    if(status) return "V";
    else return "X";
  };

}]);