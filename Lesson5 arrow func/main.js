
    // hoisting
    // function foo() {}
    // foo();
    //
    // foo('okten');
    // let foo = function (text) {
    //     console.log(text);
    //     console.log(arguments);
    // };
    // foo('okten');
    //
    //
    // ---1
    // let calc = function (a, b) {
    //     let res = a + b;
    //     return res;
    // };
    //
    // ---2
    // this -> window
    // no arguments
    // let calc = (a, b) => {
    //     let res = a + b;
    //     return res;
    // };
    //
    // ---3
    // let calc = (a, b) => a + b;
    // console.log(calc(10, 20));

    // let user = {
    //     name: 'kokos', age: 123,
    //     greeting: () => {
    //         // this-> window
    //         console.log(this.name);
    //     },
    // }
    //
    // user.greeting();


    function calc(num1, num2, fn) {
        fn(num1, num2);
    }

    // calc(10, 20, (a, b) => console.log(a + b));
    //
    //
    // calc(10, 20, function (num1, num2) {
    //     console.log(num1 + num2);
    // })
    //
    // let fn = function (num1, num2) {
    //     console.log(num1 - num2);
    // };
    // calc(100, 200, fn);

    // let users = [
    //     {name: 'vasya', age: 31, status: false},
    //     {name: 'petya', age: 30, status: true},
    //     {name: 'kolya', age: 29, status: true},
    //     {name: 'olya', age: 28, status: false},
    //     {name: 'max', age: 30, status: true},
    //     {name: 'anya', age: 31, status: false},
    //     {name: 'oleg', age: 28, status: false},
    //     {name: 'andrey', age: 29, status: true},
    //     {name: 'masha', age: 30, status: true},
    //     {name: 'olya', age: 31, status: false},
    //     {name: 'max', age: 31, status: true}
    // ];
    //
    // let filter = users.filter(value => value.age > 30);
    // console.log(filter);


    // function foobarRec() {
    //     console.log('hello');
    //     foobarRec();
    // }

    let xxx = [
    11, 22, 33, true, [111, 222, 333, ['asd', 'qwe', 'qweqweqw', [
{name: 'ananas'},
{aka: 'kaka', skills: ['java', 'js']},
{},
    [1, 2, 3, 4, 5, [true, false]]
    ]], 12312312312], 875765, 79987
    ];

    function iterateArray(arr) {
    for (const element of arr) {
    if (Array.isArray(element)) {
    iterateArray(element)
} else if (typeof element === 'object') {

    for (const elementKey in element) {
    console.log(element, element[elementKey])
    if (Array.isArray(element[elementKey])) {
    iterateArray(element[elementKey]);
}
}

} else {
    console.log(element);

}
}

}

    // iterateArray(xxx);


