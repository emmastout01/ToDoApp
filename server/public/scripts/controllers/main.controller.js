myApp.controller('MainController', function($location, MainService) {
    console.log('main controller created');
    var vm = this;
    vm.mainService = MainService;
    vm.newTask = {
        taskName: ''
    };
    vm.tasks = [];
    vm.completeTasks = [];
    vm.incompleteTasks = [];

    vm.getTasks = function() {
        vm.mainService.getTasks().then(function(response) {
            vm.tasks = response.data;
            vm.incompleteTasks = [];
            vm.getIncompleteTasks();
        })
    }

    vm.getTasks();

    vm.addTask = function(newTask) {
        vm.mainService.addTask(newTask)
        .then(function() {
            vm.getTasks();
        })
    }

    vm.completeTask = function(task) {
        var taskId = task.id;
        vm.mainService.completeTask(taskId).then(function(response) {
            vm.getTasks();
        })
    }

    vm.deleteTask = function(task) {
        var taskId = task.id;
        vm.mainService.deleteTask(taskId).then(function(response) {
            vm.getTasks();
        })
    }


    vm.getIncompleteTasks = function() {
        for (var i=0; i<vm.tasks.length; i++) {
            if (vm.tasks[i].complete === false) {
                vm.incompleteTasks.push(vm.tasks[i]);
            }
        }
    }

    vm.getCompleteTasks = function() {
        for (var i=0; i<vm.tasks.length; i++) {
            if (vm.tasks[i].complete === true) {
                vm.completeTasks.push(vm.tasks[i]);
            }
        }
    }


}); //end main controller