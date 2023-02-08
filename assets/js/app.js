var cl = console.log;

var ages = [ 10, 21, 30, 41, 50, 61, 70, 81, 90];

// lastIndexNumber = array.length - 1
// doubleAges = [20, 42, 60, 82, 100, 122, 140, 162, 180]

// let doubleAges = [];

// for(let i = 0; i < ages.length; i++){
//     cl(ages[i] * 2)
// }

// Higher order function >> A function which is accepts another function as argument/parameter 
// callBack function >>  A function which is passed as augument/parameter inside another function
// ArrayName.forEach(callBackfunction(parameter){
    // para >> it will gives us each and every  element of array by one by one
// })

// ages.forEach(function(age){
//     // cl(age)
//     doubleAges.push(age * 2)
// })

// ages.forEach((age) => {
//     doubleAges.push(age * 2)
// })

// ages.forEach(age => doubleAges.push(age * 2));
// cl(doubleAges);


// usecase of map method(imp)

// You have given array
// You have to create a new array from given array
// You have to apply same functionality on each and every element of given array

// 1. Map

// It returns a new array
// Length of new araay === length of given array (always)

ages =  [ 10, 21, 30, 41, 50, 61, 70, 81, 90];

//arrayName.map(callBackFunction(para){
    //para >> it gives each and every element of an array(arrayName)
// })


// let doubleAges = ages.map(function(age){
//     return age * 2
// })
// cl(doubleAges)

// let doubleAges = ages.map((age) => {
//      return age * 2
// })

let doubleAges = ages.map(age => age * 2);
cl(doubleAges);


ages = [ 10, 21, 30, 41, 50, 61, 70, 81, 90];

// let sqrtAges = [];

// for(let i = 0; i < ages.length; i++){
//     sqrtAges.push(Math.sqrt(ages[i]))
// }

// ages.forEach(function(age){
//     sqrtAges.push(Math.sqrt(age))
// })

// ages.forEach((age) => sqrtAges.push(Math.sqrt(age)))

let sqrtAges = ages.map(age => Math.sqrt(age));
cl(sqrtAges);




let companies = [
    { name: "Company One", category: "Finance", start: 1981, end: 2003 },
    { name: "Company Two", category: "Retail", start: 1992, end: 2008 },
    { name: "Company Three", category: "Auto", start: 1999, end: 2007 },
    { name: "Company Four", category: "Retail", start: 1989, end: 2010 },
    { name: "Company Five", category: "Technology", start: 2009, end: 2014 },
    { name: "Company Six", category: "Finance", start: 1987, end: 2010 },
    { name: "Company Seven", category: "Auto", start: 1986, end: 1996 },
    { name: "Company Eight", category: "Technology", start: 2011, end: 2016 },
    { name: "Company Nine", category: "Retail", start: 1981, end: 1989 }
];

// companyNames only
// let companyNamesOnly = [];
// for(let i = 0; i < companies.length; i++){
//     // cl(companies);
//     companyNamesOnly.push(companies[i].name)
// };

// companies.forEach(function(comp){
//     companyNamesOnly.push(comp.name)
// })

// companies.forEach(comp => companyNamesOnly.push(comp.name));

// let companyNamesOnly = companies.map(function(comp){
//     return comp.name
// })

// let companyNamesOnly = companies.map(comp => {
//     return comp.name
// });

let companyNamesOnly = companies.map(comp => comp.name);
cl(companyNamesOnly);

let compStart = [];

// for(let i = 0; i < companies.length; i++){
//     compStart.push({
//         compName : companies[i].name,
//         start : companies[i].start
//     })
// }

// companies.forEach(function(comp){
//     compStart.push({
//         compName : comp.name,
//         start : comp.start
//     })
// })

// companies.forEach(comp => 
//     compStart.push({
//         compName : comp.name,
//         start : comp.start
// }))

// compStart = companies.map(function(comp){
//     return{
//         compName : comp.name,
//         start : comp.start
//     }
// })

compStart = companies.map(comp => ({
    compName : comp.name,
    start : comp.start
}))
cl(compStart);


companies = [
    { name: "Company One", category: "Finance", start: 1981, end: 2003 },
    { name: "Company Two", category: "Retail", start: 1992, end: 2008 },
    { name: "Company Three", category: "Auto", start: 1999, end: 2007 },
    { name: "Company Four", category: "Retail", start: 1989, end: 2010 },
    { name: "Company Five", category: "Technology", start: 2009, end: 2014 },
    { name: "Company Six", category: "Finance", start: 1987, end: 2010 },
    { name: "Company Seven", category: "Auto", start: 1986, end: 1996 },
    { name: "Company Eight", category: "Technology", start: 2011, end: 2016 },
    { name: "Company Nine", category: "Retail", start: 1981, end: 1989 }
];

let compDuration = [];

// for(let i = 0; i < companies.length; i++){
//     compDuration.push({
//         compName : companies[i].name,
//         duration : companies[i].end - companies[i].start
//     })
// }

