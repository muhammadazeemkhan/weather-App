// const btn = document.getElementById('btn')
// btn.addEventListener('click' , weatherApp)

async function onload(){
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=karachi&units=metric&appid=59d5356017e168aa0280e39d774e4b65`)
    console.log(response)
    const responseJson = await response.json()
    console.log(responseJson)

    const temp = Math.floor(responseJson.main.temp)
    console.log(temp)
    const temperature = document.querySelector('.Temp')
    temperature.innerHTML = temp + '&#8451;'


    const weatherCondition = responseJson.weather[0].main;
    const iconcode = responseJson.weather[0].icon;
    const iconurl = "http://openweathermap.org/img/w/" + iconcode + ".png";

   const icon =  document.querySelector('.Condition')
   icon.innerHTML = `<img id="wicon" src=${iconurl} alt="Weather icon"> ${weatherCondition}`


    const city = responseJson.name
    const country = responseJson.sys.country
    const location = document.querySelector('.Location')
    location.innerHTML = `<i class="material-icons locationIcon">place</i> ${city}, ${country}`
    // changeBgColor()
}


onload()


const input = document.getElementById('city-input')
input.addEventListener('keyup', enterFunction)
function enterFunction(Event){
    if(Event.keyCode===13){
        // weatherApp()
        // console.log(input.value)
        weatherApp()
        // changeBgColor()
    }
}
async function weatherApp(){
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${input.value}&units=metric&appid=59d5356017e168aa0280e39d774e4b65`)
    console.log(response)
    const responseJson = await response.json()
    console.log(responseJson)

    const temp = Math.floor(responseJson.main.temp)
    console.log(temp)
    const temperature = document.querySelector('.Temp')
    temperature.innerHTML = temp + '&#8451;'


    const weatherCondition = responseJson.weather[0].main;
    const iconcode = responseJson.weather[0].icon;
    const iconurl = "http://openweathermap.org/img/w/" + iconcode + ".png";

   const icon =  document.querySelector('.Condition')
   icon.innerHTML = `<img id="wicon" src=${iconurl} alt="Weather icon"> ${weatherCondition}`


    const city = responseJson.name
    const country = responseJson.sys.country
    const location = document.querySelector('.Location')
    location.innerHTML = `<i class="material-icons locationIcon">place</i> ${city}, ${country}`
    // changeBgColor()
}




// const currentDate = new Date()
// console.log(currentDate)

// const hours = currentDate.getHours()
// console.log(hours)  


const currentTime = ()=>{
    const currentDate = new Date();
    
    var currentHour = currentDate.getHours();
    var currentMinute = currentDate.getMinutes();
    var currentSecond = currentDate.getSeconds()
    var amPm = 'AM'
    
    
    if(currentHour === 0){
        currentHour = 12
        amPm = 'AM'
        // console.log(currentHour , amPm)
    }else if(currentHour>0 && currentHour<12){
        currentHour = currentHour
        amPm = 'Am'
        // console.log(currentHour,amPm)
    }
    else if(currentHour >12){
        currentHour = currentHour-12
        amPm = 'PM'
        // console.log(currentHour , amPm)
    
    }else if(currentHour===12){
        currentHour = currentHour
        amPm = 'PM'
        // console.log(currentHour , amPm)
    }
    
    // console.log(`Current time - ${currentHour}:${currentMinute}:${currentSecond}`);

    const time = document.querySelector('.Time')
    time.innerHTML = `${currentHour}:${currentMinute}:${amPm}`
}
currentTime()

setInterval(()=>{ 
    currentTime()
   
},1000)


function changeBgColor(){

    // change background color from HEX code
    
        var colorPannel = "#"
        var hexaDecimal = "0123456789ABCDEF"
        for(var i=0 ;i<6 ; i++){
            colorPannel = colorPannel + hexaDecimal[Math.floor(Math.random()*16)]
            document.getElementById('main-container').style.backgroundColor = colorPannel
            document.getElementById('main-container').style.transition = '0.5s'
        }
    }    
// const hour = currentDate.getHours()
