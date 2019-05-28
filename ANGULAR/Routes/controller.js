app.controller("ctrl2", function($scope) {
    console.log("hhhhhhh")
    $scope.lastname = "Shihab"
  });
app.controller("ctrl1", function($scope,  $http) {
    $scope.firstname = "Raed"
    $scope.sendDataToServer = function(fullname, username, password, sitelocation, phonenumber) {
        console.log(fullname, username, password, sitelocation, phonenumber);
        var body = {
          fullname: fullname,
          username: username,
          password: password,
          sitelocation: sitelocation,
          phonenumber: phonenumber
      
        }
        
        $http({
          method: 'POST',
          headers:{"Content-Type" : "application/json"},
          body :JSON.stringify(body),
          url: 'http://localhost:5002/signupEngineer'
        }).then(function successCallback(response) {
          console.log(response)
          return response.json();
            // this callback will be called asynchronously
            // when the response is available
          }).then(function(data) {
            console.log( data);
          });
    }
  });
