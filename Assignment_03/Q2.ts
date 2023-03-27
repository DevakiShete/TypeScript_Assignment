/*
2. Create one typescript application which contains one class named as Circle. Circle class contains two characteristics (Class data members) as Radius, PI.
Create one parametrised constructor which accept one value and assign it to Radius. Value of PI member is set to 3.14.
In Circle class we have to one method (Behaviours) as Area which will return area of Circle. After designing the class create two objects of that class by providing some hardcoded value. Call the method Area by using both the objects.
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

var obj1 = new Circle(5)
console.log("Area of a circle with Radius "+obj1.Radius+" units = "+obj1.Area()+" unit^2")

var obj2 = new Circle(10)
console.log("Area of a circle with Radius "+obj2.Radius+" units = "+obj2.Area()+" unit^2")