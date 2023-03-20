//Write a typescript program which contains one function named Summation.
//That function accepts array of numbers and returns the summation of each number from array.

function Summation(arr : number[]): number
{
    var sum : number = 0
    for(var i=0;i<arr.length;i++)
    {
        sum = sum + arr[i]
    }
    return sum
}

var arr: number[] = [23,6,7,4,5,7]
console.log("Addition is "+Summation(arr))