 let inNum=document.getElementById('in-num');
 let reNum=document.getElementById('re-num');
 let deNum=document.getElementById('de-num');

 

document.getElementById('btn').addEventListener('click', ()=>{
   const inputValue=document.getElementById('input').value;
   covidData(inputValue);
})

 function covidData(dataVal){
   //  fetch(`https://covid19.mathdro.id/api/confirmed`)
   //  .then(res => res.json())
   fetch("https://covid-193.p.rapidapi.com/statistics", {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "covid-193.p.rapidapi.com",
		"x-rapidapi-key": "722760739dmshe929c87b1a8f4aap1df6c2jsn334f34731474"
	}
})  .then(res => res.json())
    .then(data => {

      for (let i = 0; i < data.response.length; i++) {
         const confirmedData = data.response[i];
         const str=confirmedData.country;
         const countryRegion=str.toLowerCase();
         const populationCountry=confirmedData.population;
         const confirmeInfected=confirmedData.cases.total;
         const recoverdRegion=confirmedData.cases.recovered;
         const deathsRegion=confirmedData.deaths.total;
         const testTotal=confirmedData.tests.total;
         const newCase=confirmedData.cases.new;
         const criticalCase=confirmedData.cases.critical;
         const day=confirmedData.day;
         
        if(countryRegion != `${dataVal}`){
            console.log('eror');
        }else{
         document.getElementById('in-num').innerHTML=`<span class="country">${countryRegion}</span>
         </br> Population:${populationCountry}</br><span class="newCase">New case  : ${newCase}</span>
         </br><span class="newCase">Infected Total: ${confirmeInfected} </span> 
         </br> Total Tests :${testTotal}`;
        document.getElementById('re-num').innerHTML=`<span class="country">${countryRegion}</span></br>
         <span class="newRe">Total Recovered: ${recoverdRegion} </span>`;
        document.getElementById('de-num').innerHTML=`<span class="country">${countryRegion}</span></br><span class="newCase">
        Total Deaths :${deathsRegion}</span> </br><span class="newCase"> Critical : ${criticalCase}</span>`;
        document.getElementById('date1').innerHTML=`${day}`;
        document.getElementById('date2').innerHTML=`${day}`;
        document.getElementById('date3').innerHTML=`${day}`;
          
        }
      }
       


     }).catch();
 }

//  const today=new Date();
//  const options={
//     weekday:'long',
//     day:'numeric',
//     month:'long'
//  }

//  const todayDate=today.toLocaleDateString(options);
//  document.getElementById('date1').innerHTML=todayDate;
//  document.getElementById('date2').innerHTML=todayDate;
//  document.getElementById('date3').innerHTML=todayDate;




 