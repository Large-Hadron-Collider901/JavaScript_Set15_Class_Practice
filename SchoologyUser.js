// #### SchoologyUser Class
// Create a SchoologyUser class with attributes studentName, schoolName, GPA, and classes.
// Create a function that prints each attribute. Create an object of the class in your main function.

class SchoologyUser {
  constructor(studentName, schoolName, GPA, classes) {
    this.studentName = studentName;
    this.schoolName = schoolName;
    this.GPA = GPA;
    this.classes = classes;
  }
}

function main() {
  let user1 = new SchoologyUser(
    "Jane Doe",
    "CERN University",
    "4.0",
    "Physics, Engineering, and Computer Science"
  );
  console.log(
    ` Schoology Student Name: ${user1.studentName}, School Name: ${user1.schoolName}, GPA: ${user1.GPA}, Classes: ${user1.classes}`
  );
}

main();
