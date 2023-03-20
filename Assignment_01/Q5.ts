//Write a typescript program which contains one function named as Fibonacci.
//That function accept one number from user and print Fibonacci till that num.

function Fibonacci(num : number) : void
{
    let a: number = 1
    let b: number = 1
    let c: number = 0
    do
    {  
        a = b
        b = c
        c = a + b
        if(c<=num){console.log(c)}

    }while(c<=num )
}

var num: number = 40
Fibonacci(num)