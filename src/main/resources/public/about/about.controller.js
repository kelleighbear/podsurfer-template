angular.module('app')
  .controller('aboutController', aboutController);

aboutController.$inject = [];
function aboutController() {
  var vm = this;
  vm.message = 'About';
}
