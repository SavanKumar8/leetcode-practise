// input =  5

//output = 0,1,1,2,3

// 0, 1, n+1 =1 // 0+1
//n = 1 n+2 =  3//0+2 
//n-1 + 2-1 // +2-2 //1
//3-1 +  3-2 // 2+1 = 3

function fib(num) {
    return num <= 1 ? num : fib(num-1)+fib(num-2) 
}

//console.log(fib(5))

function fibnocci(num){
    let n1 = 0
    let n2 = 1
    for(let i=1;i<=num;i++){
        console.log(n1) // 0 1 1
        nextitem = n1+n2; //0+1 //1
        n1=n2 //1
        n2=nexitem //1

    }
}