// companies.forEach(function(comp){
//     compDuration.push({
//         compName : comp.name,
//         duration : comp.end - comp.start
//     })
// })

// companies.forEach(comp => compDuration.push({
//         compName : comp.name,
//         duration : comp.end - comp.start
// }))

// compDuration = companies.map(comp => {
//     return {
//         compName : comp.name,
//         duration : comp.end - comp.start
//     }
// })

compDuration = companies.map(comp => ({
    compName : comp.name,
    Duration : comp.end - comp.start
}))

cl(compDuration);


// filter
// use cases of filter
// You have given a array and one condition
// You have to create a new array of elements (of given array) who pass/ satisfy the condition
// filter returns array
// lenght of new array is may or may not be equal to lenght of given array


ages = [ 10, 21, 30, 41, 50, 61, 70, 81, 90];

// let adultAges = [];

// for(let i = 0; i < ages.length; i++){
//     if(ages[i] >= 18){
//         adultAges.push(ages[i])
//     }
// }


// ages.forEach(function(age){
//     if(age >= 18){
//         adultAges.push(age)
//     }
// })


// let adultAges = ages.filter(function(age){
//     if(age >= 18){
//         return true
//     } else{
//         return false
//     }
// })


// let adultAges = ages.filter(function(age){
//     return age >= 18
// })


let adultAges = ages.filter(age => age >= 18)
cl(adultAges);


companies = [
    { name: "Company One", category: "Finance", start: 1981, end: 2003 },
    { name: "Company Two", category: "Retail", start: 1992, end: 2008 },
    { name: "Company Three", category: "Auto", start: 1999, end: 2007 },
    { name: "Company Four", category: "Retail", start: 1989, end: 2010 },
    { name: "Company Five", category: "Technology", start: 2009, end: 2014 },
    { name: "Company Six", category: "Finance", start: 1987, end: 2010 },
    { name: "Company Seven", category: "Auto", start: 1986, end: 1996 },
    { name: "Company Eight", category: "Technology", start: 2011, end: 2016 },
    { name: "Company Nine", category: "Retail", start: 1981, end: 1989 }
];

// array of companies whos catg is retail

// let compRetail = [];

// for(let i = 0; i < companies.length; i++){
//     if(companies[i].category.toLocaleLowerCase().trim() === "retail"){
//         compRetail.push(companies[i])
//     }
// }


// companies.forEach(comp => {
//     if(comp.category.toLocaleLowerCase().trim() === "retail"){
//         compRetail.push(comp)
//     }
// })


// let compRetail = companies.filter(comp => {
//     return comp.category.toLocaleLowerCase().trim() === "retail"
// })

let compRetail = companies.filter(comp => comp.category.toLowerCase().trim() === "retail")
cl(compRetail);


let compAtleast10 = [];

// for(let i = 0; i < companies.length; i++){
//     if(companies[i].end - companies[i].start >= 10){
//         compAtleast10.push(companies[i])
//     }
// }


// companies.forEach(comp => {
//     if(comp.end - comp.start >= 10){
//         compAtleast10.push(comp)
//     }
// })


// compAtleast10 = companies.filter(comp => {
//     return comp.end - comp.start >= 10
// })


compAtleast10 = companies.filter(comp => comp.end - comp.start >= 10);
cl(compAtleast10);


companies = [
    { name: "Company One", category: "Finance", start: 1981, end: 2003 },
    { name: "Company Two", category: "Retail", start: 1992, end: 2008 },
    { name: "Company Three", category: "Auto", start: 1999, end: 2007 },
    { name: "Company Four", category: "Retail", start: 1989, end: 2010 },
    { name: "Company Five", category: "Technology", start: 2009, end: 2014 },
    { name: "Company Six", category: "Finance", start: 1987, end: 2010 },
    { name: "Company Seven", category: "Auto", start: 1986, end: 1996 },
    { name: "Company Eight", category: "Technology", start: 2011, end: 2016 },
    { name: "Company Nine", category: "Retail", start: 1981, end: 1989 }
];

// [{compName : "company one", duration : 22}] and who started in 80s (1980-1989)
// let comp80s = [];

// companies.forEach(comp => {
//     if(comp.start >= 1980 && comp.start <= 1989){
//         comp80s.push({
//             compName : comp.name,
//             Duration : comp.end - comp.start
//         })
//     }
// });


// let comp80s = companies.filter(comp => {
//     return comp.start >= 1980 && comp.start <= 1989
// }).map(comp => {
//     return {
//         compName : comp.name,
//         Duration : comp.end - comp.start
//     }
// })


let comp80s = companies.filter(comp => comp.start >= 1980 && comp.end <= 1989)
                       .map(comp =>({
                        compName : comp.name,
                        Duration : comp.end - comp.start
}))
cl(comp80s);

// [{compName : "company Name", lifespan : "1981-2000"}] and comp.catg === finance

let compFinance = [];

// for(let i = 0; i < companies.length; i++){
//     if(companies[i].category.toLocaleLowerCase().trim() === "finance"){
//         compFinance.push({
//             compName : companies[i].name,
//             lifeSpan : `${companies[i].start} - ${companies[i].end}`
//         })
//     }
// };


