app.factory("myfactory",($http,$q)=>{
    var object = {
        callServer(){
            var pr = $q.defer();
            var url="https://mjjuneja.github.io/ajaxLink/user.json"
            $http.get(url).then(function(data){
                pr.resolve(data);
                console.log(data.data);
            },function(err){
                pr.reject(er);
            });
            
           return pr.promise;
        }
        
    }
    
    return object;
})