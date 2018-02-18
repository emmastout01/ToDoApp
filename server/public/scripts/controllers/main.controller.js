myApp.controller('MainController', function($location, MainService) {
    console.log('main controller created');
    var vm = this;
    vm.mainService = MainService;


}); //end main controller