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



}); //End service