/*app.controller("myctrl",($scope,myfactory)=>{
    $scope.callMe=function(){
        var promise = myfactory.callserver($scope.word);
        for(let i = 1; i<=10; i++){
            console.log("cpu doing some logic calc",i);
        }
       Promise.then(function(data){
           console.log("controller rec the promise data");
           console.log("Data is ",data);
          $scope.result = data;
           $scope.tempdata=[hello, hii, how are you];
       }, function(err){
           console.log("controller  rec the promise error");
           $scope.error =err;
                     
                     })
    
}
})*/
app.controller("myctrl",($scope,myfactory)=>{
	$scope.callMe=function(){
		var promise  = myfactory.callServer($scope.word);
		//myfactory.callServer2();
		for(let i = 1; i<=10; i++){
			console.log("CPU Doing SOme Logic Calc ",i);
		}
		promise.then(function(data){
			console.log("Controller Rec the Promise Data");
			$scope.result = data;
			$scope.tempdata=data.data;
		},function(err){
			console.log("Controller Rec the Promise Error");
			$scope.error = err;
		})
		
	}
})