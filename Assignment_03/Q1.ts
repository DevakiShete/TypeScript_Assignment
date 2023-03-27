/*
1. Create one typescript application which contains one class named as Arithmetic.
Arithmetic class contains three characteristics (Class data members) as Number1, Number2. Create one parametrised constructor which accept two values and assign it to Number1 and Number2.
In Arithmetic class we have to write four methods (Behaviours) as Addition, Subtraction, Multiplication and Division.
Addition method will add Number1, Number2 & return result. Subtraction method will subtract Number1, Number2 & return result.
Multiplication method will multiply Number1, Number2 & return result.
Division method will divide Number1, Number2 & return result. After designing the class create two objects of that class by providing some hardcoded value. Call all the methods by using both the objects.
 */

class Arithmetic
{
    number1 : number
    number2 : number

    constructor(no1 : number, no2: number)
    {
        this.number1 = no1
        this.number2 = no2
    }

    Addition() : number
    {
        return this.number1 + this.number2        
    }

    Subtraction() : number
    {
        return this.number1-this.number2
    }

    Multiplication(): number
    {
        return this.number1 * this.number2
    }

    Division(): number
    {
        return this.number1/this.number2
    }
}

var obj1 = new Arithmetic(15,5)
var obj2 = new Arithmetic(19,16)

console.log("Operations on Object 1")
var ret = obj1.Addition()
console.log(obj1.number1+" + "+obj1.number2+" = "+ret)

ret = obj1.Subtraction()
console.log(obj1.number1+" - "+obj1.number2+" = "+ret)

ret = obj1.Multiplication()
console.log(obj1.number1+" * "+obj1.number2+" = "+ret)

ret = obj1.Division()
console.log(obj1.number1+" / "+obj1.number2+" = "+ret)

console.log("\nOperations on Object 2")
var ret = obj2.Addition()
console.log(obj2.number1+" + "+obj2.number2+" = "+ret)

ret = obj2.Subtraction()
console.log(obj2.number1+" - "+obj2.number2+" = "+ret)

ret = obj2.Multiplication()
console.log(obj2.number1+" * "+obj2.number2+" = "+ret)

ret = obj2.Division()
console.log(obj2.number1+" / "+obj2.number2+" = "+ret)
