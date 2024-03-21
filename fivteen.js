

//reverse a number
function reverse(num){
    sum =0, rem =0;
    while(num!=0){
        let rem = num % 10;
        sum = sum * 10 + rem;
        num = parseInt(num/10);
    }
    console.log(sum);
}

function add(a,b){
    return a+b;
}

console.log(add(2,4))

for(let i=0; i<=add(3,4); i++){
    console.log(i)
}

// if(add(10,20)==30){
//     console.log("success");
// }else{
//     console.log("fail");
// }
// // 4 types
// 1. return but no argument
// 2. return with argument
// 3. no return but argument
// 4. no return and no argument


reverse(123);   
reverse(543);
reverse(12345667);
reverse(789);