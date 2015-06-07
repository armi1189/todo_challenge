describe('To do list manager', function() {

  var incompletedTasks;
  var completedTasks;
  var allTasks;
  
  beforeEach(function(){
    browser.get('http://localhost:8080');
    incompletedTasks = element.all(by.repeater("incompletedTask in incompleteFilter = (toDoCtrl.tasks | filter: { status: false })"));
    completedTasks = element.all(by.repeater("completedTask in completeFilter = (toDoCtrl.tasks | filter: { status: true })"));
    allTasks = element.all(by.repeater("allTask in toDoCtrl.tasks"));
  });

  it('has a title', function() {
    expect(browser.getTitle()).toEqual('toDoList');
  });

  it('displays all tasks', function(){
    expect(allTasks.first().getText()).toContain('Improve Ruby');
  });

  it('displays V if the task is complete', function(){
    expect(allTasks.last().getText()).toContain('V');
  });

  it('displays incomplete tasks', function(){
    element(by.id('incomplete_btn')).click();
    expect(incompletedTasks.first().getText()).toContain('Improve Ruby');
  });

  it('displays complete tasks', function(){
    element(by.id('complete_btn')).click();
    expect(completedTasks.first().getText()).toContain('Learn JavaScript');
  });

  it('can clear all the tasks', function(){
    element(by.id('clear_all_btn')).click();
    expect(allTasks.count()).toEqual(0);
  });

  it('can add an task to list', function(){
    element(by.id('new_task')).sendKeys('Learn PHP');
    element(by.id('add_btn')).click();
    expect(allTasks.first().getText()).toContain('Learn PHP');
  });

  it('can close a task from the all list', function(){
    element.all(by.css('.remove_task')).get(0).click();
    expect(allTasks.getText()).not.toContain('Improve Ruby');
  });

  it('can close a task from to do list', function(){
    element(by.id('incomplete_btn')).click();
    element.all(by.css('.remove_task')).get(1).click();
    expect(incompletedTasks.count()).toEqual(0);
  });

  it('display a closed task on the completed list', function(){
    element.all(by.css('.remove_task')).get(0).click();
    element(by.id('complete_btn')).click();
    expect(completedTasks.first().getText()).toContain('Improve Ruby');
  });

  it('can count the tasks on to do List', function(){
    element(by.id('incomplete_btn')).click();
    var incomplete_count = element(by.id('incomplete_tasks_count')).getText();
    expect(incomplete_count).toContain('1');
  });

  it('can count the tasks on completed list', function(){
    element(by.id('complete_btn')).click();
    var complete_count = element(by.id('complete_tasks_count')).getText();
    expect(complete_count).toContain('1');
  });

  it('can count the tasks on the list of all the tasks', function(){
    var all_tasks_count = element(by.id('all_tasks_count')).getText();
    expect(all_tasks_count).toContain('2');
  });
});