let NameArray=[
    {
        Name:'hello',
        Age:18
    },
    {
        Name:'ho',
        Age:19
    },{
        Name:'o',
        Age:21
    },
    {
        Name:'h',
        Age:54
    },
    {
        Name:'f',
        Age:25
    }
]


let filteronthebassofage=(humanarray)=>{
humanarray.forEach((element, index) => {
    if (element.Age>=2){
        NameArray.pop();
    // humanarray.pop();
    }
});
return humanarray;
}
// console.log(NameArray);
let newValue= filteronthebassofage(NameArray);
console.log(newValue);