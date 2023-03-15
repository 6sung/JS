import { get } from 'http'
import { resolve } from 'path'
import abc from './test.json'
// const user = new Object()
// user.name = 'HEROPY'
// user.age = 85

const { pid } = require("process")
const { createBrotliCompress } = require("zlib")

// console.log(user)

// function User(){
//     this.name = "HEROPY"
//     this.age = 85
// }
// const user = new User()
// console.log(user)

// const user = {
//     name : "HEROPY",
//     age : 85
// }
// const key = 'age'

// console.log(user)
// console.log(user[key])

// const userA = {
//     name : "HEROPY",
//     age : 85
// }
// const userB = {
//     name : "NEO",
//     age : 22,
//     parent: userA
// }
// console.log(userB.parent.name)
// const users = [userA,userB]
// console.log(userA.age)

// const a = function(){
//     console.log('A')
// }
// const b = function(c){
//     console.log(c)
// }
// b(a())

// ===일치 ==동등

// const a = {x:1,y:2}
// const b = {y:3,z:4}
// const c = Object.assign({},a,b)
// console.log(c)
// const d = {...a,...b}
// console.log(d)

// let a=0
// let b=0
// let c=0
// const arr = [1,2,3];
// [a,b,c]=arr

// const obj = {
//     a:1, b:2, c:3, x:7, y:100
// }
// const {x=4, a:heropy, y, c:ten=10} = obj

// function price(fruit){
//     switch(fruit){
//         case 'APPLE':
//             return 1000
//             break
//         case 'Banana':
//             return 2000
//             break
//         default:
//             p=0
//     }
// }

// const fruits = ['App','Bana','Cher']
// for(let i =0 ;i<fruits.length ;i+=1)
// for(const a of fruits)

// function sum(){}
// const sum = function() {}
// const sum = () => {}

// const sum = (a,b) => {
//     return a+b
// }

// console.log(sum(1,2))

// const a = (callback) => {
//     callback()
//     console.log('A')
// }
// const b = () => {
//     console.log('B')
// }
// a(b)

// const sum = (a,b,c) => {
//     setTimeout(() => {
//         c(a+b)
//     },1000)
// }
// sum(1,2,value => {
//     console.log(value)
// })

// const loadImage = (url, cb) => {
//     const imgEl = document.createElement('img')
//     imgEl.src = url
//     imgEl.addEventListener('load',() => {
//         setTimeout(() => {
//             cb(imgEl)
//         },2000)
//     })
// }
// const containerEl = document.querySelector('.container')
// loadImage('https://www.gstatic.com/webp/gallery/4.jpg', imgEl => {
//     containerEl.innerHTML = ''
//     containerEl.append(imgEl)
// })

// const hello = () =>{
//     console.log("hello~")
// }
// const timeout = setInterval(hello,3000)
// const h1El = document.querySelector('h1')
// h1El.addEventListener('click',() => {
//     console.log('Clear!')
//     clearInterval(timeout)
// })

// const user = {
//     firstName : 'Heropy',
//     lastName : 'Park',
//     age : 85,
//     getFullNmae : function(){
//         return `${this.firstName} ${this.lastName}`
//     }
// }
// console.log(user.getFullNmae())

// function user(){
//     this.firstName = 'Neo1'
//     this.lastName = 'Anderson'
//     return {
//         firstName : 'Heropy',
//         lastName : 'Park',
//         age : 85,
//         getFullName() {
//             return `${this.firstName} ${this.lastName}`
//         }
//     }
// }
// const lewis = {
//     firstName : 'Lewis',
//     lastName : 'Yang'
// }
// const u = user()
// console.log(u.getFullName())
// console.log(u.getFullName.call(lewis))

// const timer = {
//     title : 'TIMER!',
//     timeout(){
//         console.log(this.title)
//         setTimeout( () => {
//             console.log(this.title)
//         },6000)
//     }
// }
// timer.timeout()

//protype
//const fruits = ['Apple','Banana','Cherry']
// const fruits = new Array('Apple','Banana','Cherry')
// Array.prototype.heropy = function(){
//     console.log(this)
// }
// fruits.heropy()

