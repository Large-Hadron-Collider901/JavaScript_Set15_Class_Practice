// #### CodeSchoolInstructor Class
// Create a CodeSchoolInstructor class with attributes teachername, previousEmployer, and knownLanguages.
// Create a function that prints each attribute. Create an object of the class in your main function.

class CodeSchoolInstructor {
  constructor(teacherName, previousEmployer, knownLanguages) {
    this.teacherName = teacherName;
    this.previousEmployer = previousEmployer;
    this.knownLanguages = knownLanguages;
  }
}

function main() {
  let teacher1 = new CodeSchoolInstructor(
    "John Doe",
    "CERN",
    "English, Latin, JavaScript, C++, HTML5, CSS3, PHP, Python, Hieroglyphics, Sanskrit"
  );
  console.log(
    ` Code School Instructor Name: ${teacher1.teacherName}, Previous Employer: ${teacher1.previousEmployer}, Known Languages: ${teacher1.knownLanguages}`
  );
}

main();
