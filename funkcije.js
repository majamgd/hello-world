function dan() {
    return (new Date()).getDay()
}

function sat() {
    return (new Date()).getHours()
}

function godina() {
    return (new Date()).getFullYear()
}

var a =  godina();
console.log(a);

var b = sat();
console.log(b);

function ddd(a) {
    if (a === "godina"){
       return godina();
    }
    if(a === "dan"){
        return dan();

    }
    if(a === "sat"){
        return sat();
    }
}
var xxx = ddd("dan");
console.log(xxx);





