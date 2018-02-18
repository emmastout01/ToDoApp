myApp.controller('MainController', function($location, MainService) {
    console.log('main controller created');
    var vm = this;
    vm.mainService = MainService;
    vm.newTask = {
        taskName: ''
    }


    vm.addTask = function(newTask) {
        vm.mainService.addTask(newTask)
        // .then(function() {
        //     vm.mainService.getTasks();
        // })
    }


}); //end main controller