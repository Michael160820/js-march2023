// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
function s(a, b) {
    return a * b;
}

console.log(s(10, 20));

// - створити функцію яка обчислює та повертає площу кола з радіусом r
function ss(r) {
    return Math.PI * r ** 2;
}

console.log(ss(9));

// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
function sCil(r, h) {
    return Math.PI * 2 * r * h;
}

const rCil = sCil(10, 5);
console.log(rCil);

// - створити функцію яка приймає масив та виводить кожен його елемент
const arr = [11, 22, 33, 44];

function printArr(arr) {
    for (const item of arr) {
        console.log((`item: ${item}`));
    }
}

printArr(arr);

// - створити функцію яка створює параграф з текстом. Текст задати через аргумент
function printParag(text, tag) {
    document.write(`<${tag}> ${text} </${tag}>`);
}

printParag('This is my fucking text!', 'h1');

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
function ulLi(text) {
    document.write(`
    <ul>
        <li>${text}</li>
        <li>${text}</li>
        <li>${text}</li>
    </ul>
    `)
}

ulLi('This is my fucking text!')

// - створити функцію яка створює ul з трьома елементами li.
// Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом,
// який є числовим (тут використовувати цикл)
function ulLi2(text, qLi) {
    document.write('<ul>');
    for (let i = 0; i < qLi; i++) {
        document.write(`<li>${text}</li>`)
    }
    document.write('</ul>');
}

ulLi2('Hello!', 5);

// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
const array2 = [23, 444, 'sdfsdfdsf', true, 'ddd', 'dddd'];

function listCr(arr) {
    document.write('<ul>');
    for (const arrElement of arr) {
        document.write(`<li>${arrElement}</li>`);
    }
    document.write('</ul>');

}

listCr(array2);

// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ.
// Для кожного об'єкту окремий блок.
const users = [
    {id: 1, name: 'vasya', age: 31},
    {id: 2, name: 'petya', age: 30},
    {id: 3, name: 'kolya', age: 29},
    {id: 4, name: 'olya', age: 28},
    {id: 5, name: 'max', age: 30},
    {id: 6, name: 'anya', age: 31},
    {id: 7, name: 'oleg', age: 28},
    {id: 8, name: 'andrey', age: 29},
    {id: 9, name: 'masha', age: 30},
    {id: 10, name: 'olya', age: 31},
    {id: 11, name: 'max', age: 31}
];

function printUser(arr) {
    for (const user of arr) {
        document.write(`<div>id: ${user.id} // name: ${user.name} // age: ${user.age}</div>`);
    }
}

printUser(users);

// - створити функцію яка повертає найменьше число з масиву
const arrayOfNumbers = [234, -23, 55, 0, -99, 3455];

function min(arr) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        if (result < arr[i]) {
            result = arr[i];

        }
    }
    return result;
}


document.write(`<ul>${min(arrayOfNumbers)}</ul>`);

// - створити функцію sum(arr)яка приймає масив чисел,
// сумує значення елементів масиву та повертає його.
// Приклад sum([1,2,10]) //->13
const x = [1, 2, 3, 4, 5, 6, 7, 8, 9, 90];

function sumElements(arr) {
    let sum = 0;
    for (const arrElement of arr) {
        sum = sum + arrElement;
    }
    return sum;
}

document.write(`<ul>${sumElements(x)}</ul>`);

// - створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відаовідних індексах
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]

function swap(arr, index1, index2) {
    [arr[index1], arr[index2]] = [arr[index2], arr[index1]];
    return document.write(`<ul>${arr}</ul>`);
}

swap([1,2,3,4,5,6,7,8,9], 3,0);

// - Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD') // => 250
function exchange(sumUAH, currencyValues, exchangeCurrency) {
    for (const item of currencyValues) {
        if (item.currency === exchangeCurrency) {
            return sumUAH / item.value;
        }
    }
}

const result = exchange(
    1000,
    [{currency: 'USD', value: 40}, {currency: 'EUR', value: 42}],
    'USD'
);
document.write(`<ul>${result}</ul>`);