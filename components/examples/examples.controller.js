    // create the controller and inject Angular's $scope
    app.controller('examplesController', function($scope, $http) {
    
        //create array
        var notesArray = [];

        //this function is called with ng-click in view and a note is passed into it
        //when the note comes in, we add it to the notesArray.
        $scope.addNote = function(note){
            notesArray.push(note);  //push is a method on an array to add a value to it
            $scope.ToDo = notesArray; //we set a scope variable to this array so we can do an ng-repeat on view
            $scope.note = ""; //reset the model variable so a new ToDo note can be entered
        }

        //this function is to remove the note from the array stack.
        $scope.removeNote = function(itemIndex){
            var a = notesArray.splice(itemIndex,1);
        }

        $scope.makeRequest = function(){
            //remember that this would not work if you didn't put the $http inside the controler function above! Very important!
            $http({
                method : "GET",  //this is the method of the request that goes to the server.
                url : "https://jsonplaceholder.typicode.com/users" //this is the URL the webserver is listing on for requests.
            }).then(function mySuccess(response) {
                $scope.users = response.data;  //this assigns a scope variable that we can ng-repeat over in the view.
            }, function myError(response) {
                $scope.Error = "There has been a error with your request";
            });
        }

        $scope.clearFields = function(){
            $scope.customer = "";
        }






    });