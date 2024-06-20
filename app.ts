let stdId :number = 1111;
let stdName : string = 'lee';
let age :number = 20;
let gender : string = 'male';

enum GenderType {
    Male = 'male',
    Female = 'female'
};

interface Student{
    stdId : number;
    stdName : string;
    age : number;
    gender? : GenderType
    setName? : (name : string) => void;
    getName? : () => string;
};

class MyStudent implements Student{
    stdId :number = 1111;
    stdName :string = 'park';
    age :number = 30;
};

function getInfo(id : number) : Student {
    return {
        stdId : id,
        stdName : 'lee',
        age : 10,
        gender : GenderType.Female
    };
};

let std = {
    stdId : 1234,
    stdName : 'lee',
    age : 10,
    gender : 'male'
};

function setInfo(student : Student) : void {
    console.log(student);
};

//setInfo(std);


const user : {name :string, age :number} = {
    name : 'Wongi',
    age : 26
};


