

    // let x = 0;
    // // x = x + 3;
    // // x += 7;
    // x++;
    // console.log(x);
    // ++x;
    // console.log(x);
    //
    // let x = 0;
    // let y = ++x;
    // console.log(x, y);


    let users = [
    {name: 'vasya', age: 31, status: false},
    {name: 'petya', age: 30, status: true},
    {name: 'kolya', age: 29, status: true},
    {name: 'olya', age: 28, status: false, skills: [11, 22, 33]},
    {name: 'max', age: 30, status: true},
    {name: 'anya', age: 31, status: false},
    {name: 'oleg', age: 28, status: false},
    {name: 'andrey', age: 29, status: true},
    {name: 'masha', age: 30, status: true, skills: [222, 333, 444]},
    {name: 'olya', age: 31, status: false},
    {name: 'max', age: 31, status: true}
    ];

    // iter
    // let filterArr = [];
    // for (const user of users) {
    //
    //     if (user.age > 30) {
    //         filterArr[filterArr.length] = user
    //     }
    //
    //
    // }
    //
    // console.log(filterArr);

    // itar
    // debugger;
    // for (let i = 3; i < users.length - 2; i += 2) {
    //     const user = users[i];
    //     console.log(user);
    // }


    // let i = 0;
    // while (i < users.length) {
    //     const user = users[i];
    //     console.log(user);
    //     i++;
    // }


    // let i = 0;
    // do {
    //     console.log('do request');
    //     let x = [];
    // } while (i < x.length)

    // iterate object
    // let m = {
    //     name: 'max', age: 30, status: true, skills: ['html', 'css']
    // };
    //
    // for (let key in m) {
    //     console.log(key, m[key]);
    // }

    for (const user of users) {
    for (const userKey in user) {
    console.log(userKey, user[userKey]);
}
    console.log('************');

}


