let arr = [345234, 87342, 141];

console.log(arr);
console.log(arr.length);
arr[3] = 'asgadsg';

let arr2 = [1234, 123, 123, 123, 345, 234, 243, [1243, 14, 124, 5]];
let innerArr = arr2[7];
console.log(innerArr[0]);// shift+F6 переименовывается выделенная переменная и остальные

console.log(typeof innerArr);
console.log(Array.isArray(innerArr));//true

let user1 = {
    name: 'Vasya',
    age: 30,
    status: true,
    skills: ['java', 'html', 'css']
}
console.log(user1.name);
console.log(user1["name"]);
console.log(user1.skills[2]);//css

user1.surname = 'pupkin';
console.log(user1);

let color = 'green';
if (color === 'green'){
    console.log('go');
} else if (color === 'yellow'){
    console.log('wait');
} else {
    console.log('stop');
}

switch (color){
    case "green":
        console.log('go');
        break;
    case "yellow":
        console.log('wait');
        break;
    case "red":
        console.log('stop');
        break;
    default:
        console.log('?????')// на множественных проверках лучше использовать свич
}

let b = confirm('дорога чиста?');
console.log(b);