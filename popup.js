var button = document.getElementById("button"); //declare a button
// var mybutton = document.getElementById("mybutton");
var x = document.getElementById("details"); //declare the info(display? or not)

const apiKey = "2dd4bf6a30e471db16ac25e6587e7c91"; //your api! Don't use mine
x.style.display = "none"; //by default it's a NO


// mybutton.onclick = function(){
//     if (navigator.geolocation) {
//         navigator.geolocation.getCurrentPosition(Positionweather);
//     } else {
//         alert("Geolocation is not supported by your computer");
//     }
// }
//
// function Positionweather(position) {
//     var msg = document.getElementById("msg");
//     var temp = document.getElementById("temp");
//     var maxt = document.getElementById("maxt");
//     var mint = document.getElementById("mint");
//     var hum = document.getElementById("hum");
//     var desc = document.getElementById("desc");
//     var lat = position.coords.latitude;
//     var lon = position.coords.longitude;
//     var url1 = "https://api.openweathermap.org/data/2.5/weather?lat=";
//     var url2 = "&lon=";
//     var url3 = "&appid=";
//     var url4 = "&units=metric";
//     var url = url1.concat(lat,url2,lon,url3,apiKey,url4);
//     fetch(url)
//         .then(response => response.json())
//         .then(data => {
//             var name = data.name;
//             var country = data.sys.country;
//             var t = data.main.temp;
//             var maxtemp = data.main.temp_max;
//             var mintemp = data.main.temp_min;
//             var humidity = data.main.humidity;
//             var des = data.weather[0]["main"];
//             x.style.display = "block";
//             msg.textContent = name + " ," + country;
//             temp.textContent = t + " *C";
//             maxt.textContent = "Maximum Temp : " + maxtemp + " *C";
//             mint.textContent = "Minimum Temp : " + mintemp + " *C";
//             var icon1 = "https://openweathermap.org/img/wn/";
//             var icon2 = data.weather[0]["icon"];
//             var icon3 = "@2x.png";
//             var icon = icon1.concat(icon2,icon3);
//             document.getElementById("icon").src = icon;
//             hum.textContent = "Humidity : " + humidity + " %";
//             desc.textContent = des;
//         })
//         .catch(() => {
//             x.style.display = "block";
//             msg.textContent = "Please search for a valid city 😩";
//         });
// }

// This is for whatever city you search for
button.onclick = function(){ //you will need to tell the button what to do once click on it
    var inputVal = document.getElementById("myInput").value
    var msg = document.getElementById("msg");
    var temp = document.getElementById("temp");
    var maxt = document.getElementById("maxt");
    var mint = document.getElementById("mint");
    var hum = document.getElementById("hum");
    var desc = document.getElementById("desc");
    var url1 = "https://api.openweathermap.org/data/2.5/weather?q=";
    var url2 = "&appid=";
    var url3 = "&units=metric";
    var url = url1.concat(inputVal,url2,apiKey,url3);

    fetch(url)//Now I would like to do something with the URL, fetch whatever info inside of the url
        .then(response => response.json())
        .then(data => {
            var name = data.name;
            var country = data.sys.country;
            var t = data.main.temp;
            var maxtemp = data.main.temp_max;
            var mintemp = data.main.temp_min;
            var humidity = data.main.humidity;
            var des = data.weather[0]["main"];
            x.style.display = "block";
            msg.textContent = name + " ," + country;
            temp.textContent = t + " *C";
            maxt.textContent = "Maximum Temp : " + maxtemp + " *C";
            mint.textContent = "Minimum Temp : " + mintemp + " *C";
            var icon1 = "https://openweathermap.org/img/wn/";
            var icon2 = data.weather[0]["icon"];
            var icon3 = "@2x.png";
            var icon = icon1.concat(icon2,icon3);
            document.getElementById("icon").src = icon;
            hum.textContent = "Humidity : " + humidity + " %";
            desc.textContent = des;
        })
        .catch(() => {
            x.style.display = "block";
            msg.textContent = "The city you searched for is not valid! Try again";
        });
}