// function User(first, last){
//     this.firstName = first
//     this.lastName = last
// }
// User.prototype.getFullName = function() {
//     return `${this.firstName} ${this.lastName}`
// }
// const heropy = new User('Heropy', 'Park')
// const neo = new User('Neo','Anderson')
// console.log(heropy.getFullName())
// console.log(neo.getFullName())

// ES6 Classes
// class User{
//     constructor(first,last){
//         this.firstName = first
//         this.lastName = last
//     }
//     getFullName(){
//         return `${this.firstName} ${this.lastName}`
//     }
// }
// const heropy = new User('Heropy','Park')
// const neo = new User('Neo','Anderson')
// console.log(heropy)
// console.log(neo)

//Getter,Setter
// class User{
//     constructor(first,last){
//         this.firstName = first
//         this.lastName = last
//     }
//     get fullName(){
//         return `${this.firstName} ${this.lastName}` 
//     }
//     set fullName(value){
//         [this.firstName,this.lastName] = value.split(' ')
//     }
// }
// const heropy = new User ('Heropy','Park')
// heropy.firstName = 'Neo'
// console.log(heropy.fullName)
// heropy.fullName = 'Neo Anderson'
// console.log(heropy)

//Static methods
// class User{
//     constructor(first,last){
//         this.firstName = first
//         this.lastName = last
//     }
//     getfullName(){
//         return `${this.firstName} ${this.lastName}` 
//     }
//     static isUser(user){
//         if(user.firstName && user.lastName){
//             return true
//         }
//         return false
//     }
// }
// const heropy = new User ('Heropy','Park')
// const neo = new User('Neo','Anderson')
// console.log(heropy.getfullName())
// console.log(neo.getfullName())
// console.log(User.isUser(heropy))

///상속
// class Vehicle{
//     constructor(acceleration = 1){
//         this.speed = 0
//         this.acceleration = acceleration
//     }
//     accelerate(){
//         this.speed += this.acceleration
//     }
//     decelerate(){
//         if(this.speed <= 0){
//             console.log('정지!')
//             return
//         }
//         this.speed -= this.acceleration
//     }
// }
// class Bicycle extends Vehicle{
//     constructor(price = 100, acceleration){
//         super(acceleration)
//         this.price = price
//         this.wheel = 2
//     }
// }
// const bicycle = new Bicycle(300)
// bicycle.accelerate()
// bicycle.accelerate()
// console.log(bicycle)
// console.log(bicycle instanceof Vehicle)
// class Car extends Bicycle{
//     constructor(license, price, acceleration){
//         super(price, acceleration)
//         this.license = license
//         this.wheel = 4
//     }
//     // 오버라이딩
//     accelerate(){
//         if(!this.license){
//             console.error('무면허!!')
//             return
//         }
//         this.speed += this.acceleration
//         console.log('가속!',this.speed)
//     }
// }
// const carA = new Car(true, 7000, 10)
// const carB = new Car(false, 4000, 6)
// carA.accelerate()
// carA.accelerate()
// carB.accelerate()
// console.log(carA instanceof Car)
// class Boat extends Vehicle{
//     constructor(price, acceleration){
//         super(acceleration)
//         this.price = price
//         this.moter = 1
//     }
// }
// const boat = new Boat(10000,5)
// console.log(boat)

// class A{
//     constructor(){}
// }
// class B extends A{
//     constructor(){
//         super()
//     }
// }
// class C extends B{
//     constructor(){
//         super()
//     }
//}

// const date = new Date()
// const day = date.getDay()
// console.log(day)
// console.log(getDayKo(day))
// function getDayKo(day){
//     switch(day){
//         case 0:return '일요일'
//         case 1:return '월요일'
//         case 2:return '화요일'
//         case 3:return '수요일'
//         case 4:return '목요일'
//         case 5:return '금요일'
//         case 6:return '토요일'
//     }
// }

//Object.entries() 객체의 값 속성과 값으로 하나의 배열을 만들어 요소로 추가한 2차원 배열 반환
// const user = {
//     name : 'Heropy',
//     age : 85,
//     isValid : true,
//     email : 'asfefas@afewf'
// }
// console.log(Object.entries(user))
// for (const [key,value] of Object.entries(user)){
//     console.log(key,value)
// }

// JSON.stringify() 데이터를 json 문자로 변환
// JSON.parse() json문자를 분석해 데이터로 변환
// console.log(abc)

