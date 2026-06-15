const MathModule =(() => {
    function Add(a,b){
        return a+b;
    }
    function sub(a,b){
        return a-b;
    }
    function mult(a,b){
        return a*b;
    }
    function div(a,b){
        if(b==0){
            return "division by zero not allowed";
        }
        return a/b;
    }
    return {
        Add,sub,mult,div
    };
   
})();
const num1 = parseFloat(process.argv[2]);
const num2 = parseFloat(process.argv[3]);
if(isNaN(num1)||isNaN(num2)){
    console.log("please enter two numbers ");
    console.log("Example:node mathApp.js 20 10");
    process.exit(1);
}
console.log("addition",MathModule.Add(num1,num2));
console.log("subtraction",MathModule.sub(num1,num2));
console.log("multiplicaton",MathModule.mult(num1,num2));
console.log("addition",MathModule.div(num1,num2));