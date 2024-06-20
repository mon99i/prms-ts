// 기본 배열
let numbers : number[] = [1,2,3,4,5];

let fruits : string[] ['apple', 'banana', 'orange'];

for(let i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
}

// union 배열
let mixedArray : (number | string)[] = [1, 'two', 3, 'four'];

for (let i = 0; i < mixedArray.length; i++) {
    console.log(mixedArray[i]);
}

// 타입 추론
let infer = [1,2,3];

for(let i = 0; i < infer.length; i++) {
    console.log(infer[i]);
}

//readonly 배열
let readOnlyArray : ReadonlyArray<number> = [1,2,3];

// tuple (타입의 순서 정해져있다.)
let greeting : [number, string, boolean] = [1, 'hello', true];

for(let i = 0; i < greeting.length; i++) {
    console.log(greeting[i]);
}

//Spread 연산자 (괄호를 없애는 역할.)
let firArray = [1,2,3];
let secArray = [4,5,6];

let combineArray = [...firArray, ...secArray];

for(let i = 0; i < combineArray.length; i++) {
    console.log(combineArray[i]);
}

