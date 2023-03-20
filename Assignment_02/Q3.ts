//Write a typescript program which contains one function named as Maximum.
//That function accepts array of numbers and returns the second largest number from array.

function secondMaximum(a:number[]) : number
{
     var temp: number = 0
    for(var i=0; i<a.length-1; i++)
    {
          for (var j=i+1; j<a.length-1;j++)
          {
               if(a[i]> a[j])
               {
                    temp = a[i];  
                    a[i] = a[j];  
                    a[j] = temp;  
               }
          }
    }
    return a[arr.length-1-2]
}


var arr : number[] = [23,77,6,29,56,45,89,32]
console.log("Second Maximum number is: "+secondMaximum(arr))