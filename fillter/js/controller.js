app.controller("myctrl",($scope,myfactory)=>{

    var promise = myfactory.callServer($scope.hostName);
    /*for(let i = 1; i<=10; i++){
			console.log("CPU Doing SOme Logic Calc ",i);
		}
*/
    promise.then(function(data){
        
        $scope.tempdata=data;
    },function(err){
        
        $scope.Error=err;
        
    })
    
});