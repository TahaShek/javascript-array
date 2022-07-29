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


function newcar (Name,color,model)
{
    this.name=Name;
    this.Color=color;
    this.model=model;
   this.AllaboutCar=function(){
        return `${this.name} and color is ${this.Color}`
    }
}
let Honda=new newcar('City','red',2018)
// console.log(Honda)
console.log(Honda.AllaboutCar(  ))