describe('toDoListController', function(){
  beforeEach(module('toDoList'));

  var tasks;

  beforeEach(inject(function($controller){
    ctrl = $controller('toDoListController');
  }));

  beforeEach(inject(function(ToDoTasks){
    tasks = ToDoTasks;
  }));

  it('initialises with an empty search term', function(){
    expect(ctrl.newTask).toBeUndefined();
  });

  it('displays tasks', function() {
    expect(ctrl.tasks).toEqual(tasks);
  });

  it('knows how many tasks there are', function() {
    expect(ctrl.tasks.length).toEqual(2);
  });

  it('knows how many complete tasks there are', function(){
    var filtered = ctrl.tasks.filter(checkDoneStatus);
    expect(filtered.length).toEqual(1);
  });

  it('knows how many incomplete tasks there are', function(){
    var filtered = ctrl.tasks.filter(checkIncompleteStatus);
    expect(filtered.length).toEqual(1);
  });

  it('can add tasks', function() {
    ctrl.newTask = 'Learn JasmineJS';
    ctrl.addTask();
    expect(ctrl.tasks).toContain('Learn JasmineJS');
  });

  it('can close tasks', function() {
    var task = tasks[0];
    ctrl.closeTask(task);
    expect(ctrl.tasks).toContain({name: "Improve Ruby", status: true});
  });

  it('can convert false status in a X mark', function(){
    var task_status = tasks[0].status;
    expect(ctrl.getMark(task_status)).toEqual("X");
  });

  it('can convert true status in a V mark', function(){
    var task_status = tasks[1].status;
    expect(ctrl.getMark(task_status)).toEqual("V");
  });

  function checkDoneStatus(task){
    return task.status;
  }

  function checkIncompleteStatus(task){
    return task.status;
  }
});