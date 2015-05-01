describe('To do list manager', function() {

  beforeEach(function(){
    browser.get('http://localhost:8080');
  });

  it('has a title', function() {
    expect(browser.getTitle()).toEqual('toDoList');
  });

  it('displays incomplete items', function(){
    var incompletedItems = element.all(by.repeater("incompletedItem in incompleteFilter = (toDoCtrl.items | filter: { status: 'incomplete' })"));
    expect(incompletedItems.last().getText()).toContain('Improve Ruby')
  });

  it('displays complete items', function(){
    element(by.id('complete_link')).click();
    var completedItems = element.all(by.repeater("completedItem in completeFilter = (toDoCtrl.items | filter: { status: 'done' })"));
    expect(completedItems.last().getText()).toContain('Learn JavaScript')
  });

  it('displays all items', function(){
    element(by.id('all_link')).click();
    var allItems = element.all(by.repeater("allItem in toDoCtrl.items"));
    expect(allItems.last().getText()).toContain('Learn JavaScript')
  });

  it('can clear all the items', function(){
    element(by.id('clear_all')).click();
    element(by.id('all_link')).click();
    var allItems = element.all(by.repeater("allItem in toDoCtrl.items"));
    expect(allItems).toBeEmpty;
  });

  it('can add an item to toDoList', function(){

  });

  it('can remove an item from toDoList', function(){

  });

  it('can count the items on toDoList', function(){

  });

  it('can count the items on completed list', function(){

  });

  it('can count the items on the list of all the items', function(){

  });
});