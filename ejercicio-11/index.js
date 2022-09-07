class Student{
    constructor(name){
        this.name = name
    }
    subjects = ["Javascript", "HTML", "CSS"]
    getDates(){
        return {
            name: this.name,
            subjects: this.subjects
        }
    }
}

const student1 = new Student("Abel");
console.log(student1.getDates())
