// let NameArray=[
//     {
//         Name:'hello',
//         Age:18
//     },
//     {
//         Name:'ho',
//         Age:19
//     },{
//         Name:'o',
//         Age:21
//     },
//     {
//         Name:'h',
//         Age:54
//     },
//     {
//         Name:'f',
//         Age:25
//     }
// ]


// let filteronthebassofage=(humanarray)=>{
// humanarray.forEach((element, index) => {
//     if (element.Age===25){
//         NameArray.push(100);
//     // humanarray.pop();
//     }
// });
// return humanarray;
// }
// // console.log(NameArray);
// let newValue= filteronthebassofage(NameArray);
// console.log(newValue);



// let ArrayOfObjects=[
//     {Name:'W',
//     Age:10
//     },
    
//    {Name:'Y',
//         Age:10
//         },
//     {Name:'G',
//     Age:30
//      },
//   {Name:'H',
//      Age:20
//      },
        
    
// ]

// let testOFsplice=(Array1)=>{
// Array1.forEach(element => {
//     if(element.Age>=20){
//         Array1.splice(0,1,{Name:'Taha',Age:18})
//     }
// });
// return Array1;

// }
// let newValue=testOFsplice(ArrayOfObjects);
// console.log(newValue);

// let ArrayOfClass=[18,15,10,12];
// ArrayOfClass.forEach(function(newValue,index){
// console.log(newValue,index);
// })


// let GetSevenValue=()=>{
//     let sevenValue = (document.querySelector('.seven').dataset.seven);
//     let getvalue=document.querySelector('.input')
//     getvalue.placeholder=sevenValue;
//     // console.log(sevenValue);
// }


// let we='we here for javascript ' 
// let h=we.repeat('5')


// console.log(h)
//  document.querySelector('.change').onclick= color;
// function color(){
//     document.querySelector('.change').style.color='red';
// }




// let a='hello we here';
// let b= a.substr(2,5);
// console.log(b);

// let Name='ali';
// switch(Name){
// case 'ali':
//     console.log('we herer');
// break;
// case 'taha':
//     console.log('ja ja tur ja ');


// }


// function newcar (Name,color,model)
// {
//     this.name=Name;
//     this.Color=color;
//     this.model=model;
//    this.AllaboutCar=function(){
//         return `${this.name} and color is ${this.Color}`
//     }
// }
// let Honda=new newcar('City','red',2018)
// // console.log(Honda)
// // console.log(Honda.AllaboutCar(  ))
// newcar.prototype





// console.log(window)
// let items=document.querySelectorAll('.items')
// items.forEach((item) => console.log(item));
// console.log(items)

// let ul =document.querySelector('.items')
// ul.remove();
// ul.lastElementChild.remove();
// ul.firstElementChild.innerHTML='we herer'
// let btn=document.querySelector('.btn');

// btn.addEventListener('click',(e)=>{
//     e.preventDefault();
//     // console.log(e.target)
// let form= document.querySelector('#my-form')
// // form.style.background='red'

// }) 

// let myForm=document.querySelector('#my-form');
// let MyName=document.querySelector('#name');
// let Message=document.querySelector('.msg');
// let EmailInput=document.querySelector('#email');
// let Userlist=document.querySelector('#users');



// myForm.addEventListener('submit',onSubmit,false);
// function onSubmit(e){
//     e.preventDefault();

// if(MyName.value==='' || EmailInput.value===''){
//    Message.classList.add('error');
//     Message.innerHTML='Please Enter All fields';
//    setTimeout( ()=>Message.remove(),2000  );
// }

// else{
//     let li=document.createElement('li');
//     li.appendChild(document.createTextNode(`${MyName.value}  ${EmailInput.value}`));
//     Userlist.appendChild(li);


// // Clear fields 
// MyName.value=''
// EmailInput.value=''  

// }
    
// }   
// let Array1=['item1','item2'];
// // let Array2=['item1','item2'];
// // let Array2=Array1.slice(0).concat(['3rwewrfsfsfds'])
// let onemore=['we hrer']
// let Array2=[...Array1,...onemore]

// let fruits=['apple','mango','bannana','peach','sdadsa']
// // 
// for(let fruit in fruits){
//     console.log(fruit)
// }


// let Array1=['value1','value2','value3','value4']

// let [my1,my2,...mynewArray]=Array1;

// let mynewArray=Array1.slice(2)
// let my1=Array1[0];
// let my2=Array1[1];
// console.log(`value of my 1 is ${my1}`)
// console.log(`value of my 2 is ${my2}`)
// console.log(mynewArray)

// let key2='heihgt'
// let person={
//     name:'taha',
//     age:25,
//    'person hoobie':['football','sleeping']
// }
// let key="email"
// person[key2]=5.4
// person[key]='tahashek@gmail.com'

// console.log(person)



// // console.log(person)
// // console.log(person['hoobie'])
// // person['person']='male'
// // console.log(person);


// for (let key in person){
//     console.log(`${key}:${person[key]}`)
// }

// console.log(Object.keys(person))
// let key1='object1';
// let key2='object2';

// let value1='myvalue1'
// let value2='myvalue2'

// let obj={
// [key1]:value1,
// [key2]:value2

// }
// console.log(obj)


// let Array1=[1,2,3]
// let Array2=[4,5,6]

