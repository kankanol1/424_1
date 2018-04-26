function doAdd(A) {
   document.writeln("A");
}
//升序排序
function compareUp(value1,value2){
    if(value1<value2){
        return -1;
    }else if (value1>value2){
        return 1;
    }else
        return 0;
}

//降序排序
function compareDown(value1,value2){
    if(value1>value2){
        return -1;
    }else if (value1<value2){
        return 1;
    }else
        return 0;
}
//数值类型排序升序
function compareUpNumber(value1,value2){
    return value1 - value2;
}
//数值类型排序降序
function compareDownNumber(value1,value2){
    return value2 - value1;
}
//一个函数：返回另一个函数
function createComparisonFunction(propertyName){
    return function(object1,object2){
        var value1 = object1[propertyName];
        var value2 = object2[propertyName];
        if(value1<value2){
            return -1;
        }else if (value1>value2){
            return 1;
        }else
            return 0;
    };
}
//阶乘函数
function factorial(){
    if(arguments[0]<=1){
        //alert(arguents);
        return 1;
    } else {
       // return num * factorial(num-1);
        return  arguments[0] * arguments.callee(arguments[0]-1);
    }
}




