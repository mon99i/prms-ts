// // employee 정보
// let empName : string;
// let age : number;
// let empJob : string;

// function printEmp(empName :string, age :number, empJob :string) :void {
//     console.log(`${empName}의 나이 : ${age}, 직업은 ${empJob}`);
// }

// printEmp('kim', 26, 'developer');

class Employee{
    constructor(
        private _empName : string,
        private _age? : number,
        private _empJob? : string
    ){

    }

    get empName() {
        return this._empName;
    }

    set empName(val : string) {
        this._empName = val;
    }

    printEmp = () : void => {
        console.log('이름 : ' + this._empName + '나이 : ' + this._age + '직업 : ' + this._empJob);
    }
};

let emp1 = new Employee('kim', 26, 'developer');
emp1.empName = 'lee';
emp1.printEmp();