// Array3=[...Array1,...Array2]
// console.log(Array3)
// let personTaha={
//     name:'taha';
//     age:18,
//     height:5.4
// }
// let newperson={...personTaha}
// console.log(newperson)

// let obj1={
//     key1:'value1',
//     key2:'value2'
// }

// let object2={
//     key3:'val4',
//     key4:'val5'
// }
// let newobj={...'abc'}
// console.log(newobj)



// let Array1=['item1','item2']
// let [var1,var2]=Array1;
// console.log(var1,var2)

// let person={
//     bandname:'mike',
//     age:19,
// };



// let{bandname,age}=person;
// console.log(bandname,age)
// let var1=person.bandname
// let var2=person.age
// console.log(bandname,age)



// let game={
//     gameName:'football',
//     players:11,
//     subs:5
// }
// let {subs:gameName,players,}=game;
// console.log(gameName)

// let users=[
//     {userId:1,Name:'taha',gender:'male'},
//     {userId:2,Name:'ali',gender:'male'},
//     {userId:3,Name:'malik',gender:'male'},
   

// ]

// let [ {Name:hello},, {gender} ]=users
// console.log(hello)




// for(let user of users){
//     console.log(user.userId)
// }


// function hello(strings){

//     return strings[0]
// }
// console.log(hello('dfgdfgdfgdf'))







// function find(array,target){
//     for (let i=0;i<array.length;i++){
//         if(array[i]===target){
//             return i;
//         }
        
//     }
//     return -1
// }
// const mynewArray=[1,2,3,4,5];
// let answer=find(mynewArray,1);
// console.log(answer)



// function inside fucntion 
// let app=()=>{

// let myfunc=()=>{
//     console.log('hello from my finc');
// }

// let add=(num1,num2)=>{
//     return num1+num2;
// }

//     console.log('hello');

//     myfunc()
//     console.log(add(50,8110)) 

// }

// app()
// \


// default parameters 444



// let taha=function(a,b=0){
// return a+b;
// }
// console.log(taha(5,20865))


// let addnumber=(...addnumber)=>{
//     let total =0;
//     for (let number of addnumber){
//         total=total + number
//     }
//     return total;
// }
// console.log(addnumber(1,2,3))
// function func2(name){
// console.log('we here 2',name)
// }


// function hello(callback){

//     console.log('we here')
// callback('taha')
// }
// hello(func2)



// let myfun=()=>{
//     function hello(){
//         return 2+8596
//     }
//     return hello;
// }
// let we=myfun();
// console.log(we())


// let number=[4,5,6,7]

// function  hello(numbers,index){
// console.log(`index is ${index} number is ${numbers}`)
// }


// number.forEach(function(numbers,index){
//     console.log(numbers+541,index)
// })

//  user.forEach((element) => {
//     console.log(element.Name)
//  });


// let number=[1,2,3,5,6]
  
// // function hello(number){
// //     return number*number
// // }

// hi=number.map((number)=>{

// })




// let user=[
//     {Name:'thaa',age:18},
//     {Name:'malik',age:24},
//     {Name:'ram',age:23},
//     {Name:'sea',age:22}
// ]

// let hello=user.map((first)=>{
//    return first.age
// }
//     )

//     console.log(hello)


// let num1=[1,2,3,4,5,6,7,8,9]



// let num2= num1.filter((element)=>{
// return element%2===1
// });
// console.log(num2)


// let user =[
//     {id:1,Pname:"laptop",Price:12000},
//     {id:2,Pname:"tab",Price:22000},
//     {id:3,Pname:"mobile",Price:32000}
// ]

//   let cart= user.reduce((value1,totalValue )=>{
//     return value1+totalValue

// },0);



// let Name='taha';
// for (let name of Name ){
//     console.log(name)
// }
// let user =[
//     {id:1,Pname:"laptop",Price:12000},
//     {id:2,Pname:"tab",Price:22000},
//     {id:3,Pname:"mobile",Price:32000}
// ]
// for(let users of user ){
//     console.log(users)
// }


console.log('JavaScript OOP');


// let person ={
//     Name:'taha',
//     age:5,
   
// }
// function about(hobby,music)
//     {
//         console.log(this.Name,this.age,hobby,music)
//     }



// let user1={
//     Name:'taha',
//     age:94,
// }

// let user2={
//     Name:'ali',
//     age:95,    
// }

// about.call(user1,'fotball','freestyle')



// let doubleNumber =(number)=>{
//     return number.map(element=> element*2)


// }
// console.log(doubleNumber([5,8]))


// let marks ={
//     ali:98,
//     malik:52,
//     hani:34
// }
// for(let mark of marks){
//     console.log(mark)
// }

// let result=''
// let a=[1,2,3,4,5,6];
// for (let number of a ){
//     result+=number;
//     console.log(result)
// }

// let Array1=[1,2,3,4,5,6];
// let sum=0;
// // for(let i=0;i<Array1.length; i++){
// //         sum+=Array1[i];
     
// //     }

//     // console.log(sum)
// for(let num of Array1){
//     sum+=num
// }
// console.log(sum)


// let array=[1,2,3,4,5,6];
// array.forEach(element =>  {
    
//     console.log(element)
// });
let number=[1,23,4,5,6,7,8,9]

console
