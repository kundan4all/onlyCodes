app.controller("myctrl",($scope,myfactory)=>{
    $scope.load=()=>{
        console.log("U Click on Button Load Fn Call");
        var pid=$scope.pid;
        var promise = myfactory.serverCall(pid);
        for(let i=1; i<=10; i++){
            console.log("i am doing something else",1*2);
        }
        promise.then((result)=>{
            $scope.mydata=result;
        },(err)=>{
            $scope.error=err;
        })
    }
});