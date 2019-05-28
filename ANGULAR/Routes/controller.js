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
  app.controller("carpenters", function($scope , $http) {

    $scope.button = {

    }
    $http.get("/carpenter")
		.then(function (data){
      
			$scope.jsondata = response.data;
      console.log("status:" + response.status);
      console.log(response.data)
		}).catch(function(response) {
		  console.error('Error :', response.status, response.data);
		}).finally(function() {
			 console.log("Conection");
		});
    $scope.fullname = "Qusai Alzunymat";
    $scope.Experience = "Experr";
    $scope.Professionl = "Professional	";
    $scope.Status = "Active";
    $scope.Role = "Carpenter";

    // $scope.sendDataToServer = function(para) {
    //     console.log(para)
    // }
  });

  
