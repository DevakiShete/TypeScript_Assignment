//Write a typescript program which contains one function named Maximum.
//That function array of numbers and returns the largest number of array.

function Maximum (arr : number[]) : number
{
    var max : number = 0
    for(var i=0;i<arr.length;i++)
    {
        if(arr[i]>max)
        {
            max = arr[i]
        }
    }
    return max
}

var arr : number[] = [23,89,6,29,56,45,77,32]
console.log("Maximum number is: "+Maximum(arr))