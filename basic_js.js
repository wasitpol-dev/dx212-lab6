let name = "Peter" ;
let age = 20 ;
let graduated = true ;
let gpa = 3.75;

let student1 = {
    name : "Manee",
    age : 19,
    graduated : false,
    gpa : 2.65
};

let student2 = {
    name : name ,
    age : 19,
    graduated : false,
    gpa : 2.65
};
console.log(student1);
console.log(student2);

let grade = ["A", "B", "C", "D", "F"];
let scores = [90, 80, 70, 60, 50];
let students = [student1, student2];

console.log (students[0].gpa);

function calculateGrade(scores) {
    if (scores >= 90)  {
        return "A";
    } else if (scores >= 80) {
        return "B"; 
    } else if (scores >= 70) {
        return "C";
    } else {
        return "F";
    }
}

console.log(calculateGrade(90));

for (let i = 0; i < students.length; i++)   