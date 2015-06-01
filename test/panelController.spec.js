describe('Panel Controller', function(){
  beforeEach(module('toDoList'));

  beforeEach(inject(function($controller){
    ctrl = $controller('panelController');
  }));

  it('starts from panel 1', function(){
    expect(ctrl.panel).toEqual(1);
  });

  it('can change panel', function(){
    ctrl.setPanel(2);
    expect(ctrl.panel).toEqual(2);
  });

  it('knows what panel is active', function(){
    expect(ctrl.isPanel(1)).toBe(true);
  });

  it('knows if a panel is not active', function(){
    expect(ctrl.isPanel(2)).toBe(false);
  });
});
