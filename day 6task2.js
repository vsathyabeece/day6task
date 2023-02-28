/*2.Convert the UML diagram to Typescript class. - use number for double*/

class circle{
    constructor(radius,color){
      this.radius=radius;
      this.color=color;
    }
    getarea(){
      return `The area of circle is ${3.14*this.radius*this.radius}`;
    }
    getcircumference(){
      return`The color is ${this.color} and circumference ${2*3.14*this.radius}`;
  }
  }
  var c1 = new circle(2,"red");
  console.log(c1.getarea());
  console.log(c1.getcircumference());



/*3.Write a person class hold all the details*/
class persondetails{
    constructor(name,dob,age,gender,qualification,address,job){
      this.name=name;
      this.dob=dob;
      this.age=age;
      this.gender=gender;
      this.qualification=qualification;
      this.address=address;
      this.job=job;
    }
  }
  var p1=new persondetails("Rani","23.2.1990","30","female","M.E","chennai","software engineer");
  for(var a in p1){
    console.log(p1[a]);
  }
  
  /*4.Write a class to calculate the uber price*/
  
  class uber{
    constructor(price,distance){
      this.price=price
      this.distance=distance;
    }
    print(){
      return`The total cost is ${this.price * this.distance}`;
    }
  }
  var u1=new uber(200,3);
  console.log(u1.print());
