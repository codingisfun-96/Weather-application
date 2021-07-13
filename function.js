var input = document.querySelector('.input_text');
var main = document.querySelector('#name');
var temp = document.querySelector('.temp');
var desc = document.querySelector('.desc');
var clouds = document.querySelector('.clouds');
var button= document.querySelector('.submit');
function KtoC(Kelvin) 
{
  var KTemp = Kelvin;
  var KtoC = (KTemp -273);
  result = Math.round(KtoC);
  return result;
} 
function clear(){
  document.getElementById("textfield1").value = "main";
  document.getElementById("textfield2").value = "desc";
  document.getElementById("textfield2").value = "temp";
}
button.addEventListener('click', function(name){
if (input.value == ""){
  alert("Please enter the name of any city!");
  return false;
}
fetch('https://api.openweathermap.org/data/2.5/weather?q='+input.value+'&appid=2761faaf05492b21252a882ff39c9321')
.then(response => response.json())
.then(data => {
  var tempVal = data['main']['temp'];
  var nameVal = data['name'];
  var descVal = data['weather'][0]['description'];
  var status = document.getElementById("status");
  var temp_val = KtoC(tempVal);
  main.innerHTML = nameVal.toUpperCase();
  desc.innerHTML = ""+descVal;
  temp.innerHTML = ""+temp_val +"&#8451";
  // console.log(data);
  // input.value ="";
  if(descVal =='haze'){
    status.src = "image/haze.png"
    status.style.display = "block";
  }
  else if(descVal =='sunny'){
    status.src = "image/haze.png"
    status.style.display = "block";
  }
  else if(descVal =='thunderstorm'){
    status.src = "image/thunderstorm.png"
    status.style.display = "block";
  }
  else if(descVal =='moderate rain'){
    status.src = "image/rain.png"
    status.style.display = "block";
  }
  else if(descVal =='light rain'){
    status.src = "image/rain.png"
    status.style.display = "block";
  }
  else if(descVal =='heavy rain'){
    status.src = "image/heavyrain.png"
    status.style.display = "block";
  }
  else if(descVal =='broken clouds'){
    status.src = "image/brokencloud.png"
    status.style.display = "block";
  }
  else if(descVal =='scattered clouds'){
    status.src = "image/brokencloud.png"
    status.style.display = "block";
  }
  else if(descVal =='overcast clouds'){
    status.src = "image/overcast.png"
    status.style.display = "block";
  }
  else if(descVal =='mist'){
    status.src = "image/mist.png"
    status.style.display = "block";
  }
})
.catch(err=> alert("You might have typed the name of the city incorrectly!"));
  var status = document.getElementById("status");
  main.innerHTML = "";
  desc.innerHTML = "";
  temp.innerHTML = "";
  status.style.display = "none";
  // input.value =""
})
