var square = (x) => {
    var result = x * x;
    return result;
};
console.log(square(5));

var square1 = x => x * x ;
var square2 = (x,y) => x * y ;

var user = {
    name: 'Yuriy',
    sayHi: () => {
        console.log(arguments); //problem with arguments
        console.log(`Hi ${this.name}`); //Hi undefined
    },
    sayHiAlt () {
        console.log(arguments); //{ '0': 1, '1': 4, '2': 7 }
        console.log(`Hi ${this.name}`); //Hi Yuriy
    }
};

user.sayHi();
user.sayHiAlt(1,4,7);

console.log(square(5));
