
    var app = angular.module("app", ["ngRoute"]);
    app.config(function($routeProvider) {
      $routeProvider
        .when("/signup", {
          templateUrl: "./veiw/signup.html",
          controller: "ctrl1"
        })
        .when("/signin", {
          templateUrl: "./veiw/signinEng.html",
          controller: "carpenters"
        })

        .when("/item2", {
          templateUrl: "./veiw/item2.html",
          controller: "ctrl2"
        })

        .when("/car", {
          templateUrl: "./veiw/carpenters.html",
          controller: "carpenters"
        })

    });

    app.config(['$qProvider', function ($qProvider) {
      $qProvider.errorOnUnhandledRejections(false);
  }]);
