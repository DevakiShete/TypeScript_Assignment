//Write a typescript program which contains one function named as DisplayFactors.
//That function shouls accept one number and display factors of that number.


function DisplayFactors(no: number): void
{
    for(var i = 0 ; i <= no/2 ; i++)
    {
        if(no % i == 0)
        {
            console.log(i+" ")
        }
    }
}

var no: number = 20
console.log("Factors of "+no)
DisplayFactors(no)