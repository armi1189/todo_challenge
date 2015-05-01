describe('toDoListController', function(){
  beforeEach(module('toDoList'));

  var items;

  beforeEach(inject(function($controller){
    ctrl = $controller('toDoListController');
  }));

  beforeEach(inject(function(ToDoItems){
    items = ToDoItems;
  }));

  it('initialises with an empty search term', function(){
    expect(ctrl.newItem).toBeUndefined();
  });

  it('displays items', function() {
    expect(ctrl.items).toEqual(items);
  });

  it('knows how many items there are', function() {
    expect(ctrl.items.length).toEqual(2);
  })

  it('knows how many complete items there are', function(){
    var filtered = ctrl.items.filter(checkDoneStatus);
    expect(filtered.length).toEqual(1);
  });

  it('knows how many incomplete items there are', function(){
    var filtered = ctrl.items.filter(checkIncompleteStatus);
    expect(filtered.length).toEqual(1);
  });

  it('can add items', function() {
    ctrl.newItem = 'Learn JasmineJS';
    ctrl.addItem();
    expect(ctrl.items).toContain('Learn JasmineJS');
  });

  it('can close items', function() {
    var item = items[0]
    ctrl.closeItem(item);
    expect(ctrl.items).toContain({name: "Improve Ruby", status: 'done'});
  });

  function checkDoneStatus(item){
    return item.status == 'done';
  };

  function checkIncompleteStatus(item){
    return item.status != 'done';
  };
});