myApp.service('MainService', function($http) {
    console.log('main service created');
    var self = this;

    self.addTask = function(newTask) {
       return $http.post('/task', newTask)
       .then(function(response) {
            return response;
       }).catch(function(err) {
           console.log('error with post', err);
       })
    }

    self.getTasks = function() {
        return $http.get('/task').then(function(response) {
            return response;
        }).catch(function(err) {
            console.log('error with get request', err);
        })
    }

    self.completeTask = function(taskId) {
        return $http.put('/task/' + taskId).then(function(response) {
            return response;
        }).catch(function(err) {
            console.log('error with put request', err);
        })
    }

    self.deleteTask = function(taskId) {
        return $http.delete('/task/' + taskId).then(function(response) {
            return response;
        }).catch(function(err) {
            console.log('error with delete request', err);
        })
    }


}); //End service