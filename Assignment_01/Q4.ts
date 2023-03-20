////Write a typescript program which contains one function named as ChkPrime.
//That function shouls accept one number and it should return true if the given
//number is prime and otherwise return false..

function ChkPrime(no: number): boolean
{
    let flag : number=0;
    if(no == 0 || no == 1)
    {
        return false
    }

    else if(no == 2)
    {
        return true
    }

    else
    {
        for(var i = 2 ; i < no/2 ; i++)
        {
            flag = 0;
            if(no%i == 0)
            {
                flag = 1
            }
        }

        if(flag == 0)
        {
            return true
        }

        else
        {
            return false
        }
    }
}

var no : number = 11
if(ChkPrime(no))
{
    console.log(no+" is a prime number")
}
else
{
    console.log(no+" is not a prime number")
}