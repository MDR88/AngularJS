

    // configure our routes
    app.config(function($routeProvider) {
		
		
        $routeProvider


            .when('/', {
                templateUrl : 'components/home/home.view.html',
                controller  : 'homeController'
            })
			
            .when('/home', {
                templateUrl : 'components/home/home.view.html',
                controller  : 'homeController'
            })	

            .when('/about', {
                templateUrl : 'components/about/about.view.html',
                controller  : 'aboutController'
            })			
			
            .when('/example', {
                templateUrl : 'components/examples/examples.view.html',
                controller  : 'examplesController'
            })
			
			.otherwise('/', {
                templateUrl : 'components/home/home.view.html',
                controller  : 'homeController'
			});					
			
    });


	


	
	



   
	

	
	
	
	
	
	
	
	
	
	
	