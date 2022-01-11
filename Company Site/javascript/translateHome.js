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


/* BODY */
var definintion = document.getElementById('definition');
var banner = document.getElementById('banner');
var label1 = document.getElementById('shop_label1');
var label2 = document.getElementById('shop_label2');
var label3 = document.getElementById('shop_label3');
var label4 = document.getElementById('shop_label4');
var item1 = document.getElementById('shop_item1');
var item2 = document.getElementById('shop_item2');
var item3 = document.getElementById('shop_item3');
var item4 = document.getElementById('shop_item4');
var item5 = document.getElementById('shop_item5');
var item6 = document.getElementById('shop_item6');
var item7 = document.getElementById('shop_item7');
var item8 = document.getElementById('shop_item8');

var question = document.getElementById('LT');
var subQuestion = document.getElementById('LT2');
var name = document.getElementById('contact_label1');
var nameInput = document.getElementById('name_input');
var email = document.getElementById('contact_label2');
var emailInput = document.getElementById('email');
var message = document.getElementById('contact_label3');
var messageInput = document.getElementById('contact_textarea');
var contactButton = document.getElementById('contact_button');
/* BODY end*/
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

  /* translating body */
  definintion.innerHTML = "un minorista de electrónica de consumo ubicado en Spinrfield, Missouri, con productos que van desde piezas de computadoras hasta teléfonos móviles nuevos o reacondicionados. visite nuestra tienda hoy para ver qué artículos tenemos en stock.";

  banner.innerHTML = "¡Explore Nuestro Inventario!";
  label1.innerHTML = "Teléfonos Móviles";
  label2.innerHTML = "Portátil";
  label3.innerHTML = "PC Para Juegos";
  label4.innerHTML = "Componentes de la Computadora";
  item1.innerHTML = "Teléfonos Reacondicionados";
  item2.innerHTML = "Teléfonos Nuevos";
  item3.innerHTML = "Teléfonos Para Juegos";
  item4.innerHTML = "Controladores";
  item5.innerHTML = "Teclados";
  item6.innerHTML = "Monitores";
  item7.innerHTML = "Almacenamiento";
  item8.innerHTML = "Memoria";

  question.innerHTML = "¿Tengo una pregunta?";
  subQuestion.innerHTML = "Desplácese hasta la parte inferior de la página para obtener más información de contacto.";
  name.innerHTML = "Nombre";
  nameInput.placeholder = "Tu nombre";
  email.innerHTML = "Tu Email*";
  emailInput.placeholder = "Tu correo electrónico";
  message.innerHTML = "Tu Mensaje*";
  messageInput.placeholder = "Ingrese su mensaje";
  contactButton.innerHTML = "Entregar";
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

  /* translating body */
  definintion.innerHTML = "a consumer electronics retailer located in Spinrfield, Missouri with products ranging from computer parts to new or refurbished mobile phones";

  banner.innerHTML = "Explore Our Inventory!";
  label1.innerHTML = "Mobile Phones";
  label2.innerHTML = "Laptops";
  label3.innerHTML = "Gaming PCs";
  label4.innerHTML = "Computer Components";
  item1.innerHTML = "Refurbished Phones";
  item2.innerHTML = "New Phones";
  item3.innerHTML = "Gaming Phones";
  item4.innerHTML = "Controllers";
  item5.innerHTML = "Keyboards";
  item6.innerHTML = "Monitors";
  item7.innerHTML = "Storage";
  item8.innerHTML = "Memory";

  question.innerHTML = "Have a question?";
  subQuestion.innerHTML = "Scroll to the bottom of the page for more contact information.";
  name.innerHTML = "Name";
  nameInput.innerHTML = "Your email";
  email.innerHTML = "Your Email*";
  emailInput.innerHTML = "Your email address";
  message.innerHTML = "Your Message*";
  messageInput.innerHTML = "Enter your message";
  contactButton.innerHTML = "Submit";
}
