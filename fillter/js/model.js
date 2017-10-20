app.factory("myfactory",($http,$q)=>{
    var object={
        callServer(hostName){
            var url= "https://raw.githubusercontent.com/kundan4all/json/master/mobile.json";
           // var url="http://freegeoip.net/json/"+hostName";
            
            console.log("N "+url);
			console.log("Going to Call a Server... ");

            var defererdObject = $q.defer();
            $http.get(url).then(function(data){
        
        console.log("Response is Success...",);

                defererdObject.resolve(data.data);
            },function(Error){
                console.log("Error is come...");
                defererdObject.reject(Error);
                
            });
            console.log("server called...");
            return defererdObject.promise;
        }
        
        
        
    }
    return object;
    
    
})