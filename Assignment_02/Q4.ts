//Write a typescript program which contains one arrow function maed as ChkArmstrong. That
//Function accepts one numbers and check whether number is Armstrong or not

function ChkArmstrong(num: number): boolean
{
    var temp : number = num 
    var  sum : number = 0
    var r : number
    while (temp > 0) {
        r = temp % 10
        sum += (r * r * r)
        temp = temp / 10
    }
    if(sum == num){ return true}
    else {return false}
}


var no1 : number = 153
if(ChkArmstrong(no1)){console.log(no1+" is Armstrong number")}
else{console.log(no1+" is not an Armstrong number")}

var no2 : number = 250
if(ChkArmstrong(no2)){console.log(no2+" is Armstrong number")}
else{console.log(no2+" is not an Armstrong number")}

