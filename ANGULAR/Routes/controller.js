app.controller("ctrl2", function($scope) {
    console.log("hhhhhhh")
    $scope.lastname = "Shihab"
  });
app.controller("ctrl1", function($scope) {
    $scope.firstname = "Raed"
    $scope.sendDataToServer = function(para) {
        console.log(para)
    }
  });



  app.controller('myCtrl3', function($scope ,$http) {
    $scope.SendSingInWorker= function(Username ,Password){
      console.log(Username , Password)
       var body = {
         username: Username,
         password:Password
       }
     
       $http({
        method: 'POST',
        headers:{"Content-Type" : "application/json"},
        body :JSON.stringify(body),
        url: 'http://localhost:5000/signinWorker'
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

  // app.post('/signinWorker', function(req, res) {
  //   const username = req.body.username;
  //   const password = req.body.password;

  app.controller("carpenters", function($scope , $http) {
    /*carpenter*/
    // Simple GET request example:ds
    var TheId;
$http({
  method: 'GET',
  url: 'http://localhost:5002/carpenter'
}).then(function successCallback(response) {
    console.log(response.data[0].id)
    TheId = response.data[0].id
    console.log(TheId)

    $scope.fullname = response.data[0].fullName;
    $scope.Experience = response.data[0].experienceLevel;
    $scope.Professionl = response.data[0].role;
    $scope.Status = response.data[0].status;
    $scope.Role = response.data[0].role;


  }, function errorCallback(response) {
    console.log("This is the Error : ",response)
  });
    // $scope.fullname = TheId;
    // $scope.Experience = "Experr";
    // $scope.Professionl = "Professional	";
    // $scope.Status = "Active";
    // $scope.Role = "Carpenter";
    
  });


