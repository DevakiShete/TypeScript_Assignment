/* 
3. Create one typescript application which contains one class named as Circlex which sill inherits above Circle class.
In CircleX class we have to write one method (Behaviours) as Circumference which will return circumference of circle. After designing the class create two objects of that class by providing some hardcoded value.
Call Circumference and Area methods by using both the objects.
 */
class Circle
{
    Radius : number
    PI : number

    constructor(r : number)
    {
        this.Radius = r
        this.PI = 3.14
    }

    Area() : number
    {
        return this.PI * this.Radius * this.Radius
    }
}

class CircleX extends Circle
{
    
    constructor(r : number)
    {
        super(r)
    }

    Circumference():number
    {
        return 2 * this.PI * this.Radius
    }
}

var circle1 = new CircleX(5)
console.log("Area of a circle with Radius: "+circle1.Radius+" = "+circle1.Area());
console.log("Circumference of a circle with Radius: "+circle1.Radius+" = "+circle1.Circumference());

var circle2 = new CircleX(10)
console.log("\nArea of a circle with Radius: "+circle2.Radius+" = "+circle2.Area());
console.log("Circumference of a circle with Radius: "+circle2.Radius+" = "+circle2.Circumference());