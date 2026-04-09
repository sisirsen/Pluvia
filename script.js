let input=document.querySelector("#Input")
let srch=document.querySelector("#Search")
let data=document.querySelector("#weaData")

srch.addEventListener("click",()=>{

let val=input.value.trim();

if (val==="") {
  alert("Enter a valid Input");
  return
}

input.val=="";
async function weather(){

  try {
    data.innerText="Data is Loading..."

    let response= await fetch (`https://api.weatherapi.com/v1/current.json?key=b28fdeda371449df927174122260804&q=${val}`)

  let dataInp= await response.json();


  if (dataInp.error) {
    data.innerText=`Sorry! Your ${val} is not matching your terms`
    return
  }

  let databox=(`
    <div class="flex flex-wrap justify-center cursor-pointer item-center mt-7 gap-3">
    <div class=" w-[200px] flex flex-wrap justify-center items-center h-[75px] bg-gray-600 text-white text-lg font-bold rounded-xl p-4 shadow-lg">${dataInp.location.name}, ${dataInp.location.country}</div>


    <div class=" w-[200px] flex flex-wrap h-[75px] cursor-pointer font-bold justify-center items-center gap-2 content bg-gray-600 text-white text-lg rounded-xl p-1 shadow-lg"  ><img src="https:${dataInp.current.condition.icon}"> ${ dataInp.current.condition.text}</div>


    <div class="w-[130px] flex flex-wrap cursor-pointer font-bold justify-center items-center h-fit content bg-gray-600 text-white text-[48px] rounded-xl p-2 shadow-lg">
    ${ Math.round(dataInp.current.temp_c)+`°C`}</div>

    <div class="w-[130px] flex flex-wrap cursor-pointer font-bold h-fit justify-center items-center content bg-gray-600 text-white text-[20px] rounded-xl gap-3 p-2 shadow-lg">
    ${`<h1 class="font-bold text-md">Humidity(%)</h1>`+ 
      Math.round(dataInp.current.humidity)}%</div>

    <div  class="w-[130px] flex flex-wrap cursor-pointer font-bold h-fit justify-center items-center content bg-gray-600 text-white text-[15px] rounded-xl gap-6 p-2 shadow-lg">${`<h1 class="font-bold text-md">WindSpeed(kph)</h1>`+ Math.round(dataInp.current.wind_kph)+`Km/h`}</div>

    </div>

  `)

  data.innerHTML=databox;
  } catch (error) {
    
    data.innerText="Failed to fetch data from server";
  }


}
weather();

})
input.addEventListener("keypress",(e)=>{
  if (e.key=="Enter") {
    srch.click();
  }
})

  // <img src="https:${dataInp.current.condition.icon}"> // icon for the weather