const students = [
    {
      firstName: 'Darren',
      lastName: 'Chen',
      age: 30,
    },
    {
      firstName: 'Gordon',
      lastName: 'Chen',
      age: 28,
    },
    {
      firstName: 'Peter',
      lastName: 'Parker',
      age: 18,
    },
  ];
  
  // Write a function that takes in an array of students and returns the total number of students: getNumStudents(students) => 3
  // Write a function that takes in an array of students and returns the average age of all the students: getAverageAge(students) => 25.333333333333332
  // Write a function that takes in an array of students and returns the oldest student: getOldestStudent(students) => { firstName: 'Darren', lastName: 'Chen', age: 30 }
  // Write a function that takes in an array of students and returns the youngest student: getYoungestStudent(students) => { firstName: 'Peter', lastName: 'Parker', age: 18 }
  // Write a function that takes in a student object and returns the full name of the student: getFullName(student) => 'Darren Chen'
  


function getNumStudents(students) {

    if (Array.isArray(students)) {
        return students.length;
    } else {
        return 'received input is not an array of students';
    }
};
function getAverageAge(students) {
    let sum = 0;
    for (let i = 0; i < students.length; i++) {
      sum += students[i].age;
    }
    if (Array.isArray(students)) {
    return sum / students.length;
    } else {
        return 'received input is not an array of students';
    }
};
function getoldeststudent(students) {
    if (Array.isArray(students)) {
        
        return students.sort().shift()
    } else {
        return 'received input is not an array of students'
    }
}
function getYoungestStudent(students) {
    if (Array.isArray(students)) {
        return students.sort().reverse().shift()
    } else {
        return 'received input is not an array of students'
    }
}
function getFullName(students) {
    if (Array.isArray(students)) {

        return students.map(student => `${student.firstName} ${student.lastName}`);
    } else {
        return 'received input is not an array of students'
    }
}
module.exports = {
    students,
    getNumStudents,
    getAverageAge,
    getoldeststudent,
    getYoungestStudent,
    getFullName,
}