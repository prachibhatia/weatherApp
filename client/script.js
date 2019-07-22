//document.getElementById('submitjs').onclick = function(event){
   // alert(document.getElementById('cityjs').value)
    
//}
// function loadDoc() {
//     const val = document.getElementById('cityjs').value
//     console.log(val)
//     var xhttp = new XMLHttpRequest();
//     xhttp.onreadystatechange = function() {
//       if (this.readyState == 4 && this.status == 200) {
//         const weatherObj = JSON.parse(this.responseText)
//         document.getElementById("output").innerHTML =
//         weatherObj.main.temp+" "+weatherObj.main.temp_min+" "+weatherObj.main.temp_max+" "+weatherObj.weather[0].main;
//       }
//     };
//     xhttp.open("GET", "http://api.openweathermap.org/data/2.5/weather?q="+val+"&appid=c037cfbd6f7f5df1096115b014827c8b&units=metric", true);
//     xhttp.send();
//   }


function loadWeather(){
  fetch("http://api.openweathermap.org/data/2.5/weather?q=delhi&appid=c037cfbd6f7f5df1096115b014827c8b&units=metric")
.then(res => { return res.json()})
  .then(weatherObj =>{
    console.log(weatherObj.main.temp)
  })
  .catch(err =>{
    console.log(err)
  })
}