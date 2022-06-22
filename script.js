
// 1.Get all the countries from Asia continent /region using Filter function

let requestOne= new XMLHttpRequest();
requestOne.open("GET","https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json",true);
requestOne.send();
requestOne.onload=function(){
let data=JSON.parse(requestOne.response)
let fill = data.filter((a)=> {return a})

let head2=document.createElement('h2')
head2.innerText='All the countries from Asia continent /region'
document.body.append(head2)

region="Asia"
for(let i=0;i<fill.length;i++){
            if(fill[i].region===region){
                console.log(`Asian Country = ${fill[i].name}`);

                let ul=document.createElement('ul')
                let lit1=document.createElement('li')

                lit1.innerText=`Asian Country = ${fill[i].name}`
                ul.append(lit1)
                document.body.append(ul)
            }
        }
};

//-------------------------------------------------------------------------------------------------------------------------------


// 2.Get all the countries with a population of less than 2 lakhs using Filter function

let requestTwo= new XMLHttpRequest();
requestTwo.open("GET","https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json",true);
requestTwo.send();
requestTwo.onload=function(){
let data=JSON.parse(requestTwo.response)

let head2=document.createElement('h2')
head2.innerText='All the countries with a population of less than 2 lakhs'
document.body.append(head2)

population="200000"
for(let i=0;i<data.length;i++){
    if(data[i].population < population){
        console.log(`Country = ${data[i].name}`);
        console.log(`Population = ${data[i].population}`);
        console.log('-'.repeat(50));

        let ul=document.createElement('ul')
        let lit1=document.createElement('li')
        let lit2=document.createElement('li')

        lit1.innerText=`Country = ${data[i].name}`
        lit2.innerText=`Population = ${data[i].population}`
        ul.append(lit1,lit2)
        document.body.append(ul)

    }
}
};

//-------------------------------------------------------------------------------------------------------------------------------


// 3.Print the following details name, capital, flag using forEach function


let requestThree= new XMLHttpRequest();

requestThree.open("GET","https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json",true);
requestThree.send();

requestThree.onload=function(){
let data=JSON.parse(requestThree.response)

let head3=document.createElement('h2')
head3.innerText='All country name, capital, flag'
document.body.append(head3)

data.forEach((e) => {
        console.log(`Country Name= ${e.name}`);
        console.log(`Capital = ${e.capital}`);
        console.log(`Flag = ${e.flag}`);
        console.log('-'.repeat(30));


        let ul=document.createElement('ul')
        let lit1=document.createElement('li')
        let lit2=document.createElement('li')
        let lit3=document.createElement('li')


        lit1.innerText=`Country Name= ${e.name}`
        lit2.innerText=`Capital = ${e.capital}`
        lit3.innerText=`Flag = ${e.flag}`

        ul.append(lit1,lit2,lit3)
        document.body.append(ul)



});

};


//-------------------------------------------------------------------------------------------------------------------------------

// 4.Print the total population of countries using reduce function

let requestFour= new XMLHttpRequest();

requestFour.open("GET","https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json",true);
requestFour.send();

requestFour.onload=function(){
let data=JSON.parse(requestFour.response)

// Sum of all countries population by reduce method
let totalPopulation=[]
for(let i=0;i<data.length;i++){
    totalPopulation.push(data[i].population)
}
let totalPop=totalPopulation.reduce((a,b)=>{return (a+b)})
console.log(`Sum of all country population = ${totalPop}`);


// All country and their Population

let head4=document.createElement('h2')
head4.innerText='All country and their Population'
document.body.append(head4)
for(let i=0;i<data.length;i++){
    console.log(`1. Country = ${data[i].name}`);
    console.log(`2. Total Population = ${data[i].population}`);
    console.log('-'.repeat(50));


    let ul=document.createElement('ul')
    let lit1=document.createElement('li')
    let lit2=document.createElement('li')

    lit1.innerText=`Country = ${data[i].name}`
    lit2.innerText=`Total Population = ${data[i].population}`

    ul.append(lit1,lit2)
     document.body.append(ul)

}
};



//-------------------------------------------------------------------------------------------------------------------------------


// 5.Print the country which uses US Dollars as currency.

 let requestFive= new XMLHttpRequest();

 requestFive.open("GET","https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json",true);
 requestFive.send();

 requestFive.onload=function(){
let data=JSON.parse(requestFive.response)

let head5=document.createElement('h2')
head5.innerText='The country which uses US Dollars as currency.'
document.body.append(head5)

symbol='$';
for(let i=0;i<data.length;i++){
        if(data[i].currencies[0].symbol===symbol){
        console.log(`1. Country = ${data[i].currencies[0].name}`);
        console.log(`2. Code = ${data[i].currencies[0].code}`);
        console.log(`3. Symbol = ${data[i].currencies[0].symbol}`);
        console.log('-'.repeat(70));

        let ul=document.createElement('ul')
        let lit1=document.createElement('li')
        let lit2=document.createElement('li')
        let lit3=document.createElement('li')


        lit1.innerText=`Country = ${data[i].currencies[0].name}`
        lit2.innerText=`Code = ${data[i].currencies[0].code}`
        lit3.innerText=`Symbol = ${data[i].currencies[0].symbol}`

            ul.append(lit1,lit2,lit3)
            document.body.append(ul)

                }
        }
};

//-------------------------------------------------------------------------------------------------------------------------------


