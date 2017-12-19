app.controller("login",($scope,myfactory,$localStorage)=>{
//    $scope.login = $localStorage;
    $scope.message = "";
    var flag;
   
    $scope.Submit = (email,pwd)=>{
         $scope.formSubmit=(valid)=>{
        if(valid){
    var promise=  myfactory.callServer();  
        promise.then((data)=>{
                    console.log("data is coming");
                    console.log(data.data);
            data.data.forEach((x)=>{
                if(x.email==email && x.password == pwd){
                    $scope.result = x;
//                    alert("hey "+x.name);
//                    console.log( $scope.result);
                    window.location.href="./views/student.html";
                    $localStorage.user = x;
                    flag=1;
                }
            })
            if(flag!=1){
                alert("Either useir or password is wrong!");
            }
//             console.log( $scope.result);
                },(err)=>{
                    console.log("error is coming");
                    $scope.result = err;
                    
                });
    }
        
    else{
        $scope.message = "Please enter valid information"
    }
         }
    }
});