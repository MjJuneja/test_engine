app1.controller("student",($scope,myfactory1,$localStorage)=>{
    $scope.User = $localStorage.user;
//    console.log($scope.User);
    var str="";
    $scope.correct=0;
     $scope.showScore=false;
    $scope.name = $scope.User["name"];  
    $scope.cj=heck = 1;
    var currentSelect;
    $scope.questions = myfactory1.questions;
    var answers=[];
    $scope.submitAns = true;
    
    $scope.start = ()=>{
        $scope.visible =1;
    }
//    $scope.visible =1;
    $scope.next=(sno)=>{
        console.log($scope.first);
        $scope.test= sno;
//        $scope.visible = sno;
//        sno+=1;
//        $scope.visible +=1;
        $scope.visible++;
        answers.push(currentSelect);
        console.log(answers);
        if($scope.visible==5){
        $scope.submitAns = false;
    }
    }
//    $scope.visiblity=()=>{
//        return $scope.visible;
//    }
    $scope.toggleSelection = function toggleSelection(event) {
          // how to check if checkbox is selected or not
          
        currentSelect= event.target.value;
        
        };
    $scope.compute = ()=>{
        
       for(var i = 0;i<$scope.questions.length;i++){
//           console.log($scope.User[i].correct +" "+answers[i]);
          if($scope.questions[i].correct == answers[i]){
              $scope.correct++;
              
          }
           else{
               str+= $scope.questions[i].question +" has solution:"+$scope.questions[i].correct+'\r\n';
           }
       }
        
        
        
        console.log(str);
        if($scope.correct==$scope.questions.length){
           
            str = "All your answers are correct!";
            
        }
         $scope.showScore = true;
    }
    
    $scope.showMistake = false;
    
    $scope.showMistakes = ()=>{
        $scope.string = str;
        $scope.showMistake = true;
    }
})