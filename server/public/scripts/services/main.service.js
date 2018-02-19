myApp.service('MainService', function($http) {
    console.log('main service created');
    var self = this;

    self.addTask = function(newTask) {
        console.log('posting task', newTask);
       return $http.post('/task', newTask)
       .then(function(response) {
            console.log('new task posted', response);
            return response;
       }).catch(function(err) {
           console.log('error with post', err);
       })
    }

    self.getTasks = function() {
        return $http.get('/task').then(function(response) {
            console.log('get response', response)
            return response;
        }).catch(function(err) {
            console.log('error with get request', err);
        })
    }

    self.completeTask = function(taskId) {
        console.log('about to send task', taskId);
        return $http.put('/task/' + taskId).then(function(response) {
            return response;
        }).catch(function(err) {
            console.log('error with get request', err);
        })
    }


}); //End service