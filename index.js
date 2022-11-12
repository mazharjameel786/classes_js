class Person_Age {
    constructor(name, DOB) {
      this.name = name;
      this.DOB = DOB;
  
    }
    age() {
      let date = new Date();
      return date.getFullYear() - this.DOB;
    }
  }
  
  let myAge = new Person_Age("Mazhar", 1989);
  document.getElementById("p1").innerHTML =
  myAge.name +" you are " + myAge.age() + " years old.";