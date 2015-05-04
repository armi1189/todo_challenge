toDoList.directive('allTasks', function(){
  return {
    restrict: 'E',
    templateUrl: 'all_tasks.html'
  };
});

toDoList.directive('incompletedTasks', function(){
  return {
    restrict: 'E',
    templateUrl: 'incompleted_tasks.html'
  };
});

toDoList.directive('completedTasks', function(){
  return {
    restrict: 'E',
    templateUrl: 'completed_tasks.html'
  };
});