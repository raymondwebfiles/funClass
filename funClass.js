let fruits = ['Manggo','Apple','Pineapple','duhat'];
document.write(fruits+"<br>");

let data = fruits.push("papaya");
document.write(fruits+"<br><hr>");

//---------------------------------------------------
function display(arg){
    for(let i=0; i<arg; i++){
        document.write("Function "+i+" : "+fruits[i]+"<br>");
    }
}
display(fruits.length);

let newfunction = function(arg){
    document.write("New Function: "+arg+"<br>");
}
newfunction(fruits);

let anotherfunction = (arg)=>{
    document.write("Function: "+arg+"<br>");
}
anotherfunction(fruits);

//---------------------------------------------------
document.write("<hr>");
document.write("<h1>Class</h1><br>");

let nameStudent = [
    'Mar',
    'Bob',
    'Ken',
    'Ivan',
    'Joe',
];

let nameStudent2 = [
    'Jan',
    'Fer',
    'Mar',
    'April',
    'May',
    'June',
    'July',
];

class Student{
    constructor(studName){
        this.studData = studName;
    }

    list(){
        let stud = this.studData;
        for(let a=0; a<stud.length; a++){
            document.write("Name of Student: "+stud[a]+"<br>");
        }
    }

    add(newStud){
        this.studData.push(newStud);
    }
    delete(nameStudent){
        this.studData.splice(nameStudent, 1);
    }
}
let oem = new Student(nameStudent);
oem.studData = nameStudent2; //update all array

oem.delete([2]); //delete index

oem.add("toni");
oem.add("fuji");
oem.add("icar");

oem.list();


