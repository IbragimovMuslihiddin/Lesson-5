function modi(num1, num2){
let newStr = num1.charAt(num1.length-1)
let bnm=newStr.repeat(num2)
let c=num1+bnm;
return c;
}
console.log(modi("Hello", 2));
console.log(modi("hey", 5));
console.log(modi("excuse me what?", 4));

function modi(num1){
let newStr = num1.charAt(num1.length-1)
if(newStr== "s"){
    return true;
}
else {
 return false;
}
}
console.log(modi("changes"));
console.log(modi("change"));
console.log(modi("dudes"));

function Bank( am , p , all) {
        let Bank = am * (p*2/20000) * all;
        let bankAll = am +(am * (p/100)) + Bank;
        return bankAll;

    }
    console.log(Bank (1,0.1,9));
    console.log(Bank (1000,100,10));
    console.log(Bank (0,0,0));
    
function strDiapozone(a){
    let b="";
    for(let i=1;i<=a;i++){
        b+=i
    if (i<a) b+= ",";

    }
    return b;

}
console.log(strDiapozone(5));
console.log(strDiapozone(6));
console.log(strDiapozone(1));

function polindrom(num){
    let a="";
    for (let i=num;i>0;i++){
        a+=i;
        if (num==a){
            return true
        }
        else{
            return false;
        }
    }
}
function isPrime(num){

    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            return false; 
        }
    }
    return true && polindrom(num);

}
 console.log(isPrime(131));
console.log(isPrime(151));
console.log(isPrime(121));

function superSearch(a,v){
    let m=" ";
    for(let i=a;i>0;i=Math.floor(i/10)){

        if(i%10!=v){
          m+=i%10;
        }
    }
    return m;
}
console.log(superSearch(1121212, 1));
console.log(superSearch(4543,4));
console.log(superSearch(1,1));

task5
function gerDeap(a,b){
    let c="";
    for(let i=a;i<=b;i++){
        c+=i+", "
    }
    return c;
}
console.log(gerDeap(1, 3));
console.log(gerDeap(4,5));
console.log(gerDeap(10,12));



function calculator(num1,operator,num2) {

    if (operator == '+') {
        return num1 + num2;  
    }
    if (operator == '-') {
        return num1 - num2;  
    }
    if (operator == '*') {
        return num1 * num2;  
    }
    if (operator == '/') {
        return num2 != 0 ? num1 / num2 : "Ошибка: Деление на ноль"; 
    }
    if (operator == '%') {
        return num1 % num2;  
    }
}
console.log(calculator(1, "+", 3));
console.log(calculator(4, "*", 5));
console.log(calculator(10, "-", 12));