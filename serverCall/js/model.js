/*app.factory("myfactory",($http,$q)=>{
    var object = {
        callserver(word){
           // var result = "Result Yet to come.."; 
           // var url="https://raw.githubusercontent.com/kundan4all/json/master/gender.json";
          // var url = `http://api.wordnik.com:80/v4/word.json/$hello/relatedWords?useCanonical=false&limitPerRelationshipType=10&api_key=a2a73e7b926c924fad7001ca3111acd55af2ffabf50eb4ae5`;
            var url=`http://api.wordnik.com:80/v4/words.json/reverseDictionary?query={word}&minCorpusCount=5&maxCorpusCount=-1&minLength=1&maxLength=-1&includeTags=false&skip=0&limit=10&api_key=a2a73e7b926c924fad7001ca3111acd55af2ffabf50eb4ae5`;
            console.log("now Url is"+url);
            console.log("going to call a server...");
            var defererdObject = $q.defer();
            $http.get(url).then (function(data){
                console.log("response is sucuss...");
              //  result = "result is come succus";
              defererdObject.resolve(data);
                console.log(data);
                
            },function(error){
                console.log("Error is comee..")
               // result="result is come error";
                defererdObject.reject(error);
            });
            console.log("server called.....");
            return defererdObject.promise;
        }
        
    };
    return object;
})*/
 app.factory("myfactory",($http,$q)=>{
	var object = {
		callServer(word){
			//var result = "Result Yet to come..";
			//var url = `http://api.wordnik.com:80/v4/word.json/${words}/relatedWords?useCanonical=false&limitPerRelationshipType=10&api_key=a2a73e7b926c924fad7001ca3111acd55af2ffabf50eb4ae5`;
            var url=`http://api.wordnik.com:80/v4/word.json/${word}/relatedWords?useCanonical=false&limitPerRelationshipType=10&api_key=a2a73e7b926c924fad7001ca3111acd55af2ffabf50eb4ae5`;
           // var url =`http://api.wordnik.com:80/v4/word.json/undefined/relatedWords?useCanonical=false&limitPerRelationshipType=10&api_key=a2a73e7b926c924fad7001ca3111acd55af2ffabf50eb4ae5","headers`;
			console.log("Now URL is "+url);
			console.log("Going to Call a Server... ");
			var defererdObject = $q.defer();
			$http.get(url).then(function(data){
				console.log("Response is Success...");
				//result = "Result is Come SUCCESS";
				defererdObject.resolve(data);
				
			},function(error){
				console.log("Error is Come...");
				//result = "Result is come ERROR";
				defererdObject.reject(error);
			});
			console.log("Server Called....");
			return defererdObject.promise;
		}
//		,callServer2(){
//			
//		}
	};
	return object;
})