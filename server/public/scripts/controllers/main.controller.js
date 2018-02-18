myApp.controller('MainController', function($location, MainService) {
    console.log('main controller created');
    var vm = this;
    vm.mainService = MainService;
    vm.newTask = {
        taskName: ''
    };
    vm.tasks = [];


    vm.addTask = function(newTask) {
        vm.mainService.addTask(newTask)
        .then(function() {
            vm.getTasks();
        })
    }

    vm.getTasks = function() {
        vm.mainService.getTasks().then(function(response) {
            console.log('response', response.data);
            vm.tasks = response.data;
            console.log('tasks', vm.tasks);
        })
    }

    vm.getTasks();


}); //end main controller