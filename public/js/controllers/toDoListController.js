toDoList.controller('toDoListController',['ToDoItems', function(ToDoItems){
  
  var self = this;
  
  self.items = ToDoItems.reverse();

  self.addItem = function(){
    self.newItem.status = 'incomplete';
    self.items.unshift(self.newItem);
    self.newItem = {};
  }

  self.closeItem = function(item){
    var index = self.items.indexOf(item);
    self.items[index].status = 'done';
  };

  self.clearAll = function(){
    self.items = [];
  }

}]);