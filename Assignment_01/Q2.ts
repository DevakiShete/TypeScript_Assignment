//2. Write a ts program which contains one function named as Area. that function should calculate area of circle
//Accept value of radius from user and return it's area. Default value of PI should be 3.14 if it is not provided
//by the Caller.

function Area(r: number) : number
{
    
    let area = PI * r * r
    return area
}

var PI : number = 3.14

var radius : number = 2

var area = Area(radius)

console.log("Area of circle with radius "+radius+" units : "+area)
