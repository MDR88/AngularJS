    // create the controller and inject Angular's $scope
    app.controller('aboutController', function($scope) {

        $scope.firstPage = true;

    
        //This is called on ng-click and changes the ng-if variable
        $scope.setPage = function(pageNumber){
            if(pageNumber === 1){
                $scope.firstPage = false;
                $scope.secondPage = true;
            }else{
                $scope.firstPage = true;
                $scope.secondPage = false;
            }
        }


    });