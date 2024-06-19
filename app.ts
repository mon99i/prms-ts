enum GenderType {
    Male,
    Female
}

interface Student{
    stdId : number;
    stdName : string;
    age : number;
    gender : GenderType;
}

let std = {
    stdId : 1234,
    stdName : 'lee',
    age : 10,
    gender : GenderType.Female
};

function getStudent(id : number) : Student {
    return {
        stdId : id,
        stdName : 'lee',
        age : 10,
        gender : GenderType.Female
    }
}

function setStudent(student : Student) : void {
    console.log(student);
}

setStudent(std);
