exports.config = {
  seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: ['toDoListFeature.js'],
  baseUrl: 'http://localhost:8080'
};