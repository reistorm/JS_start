// Задание 1 (тайминг 20 минут) 
// Напишите функцию getPrototypeChain(obj), 
// которая будет возвращать цепочку прототипов для заданного объекта obj. 
// Функция должна вернуть массив прототипов, начиная от самого объекта и 
// заканчивая глобальным объектом Object.prototype.

const Animal = {
    model: "Cat",
    power: 100,
    control: 500,
    height: 100,
    weight: 300,
    distance: 0,
    isEat: false,
    isClean: false,
    startMoving: function() {
        this.distance++;
        console.log('I start movie');
    },
    goClean: function() {
        console.log('animal is a dirty');
        this.isClean = !this.isClean;
        console.log(`animal is ${this.isClean ? 'not clean' : 'clean'}`);
    }
}

const Dog = {
    model: "Taksa",
    power: 200,
    control: 400,
    height: 200,
    weight: 500,
    isEat: false,

    isHungry: function() {
        console.log('object1 is hungry');
        this.isEat = !this.isEat;
        console.log(`object1 is ${this.isEat ? 'ate' : 'not eat'} `);
    },

    __proto__: Animal,
};
Object.setPrototypeOf(Dog, Animal);

const Dog2 = {
    model: "Mops",
    power: 300,
    control: 200,
    height: 100,
    weight: 400,
    isEat: false,
    isWalk: false,
    isWalking: function() {
        console.log('object1 dont walk');
        this.isWalk = !this.isWalk;
        console.log(`object1 is ${this.isWalk ? 'walk' : 'not walk'} `);
    },

    __proto__: Dog,
}
Object.setPrototypeOf(Dog2, Dog);

console.log(Dog2.model);
console.log(Dog2.isClean);

Dog2.startMoving();
Dog2.isClean = true;
Dog2.goClean();


function getPrototypeChain(obj) {
    const prototypeChain = [];
    let currentObj = obj;
    while (currentObj !== null){
        prototypeChain.push(currentObj);
        currentObj = Object.getPrototypeOf(currentObj);
    }
    return prototypeChain;

}
const prototypeChain = getPrototypeChain(Dog2);
console.log(prototypeChain);