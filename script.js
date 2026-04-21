let input=document.querySelector("#Input")
let srch=document.querySelector("#Search")
let data=document.querySelector("#weaData")

srch.addEventListener("click",()=>{

let val=input.value.trim().toLowerCase();

if (val==="") {
  data.innerHTML=`<p class="flex justify-center mt-5 bg-red-500 text-white font-bold p-2 rounded-lg">⚠️ There is no input !</p>`
  return
}

input.val=="";
async function weather(){

  try {
    data.innerHTML=

`





<button 
  type="button" 
  class="inline-flex items-center 
         text-white font-medium leading-5 rounded-lg 
         px-4 py-2.5 focus:outline-none transition duration-300"
>
  <svg 
    aria-hidden="true" 
    class="w-6 h-6  animate-spin text-white fill-black me-2" 
    viewBox="0 0 100 101" 
    xmlns="http://www.w3.org/2000/svg"
  >
    <path 
      d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908Z" 
      fill="white"
    />
    <path 
      d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" 
      fill="currentFill"
    />
  </svg>

  Loading...
</button>




`
    

    let response= await fetch (`https://api.weatherapi.com/v1/current.json?key=b28fdeda371449df927174122260804&q=${val}`)

  let dataInp= await response.json();


  if (dataInp.error) {
    data.innerHTML= `<p class="flex justify-center bg-red-500 text-white font-bold p-2 rounded-lg" > 😞Sorry! Your "${val}" is not matching our terms , is it a city are you sure?</p>`
    return
  }
let databox = (`
  <div class="flex flex-col md:flex-row md:flex-wrap justify-center items-center mt-6 gap-3">

    <div class="w-full md:w-[200px] relative group inline-block">
    <div class=" flex justify-center items-center h-[70px] bg-slate-600 text-white text-lg font-bold  rounded-xl p-3 shadow-lg">
      ${dataInp.location.name}, ${dataInp.location.country}
    </div>
     <span class="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 
               hidden group-hover:block opacity-0 group-hover:opacity-100 
               transition duration-500
               bg-slate-300 text-black text-xs px-2 py-1 rounded whitespace-nowrap">
    Location (${dataInp.location.name}, ${dataInp.location.region} ${dataInp.location.country})
  </span>
    </div>

    <div class="w-full md:w-[200px] relative group inline-block" >
    <div class=" flex justify-center items-center gap-2 bg-slate-600 text-white text-lg font-bold rounded-xl p-3 shadow-lg">
    <img class="h-10 w-10" src="https:${dataInp.current.condition.icon}">
      ${dataInp.current.condition.text}
    </div>
    <span class="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 
               hidden group-hover:block opacity-0 group-hover:opacity-100 
               transition duration-500
               bg-slate-300 text-black text-xs px-2 py-1 rounded whitespace-nowrap">
    Weather Condition
  </span>
    </div >

    <div class="w-full md:w-[130px] relative group inline-block">
    <div class=" flex justify-center items-center bg-slate-600 text-white text-4xl font-bold  rounded-xl p-3 shadow-lg">
      ${Math.round(dataInp.current.temp_c)}°C
    </div>
    <span class="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 
               hidden group-hover:block opacity-0 group-hover:opacity-100 
               transition duration-500
               bg-slate-300 text-black  text-xs px-2 py-1 rounded whitespace-nowrap">
    Temperature ${Math.round(dataInp.current.temp_c)}°C
  </span>
    
    </div>

    <div class="w-full md:w-[130px] relative group inline-block">
    <div class=" flex flex-col justify-center items-center bg-slate-600 text-white rounded-xl p-3 shadow-lg">
      <span class="text-sm">Humidity</span>
      <span class="text-lg font-bold">${Math.round(dataInp.current.humidity)}%</span>
    </div>
    <span class="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 
               hidden group-hover:block opacity-0 group-hover:opacity-100 
               transition duration-500
               bg-slate-300 text-black  text-xs px-2 py-1 rounded whitespace-nowrap">
   Humidity ${Math.round(dataInp.current.humidity)}%
  </span>
    
    </div>

    <div class="w-full md:w-[130px] relative group inline-block">
    <div class=" flex flex-col justify-center items-center bg-slate-600 text-white rounded-xl p-3 shadow-lg">
      <span class="text-sm">Wind Speed</span>
      <span class="text-lg font-bold">${Math.round(dataInp.current.wind_kph)} Km/h</span>
    </div>

    <span class="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 
               hidden group-hover:block opacity-0 group-hover:opacity-100 
               transition duration-500
               bg-slate-300 text-black  text-xs px-2 py-1 rounded whitespace-nowrap">
   Windspeed ${Math.round(dataInp.current.wind_kph)} Km/h
    
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