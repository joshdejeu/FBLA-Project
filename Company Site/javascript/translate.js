/* HEADER */
var headerOption1 = document.getElementById('op1');
var headerOption2 = document.getElementById('op2');
var headerOption3 = document.getElementById('op3');
var headerOption4 = document.getElementById('op7');
var headerOption5 = document.getElementById('op8');
var headerOption10 = document.getElementById('cart');

/* HEADER end */


/* FOOTER */
var footerText1 = document.getElementById('footerText1');
var footerText2 = document.getElementById('footerText2');
var footerText3 = document.getElementById('footerText3');
var footerText4 = document.getElementById('footerText4');
var footerOption1 = document.getElementById('footerOption1');
var footerOption2 = document.getElementById('footerOption2');
var footerOption3 = document.getElementById('footerOption3');
var footerOption4 = document.getElementById('footerOption4');
var footerOption5 = document.getElementById('footerOption5');
var footerOption6 = document.getElementById('footerOption6');
/* FOOTER end */

var definintion = document.getElementById('definition');

/* find the page that is being translated */
function translateSpanish(){
  /* translating header */
  headerOption1.innerHTML = "TIENDA";
  headerOption2.innerHTML = "UBICACIONES";
  headerOption3.innerHTML = "SOBRE NOSOTROS";
  headerOption4.innerHTML = "AYUDA";
  headerOption5.innerHTML = "CONTÁCTENOS";
  headerOption10.innerHTML = "CARRO";

  /* translating footer */
  footerText1.innerHTML = "¡Manténgase conectado con nosotros en las redes sociales!";
  footerText2.innerHTML = "EXPLORAR";
  footerText3.innerHTML = "ENLACES";
  footerText4.innerHTML = "CONTACTO";
  footerOption1.innerHTML = "CONTÁCTENOS";
  footerOption2.innerHTML = "CONTÁCTENOS";
  footerOption3.innerHTML = "CONTÁCTENOS";
  footerOption4.innerHTML = "CONTÁCTENOS";
  footerOption5.innerHTML = "CONTÁCTENOS";
  footerOption6.innerHTML = "CONTÁCTENOS";

  homePageSpanish();

  /* translating body */
  if(page=="home"){
    homePageSpanish();
  }
  if(page=="locations"){
    locationsSpanish();
  }
  if(page=="aboutUs"){
    aboutUsSpanish();
  }
  if(page=="help"){
    helpSpanish();
  }
}
function homePageSpanish(){

  definintion.innerHTML = "un minorista de electrónica de consumo ubicado en Spinrfield, Missouri, con productos que van desde piezas de computadoras hasta teléfonos móviles nuevos o reacondicionados";
}

function translateEnglish(){
  /* translating header */
  headerOption1.innerHTML = "SHOP";
  headerOption2.innerHTML = "LOCATIONS";
  headerOption3.innerHTML = "ABOUT US";
  headerOption4.innerHTML = "HELP";
  headerOption5.innerHTML = "CONTACT US";
  headerOption10.innerHTML = "CART";

  /* translating footer */
  footerText1.innerHTML = "Stay connected with us on social media!";
  footerText2.innerHTML = "EXPLORE";
  footerText3.innerHTML = "LINKS";
  footerText4.innerHTML = "CONTACT";
  footerOption1.innerHTML = "";
  footerOption2.innerHTML = "CONTÁCTENOS";
  footerOption3.innerHTML = "CONTÁCTENOS";
  footerOption4.innerHTML = "CONTÁCTENOS";
  footerOption5.innerHTML = "CONTÁCTENOS";
  footerOption6.innerHTML = "CONTÁCTENOS";

  homePageEnglish();

  /* translating body */
  if(page=="home"){
    homePage();
  }
  if(page=="locations"){
    locations();
  }
  if(page=="aboutUs"){
    aboutUs();
  }
  if(page=="help"){
    help();
  }
}
function homePageEnglish(){

  definintion.innerHTML = "a consumer electronics retailer located in Spinrfield, Missouri with products ranging from computer parts to new or refurbished mobile phones";
}
