function recursionPrint(n){
    if( n< 1){
        return;
    }
    console.log(n);
    recursionPrint(n - 1);
}
recursionPrint(10);