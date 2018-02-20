myApp.controller('MainController', function($location, MainService) {
    console.log('main controller created');
    var vm = this;
    vm.mainService = MainService;
    vm.newTask = {
        taskName: ''
    };
    vm.tasks = [];
    vm.completedTasks = [];
    vm.uncompleteTasks = [];


    vm.addTask = function(newTask) {
        vm.mainService.addTask(newTask)
        .then(function() {
            vm.getTasks();
        })
    }

    vm.getTasks = function() {
        vm.mainService.getTasks().then(function(response) {
            vm.tasks = response.data;
        })
    }

    vm.getTasks();

    vm.completeTask = function(task) {
        var taskId = task.id;
        vm.mainService.completeTask(taskId).then(function(response) {
            vm.getTasks();
        })
    }


}); //end main controller