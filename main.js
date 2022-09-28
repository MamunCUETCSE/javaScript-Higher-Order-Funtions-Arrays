const companies=[
    {name:"company one", category:"Finance", start:1998,end:2021},
    {name:"company two", category:"Retail", start:1992,end:2020},
    {name:"company three", category:"Auto", start:1995,end:2025},
    {name:"company four", category:"technology", start:1991,end:2027},
    {name:"company five", category:"retail", start:1999,end:2020},
    {name:"company six", category:"auto", start:1998,end:2020},
    {name:"company seven", category:"Finance", start:1990,end:2020},
    {name:"company eight", category:"retail", start:1994,end:2020},
    {name:"company nine", category:"Finance", start:1998,end:2020}
];
const ages =[33, 12, 20, 16, 5, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];
/*for(let i=0; i<companies.length; i++)
{
    console.log(companies[i]);
}
*/
//for each
/*companies.forEach(function(company)
{
    console.log(company);
})*/

//filter


/*let canDrink=[];
for(let i=0;i<ages.length;i++)
{
    if(ages[i]>=21)
    canDrink.push(ages[i]);
}
*/
/*const canDrink = ages.filter(function(age){
if(age>=21)
{
    return true;
}
});
*/
const canDrink = ages.filter(age => age>=21);
console.log(canDrink);
//filter retail companies
/*const retailCompanies = companies.filter(function(company)
{
    if(company.category==='retail')
    return true;
});*/
//or
const retailCompanies = companies.filter(company => company.category=== 'Retail');
console.log(retailCompanies);

//get 80's companies
const eightiesCompany= companies.filter(company => (company.start>=1990 && company.start<2000));
console.log(eightiesCompany);
//companies that lasted for 10 years or more

const lastedCompanies = companies.filter(company => (company.end - company.start >23));
console.log(lastedCompanies);
