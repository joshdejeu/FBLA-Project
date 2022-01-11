const head = document.getElementById('header');
window.onscroll = function(){
  if(window.scrollY>99){
    headerHover();
  }else{
      headerOut();
    }
};
var usaflag = document.getElementById('usaflag');
var mexflag = document.getElementById('mexflag');
var language = "";
function usaselection(){
  mexflag.style.opacity="30%";
  usaflag.style.opacity="100%";
  language = "english";
  translateEnglish();
}
function mexselection(){
  mexflag.style.opacity="100%";
  usaflag.style.opacity="30%";
  language = "spanish";
  translateSpanish();
}
var option1 = document.getElementById('op1');
var option2 = document.getElementById('op2');
var option3 = document.getElementById('op3');
var option5 = document.getElementById('op5');
var option7 = document.getElementById('op7');
var option8 = document.getElementById('op8');
var option10Icon = document.getElementById('op10_icon');
var option10 = document.getElementById('op10');
var option11 = document.getElementById('op11');
var line = document.getElementById('line');
var header = document.getElementById('header')
var link = document.getElementById('a');
function headerHover(){
  option1.style.color="black";
  option2.style.color="black";
  option3.style.color="black";
  option5.style.color="black";
  option7.style.color="black";
  option8.style.color="black";
  option1.style.textDecoration="underline";
  option2.style.textDecoration="underline";
  option3.style.textDecoration="underline";
  option7.style.textDecoration="underline";
  option8.style.textDecoration="underline";
  line.style.background="black";
  header.style.background="white";
  link.style.color="black";

  option10Icon.style.filter="brightness(0%)";
  option10.style.color="black";
  option10.style.textDecoration="underline";
  option11.style.color="black";
  option11.style.textDecoration="underline";
}
function headerOut(){
  option1.style.color="white";
  option2.style.color="white";
  option3.style.color="white";
  option5.style.color="white";
  option7.style.color="white";
  option8.style.color="white";
  line.style.background="rgba(255,255,255,0.7)";
  header.style.background="rgba(255,255,255,0)";
  link.style.color="white";
  option10Icon.style.filter="brightness(100%)";
  option10.style.color="white";
  option11.style.color="white";
  if(window.scrollY>99){
    headerHover();
    // NOTE: prevents header from switching when hovering while also not being at the top of the page
  }

}
