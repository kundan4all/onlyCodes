app.factory("myfactory",($http,$q)=>{
    return{
        	serverCall(pid){

       const url= 'http://cricapi.com/api/playerStats?pid='+pid+'&apikey=D5Zd7IXiflQFjYIf9I6i4wE7I983 ';
                console.log("Server Call ....");
        var fakeObject=$q.defer();
        $http.get(url).then(success,fail);
                console.log("Send the Server Call");
        function success(result){
            console.log("Success Call...");
        fakeObject.resolve(result);
    }
    function fail(err){
        console.log("Fail Call");
        fakeObject.reject(err);
    }
                console.log("Going to Return Promise...");
    return fakeObject.promise;
}
        
    }
 
    
})