var img1="images/banana.png";
var img2="images/cherry.png";
var img3="images/grapes.png";
var img4="images/melon.png";
var img5="images/orange.png";
var img6="images/seven.png";
var img_array=[img1,img2,img3,img4,img5,img6];

var interval = setInterval(function(){ func() }, 200);

function func(){
  var random_number1=parseInt(Math.random()*6);
  document.getElementById("flex-item1").innerHTML="<img src="+img_array[random_number1]+">";
  
  var random_number2=parseInt(Math.random()*6);
  document.getElementById("flex-item2").innerHTML="<img src="+img_array[random_number2]+">";
  
  var random_number3=parseInt(Math.random()*6);
  document.getElementById("flex-item3").innerHTML="<img src="+img_array[random_number3]+">";
  
}

function stop(){
  clearTimeout(interval);
  if( document.getElementById("flex-item3").innerHTML==img6){
    if( document.getElementById("flex-item2").innerHTML==img6){
      if( document.getElementById("flex-item1").innerHTML==img6){
        document.getElementById("h1").innerHTML="JACKJOT";
      }
    }
  }
  else{
    document.getElementById("h1").innerHTML="Better Luck Next Time";
  }
}