// 동기 비동기
// const btnEl = document.querySelector('h1')
// btnEl.addEventListener('click', () => {
//     console.log('Clicked!')
// })
// console.log('Hello')

// Callback 패턴
// const a = (callback) => {
//     setTimeout(()=>{
//         console.log(1)
//         callback()
//     },1000)
// }
// const b = (callback) => {
//     setTimeout(()=>{
//         console.log(2)
//         callback()
//     },1000)
// }
// const c = () => console.log(3)
// a(() => {
//     b(() => {
//         c()
//     })
// })

// const getMovies = (movieName, callback) => {
//     fetch(`https://www.omdbapi.com/?apikey=7035c60c&s=${movieName}`)
//         .then(res => res.json())
//         .then(res => {
//             console.log(res)
//             callback()
//         })
// }
// getMovies('frozen', () => {
//     console.log('겨울왕국')
//     getMovies('avengers', () => {
//         console.log('어벤져스')
//     })
// })

//promise
// const a = () => {
//     return new Promise(resolve => {
//         setTimeout(() => {
//             console.log(1)
//             resolve()
//         }, 1000)
//     })
// }
// const b = () => {
//     return new Promise(resolve => {
//         setTimeout(() => {
//             console.log(2)
//             resolve()
//         }, 1000)
//     })
// }
// const c = () => {
//     return new Promise(resolve => {
//         setTimeout(() => {
//             console.log(3)
//             resolve()
//         }, 1000)
//     })
// }
// const d = () => console.log(4)
// a()
//     .then(() => b())
//     .then(() => c())
//     .then(() => {
//         d()
//     })
// a()
//     .then(b)
//     .then(c)
//     .then(d)

// //Async Await
// const e = () => console.log(2)
// const wrap = async() => {
//     await a()
//     b()
// }
// wrap()

//Resolve, Reject , 에러 핸들링
// const delayAdd = (index, cb, errorCb) => {
//     setTimeout( () => {
//         if(index > 10){
//             errorCb(`${index}는 10보다 클 수 없습니다.`)
//             return
//         }
//         console.log(index)
//         cb(index + 1)
//     },2000)
// }
// delayAdd(
//     13,
//     res => console.log(res),
//     err => console.error(err)
// )
// const delayAdd = index => {
//     return new Promise((resolve, reject) => {
//         setTimeout(()=>{
//             if(index > 10){
//                 reject(`${index}는 10보다 클 수 없습니다.`)
//                 return
//             }
//             console.log(index)
//             resolve(index + 1)
//         },2000)
//     })
// }
// delayAdd(2)
//     .then(res => console.log(res))
//     .catch(err => console.error(err))
//     .finally(() => console.log('Done!'))
// const wrap = async () => {
//     try{
//         const res = await delayAdd(5)
//         console.log(res)
//     }catch(err){
//         console.error(err)
//     }finally{
//         console.log('Done!')
//     }    
// }
// wrap()

// const getMovies = movieName => {
//     return new Promise((resolve,reject) => {
//         fetch(`https://www.omdbapi.com/?apikey=7035c60c&s=${movieName}`)
//             .then(res => res.json())
//             .then(json => {
//                 if(json.Response === 'False'){
//                     reject(json.Error)
//                 }
//                 resolve(json)
//             })
//             .catch(error => {
//                 reject(error)
//             })
//     })
// }
// let loading = true
// getMovies('avengers')
//     .then(movies => console.log('영화 목록:',movies))
//     .catch(error => console.log('에러발생!:',error))
//     .finally(() => loading = false)
// const wrap = async () => {
//     try{
//         const movies = await getMovies('avengers')
//         console.log('영화 목록 : ',movies)
//     }catch(error){
//         console.log('에러 발생!:',error)
//     }finally{
//         loading = false
//     }
// }
// wrap()

// 반복문에서 비동기 처리
const getMovies = movieName => {
    return new Promise((resolve,reject) => {
        fetch(`https://www.omdbapi.com/?apikey=7035c60c&s=${movieName}`)
            .then(res => res.json())
            .then(res => resolve(res))
        })
}
const titles = ['frozen', 'avengers', 'avater']
const wrap = async () => {
    for(const title of titles){
        const movies = await getMovies(title)
        console.log(title, movies)
    }
}
wrap()