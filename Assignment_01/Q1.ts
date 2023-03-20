//1. Write a typescript program which contains one function names as maximum, That function accepts three paramemters and it should return largest value from input parameters

function maximum(num1: number, num2: number, num3: number): number
{
    if(num1 > num2 && num1 > num3)
    {
        return num1
    }
    else if(num2 > num1 && num2 > num3)
    {
        return num2
    }
    else
    {
        return num3
    }
}

var num1: number = 23
var num2: number = 89
var num3: number = 6
console.log("Maximum number between "+num1+", "+num2+" & "+num3+" is "+maximum(num1,num2,num3))