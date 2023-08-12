function xxx(textContent, tag) {
    document.write('<div>');
    document.write(`<${tag}>${textContent}</${tag}>`);
    document.write('<div>');
}

xxx('Hello!', 'h1');
xxx('Okten', 'h3');

function calc(...args) {
    console.log(args); //аргументы в виде массива
}

calc(10, 20, 30, 40);

function calc2() {
    console.log(arguments); //аргументы в виде объекта
}

calc2(10, 20, 30, 40);

function addToArr(arr, ...args) {
    for (const arrElement of args) {
        if (typeof arrElement === 'number') {
            arr[arr.length] = arrElement;
        }
    }
    return arr;
}
// ЗАМЫКАНИЯ
let array = addToArr([], 11, 22, 33, 44, 'asdfads', 23423, 3, '2342', 3);
console.log(array);


function userBuilder(name, age) {
    let user = {name: name, age: age}
    return {
        getInfo: function () {
            return `name ${user.name} age - ${user.age}`
        },
        setAge: function (age) {
            if (age > user.age) {
                user.age = age;
            }

        },
    };
}

let manipulator = userBuilder('vasya', 31);



console.log(manipulator.getInfo()); //31

manipulator.setAge(32);
console.log(manipulator.getInfo()); //32

console.log(manipulator);