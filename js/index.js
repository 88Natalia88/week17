//практическое задание №1
class Worker{
    constructor(name, surname, rate, days){
this.name = name;
this.surname = surname;
this.rate = rate;
this.days = days;
    }
    getSalary(){
        let salary = this.days*this.rate;
        return salary;
    }
}
let worker1 = new Worker('Иван', 'Иванов', 10, 31);
let worker2 = new Worker('Дмитрий', 'Ясносолнышно', 15, 31);

console.log(worker2.name);
console.log(worker2.surname);
console.log(worker2.rate); 
console.log(worker2.days); 
console.log(worker2.getSalary());

//практическое задание №2
const data = [
{
    id: 1,
    type: 'car',
    brand: 'Audi',
    doors: 4,
    price: 4300000,
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/2020_Audi_e-Tron_Sport_50_Quattro.jpg/1200px-2020_Audi_e-Tron_Sport_50_Quattro.jpg'
},
{
    id: 2,
    type: 'car',
    brand: 'Mercedes-Benz',
    doors: 4,
    price: 2800000,
    image: 'https://www.mercedes-benz-mena.com/en/passengercars/mercedes-benz-cars/models/e-class/sedan-w213-fl/explore/_jcr_content/notificationboxes/notificationbox/image.MQ6.12.20211013084329.jpeg'
},
{
    id: 3,
    type: 'bike',
    brand: 'Harley-Davidson',
    maxSpeed: 210,
    price: 1300000,
    image: 'https://www.harley-davidson.com/content/dam/h-d/images/product-images/bikes/motorcycle/2022/2022-iron-883/2022-iron-883-016/2022-iron-883-016-motorcycle.jpg'
},
{
    id: 4,
    type: 'bike',
    brand: 'Harley-Davidson',
    maxSpeed: 220,
    price: 1400000,
    image: 'https://cdn.dealerspike.com/imglib/products/harley-showroom/2020/livewire/main/Vivid-Black-Main.png'
}
];
const type = data.map(function (el, i){
    return data[i].type;
});
const brand = data.map(el => el.brand);
const price = data.map(el => el.price);
const doors = data.map(el => el.doors);
const maxSpeed = data.map(el => el.maxSpeed);

//console.log(data);
//console.log(type);
//console.log(brand);
//console.log(price);
//console.log(doors);
//console.log(maxSpeed);
class Transport{
    constructor(type, brand, price){
this.type = type;
this.brand = brand;
this.price = price;
    }
    getInfo(){
        let infoNew = (`Вид транспорта: ${this.type}. Модель: ${this.brand}.`);
        return infoNew;
    }
    getPrice(){
        let priceNew = (`Стоимость: ${this.price}`);
        return priceNew;
    }
}
class Car extends Transport{
    constructor(type, brand, price, doors){
        super(type, brand, price)
        this.doors = doors;
    }
    getDoorsCount(){
let doorsNew = (`Количество дверей: ${this.doors}`);
return doorsNew;
    }
}
class Bike extends Transport{
    constructor(type, brand, price, maxSpeed){
        super(type, brand, price)
        this.maxSpeed = maxSpeed;
    }
    getMaxSpeed(){
            let speedNew = (`Максимальная скорость: ${this.maxSpeed}`);
            return speedNew;
    }
}
let data1 = new Car(type[0], brand[0], price[0], doors[0]);
let data2= new Car(type[1], brand[1], price[1], doors[1]);
let data3 = new Bike(type[2], brand[2], price[2], maxSpeed[2]);
let data4 = new Bike(type[3], brand[3], price[3], maxSpeed[3]);

console.log(data3);
console.log(data2.getInfo());
console.log(data2.getPrice());
console.log(data3.getMaxSpeed());
console.log(data2.doors);
