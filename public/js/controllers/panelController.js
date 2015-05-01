toDoList.controller('panelController', function(){
  
  var self = this;

  self.panel = 1;

  self.setPanel = function(number){
    self.panel = number;
  };

  self.isPanel = function(number){
    return self.panel === number;
  }
})