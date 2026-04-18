let input=document.querySelector("#Input")
let srch=document.querySelector("#Search")
let data=document.querySelector("#weaData")

srch.addEventListener("click",()=>{

let val=input.value.trim().toLowerCase();

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
    data.innerHTML= `<p class="flex justify-center bg-red-500 text-white font-bold p-2 rounded-lg" > 😞Sorry! Your "${val}" is not matching our terms , is it a city are you sure?</p>`
    return
  }
let databox = (`
  <div class="flex flex-col md:flex-row md:flex-wrap justify-center items-center mt-6 gap-3">

    <div class="w-full md:w-[200px] flex justify-center items-center h-[70px] bg-slate-600 text-white text-lg font-bold rounded-xl p-3 shadow-lg">
      ${dataInp.location.name}, ${dataInp.location.country}
    </div>

    <div class="w-full md:w-[200px] flex justify-center items-center gap-2 bg-slate-600 text-white text-lg font-bold rounded-xl p-3 shadow-lg">
    <img class="h-10 w-10" src="https:${dataInp.current.condition.icon}">
      ${dataInp.current.condition.text}
    </div>

    <div class="w-full md:w-[130px] flex justify-center items-center bg-slate-600 text-white text-4xl font-bold rounded-xl p-3 shadow-lg">
      ${Math.round(dataInp.current.temp_c)}°C
    </div>

    <div class="w-full md:w-[130px] flex flex-col justify-center items-center bg-slate-600 text-white rounded-xl p-3 shadow-lg">
      <span class="text-sm">Humidity</span>
      <span class="text-lg font-bold">${Math.round(dataInp.current.humidity)}%</span>
    </div>

    <div class="w-full md:w-[130px] flex flex-col justify-center items-center bg-slate-600 text-white rounded-xl p-3 shadow-lg">
      <span class="text-sm">Wind Speed</span>
      <span class="text-lg font-bold">${Math.round(dataInp.current.wind_kph)} Km/h</span>
    </div>

  </div>
`)

  data.innerHTML=databox;
  } catch (error) {
    
    data.innerHTML=`<p class="flex justify-center bg-red-500 text-white font-bold p-2 rounded-lg" >⚠️ Failed to fetch data from server </p>`;
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