// companies.forEach(comp => {
//     if(comp.category.toLowerCase().trim() === 'finance'){
//         compFinance.push({
//             compName : comp.name,
//             lifeSpan : `${comp.start} - ${comp.end}`
//         })
//     }
// })


compFinance = companies
        .filter(comp => comp.category.toLowerCase().trim() === "finance")
        .map(comp => ({compName : comp.name, lifeSpan : `${comp.start} - ${comp.end}`}));

cl(compFinance);


// [{compName : "company one", catg : "finance"}] && comp who run atleast for 10 years

let compRunAtleast10 = [];

// companies.forEach(comp => {
//     if(comp.end - comp.start >= 10){
//         compAtleast10.push({
//             compName : comp.name,
//             category : comp.category
//         })
//     }
// });



// compAtleast10 = companies.filter(comp => {
//     return (comp.end - comp.start) >= 10
// }).map(comp => {
//     return {
//         compname : comp.name,
//     category : comp.category
//     }
// })


compAtleast10 = companies
        .filter(comp => (comp.end - comp.start) >= 10)
        .map(comp => ({compName : comp.name, category : comp.category}));
cl(compAtleast10);



// find
// usecase of find method
// we have given array with one condition
// and we have to find out a object which match the given condition 

companies = [
    { name: "Company One", id: "1", category: "Finance", start: 1981, end: 2003 },
    { name: "Company Two", id: "2", category: "Retail", start: 1992, end: 2008 },
    { name: "Company Three", id: "3", category: "Auto", start: 1999, end: 2007 },
    { name: "Company Four", id: "4", category: "RetAil", start: 1989, end: 2010 },
    { name: "Company Five", id: "5", category: "Technology", start: 2009, end: 2014 },
    { name: "Company Six", id: "6", category: "Finance", start: 1987, end: 2010 },
    { name: "Company Seven", id: "7", category: "Auto", start: 1986, end: 1996 },
    { name: "Company Eight", id: "8", category: "Technology", start: 2011, end: 2016 },
    { name: "Company Nine", id: "9", category: " retail ", start: 1981, end: 1989 }
];

// find object whose id is 4

let givenId = 4;
let getObj;  // we want object

// companies.forEach(comp => {
//     if(Number(comp.id) === givenId){
//         getObj = comp
//     }
// })


// by forLoop
// let getObj;
// let givenObj = 2;

// for(let i = 0; i < companies.length; i++){
//   if(Number(companies[i].id) === givenObj){
//     getObj = companies[i]
//   }
// }
// cl(getObj);



// getObj = companies.find(comp => {
//     return +comp.id === givenId
// })


getObj = companies.find(comp => +comp.id === givenId)
cl(getObj);


//reduce

ages = [ 10, 21, 30, 41, 50, 61, 70, 81, 90];

// let totalAges = 0;

// ages.forEach(age => {
//     // totalAges = totalAges + age;
//     return totalAges += age
// })


let totalAges = ages.reduce((accum, nextvalue) => accum = accum + nextvalue)
cl(totalAges); 


// let multiAges = 1;
// ages.forEach(age => multiAges *= age);

let multiAges = ages.reduce((multi, nextAge) => multi *= nextAge);
cl(multiAges);



companies = [
    { name: "Company One", id: "1", category: "Finance", start: 1981, end: 2003 },
    { name: "Company Two", id: "2", category: "Retail", start: 1992, end: 2008 },
    { name: "Company Three", id: "3", category: "Auto", start: 1999, end: 2007 },
    { name: "Company Four", id: "4", category: "RetAil", start: 1989, end: 2010 },
    { name: "Company Five", id: "5", category: "Technology", start: 2009, end: 2014 },
    { name: "Company Six", id: "6", category: "Finance", start: 1987, end: 2010 },
    { name: "Company Seven", id: "7", category: "Auto", start: 1986, end: 1996 },
    { name: "Company Eight", id: "8", category: "Technology", start: 2011, end: 2016 },
    { name: "Company Nine", id: "9", category: " retail ", start: 1981, end: 1989 }
];


// [{compName : "Company One", duration : 22}]

let compNameDur = companies.reduce((accu, comp) => {
    accu.push({
        compName : comp.name,
        duration : comp.end - comp.start
    })
    return accu
}, [])
cl(compNameDur);

// find the total of durations of all companies

let totalAgesOfComp = companies.reduce((accu,comp) => {
    return accu += comp.end - comp.start
}, 0)
cl(totalAgesOfComp);

//--------------------------------------------------------------------------------- 

  let mulDur = 1;
  companies.forEach(comp => {
    mulDur *= (comp.end - comp.start)
  });
  cl(mulDur);
  
  let multiDur2 = 1;
  for(let i = 0; i < companies.length; i++){
    multiDur2 *= (companies[i].end - companies[i].start)
  };
  cl(multiDur2);
//-------------------------------------------------------------------------------------

