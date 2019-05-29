app.controller("ctrl2", function($scope,  $http) {
  $scope.var1='Raed'
    console.log("hhhhhhh")
    $scope.sendWorkerDataToServer= function(fullname, username, password, experiencelevel, expectedsalary, phonenumber, role, status) {
      // console.log(fullname);
        var info = {
          fullname: fullname,
          username: username,
          password: password,
          experiencelevel: experiencelevel,
          expectedsalary: expectedsalary,
          phonenumber: phonenumber,
          role: role,
          status: status
        }
        
        $http({
          method: 'POST',
          headers:{"Content-Type" : "application/json"},
          data :JSON.stringify(info),
          url: 'http://localhost:5002/signupWorker'
        }).then(function(data) {
              console.log( data);
          });
    }
  });
app.controller("ctrl1", function($scope,  $http) {
  $scope.var2='Shihab'
    $scope.uploader = function(files) {
      console.log(files)
    //   $http.post('upload.ashx', $scope.files,
    // {
    //   headers:{'Content-type': 'multipart/form-data'}
    // });
    }
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

  app.controller("signin", function($scope,  $http) {
    $scope.signinAsAnEngineer= function(userName, Password) {
      console.log(userName, Password)
      var body = {
        username: userName,
        password: Password
      }
      $http({
        method: 'POST',
        headers:{"Content-Type" : "application/json"},
        body :JSON.stringify(body),
        url: 'http://localhost:5002/signinEngineer'
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
    $scope.tableClick = function (userName, password) {
      console.log(userName, password);
      var body = {
        username: userName,
        password: password
      }
      $http({
        method: 'POST',
        headers:{"Content-Type" : "application/json"},
        body :JSON.stringify(body),
        url: 'http://localhost:5002/signinWorker'
      }).then(function successCallback(response) {
        console.log(response)
        return response.json();
          // this callback will be called asynchronously
          // when the response is available
        }).then(function(data) {
          console.log( data);
        });
  };
  });
  app.controller("LearnMore",function($scope,$http){
    $scope.Hello="Hi"
  })


