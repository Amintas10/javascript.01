let dia = new Date();
let hora = dia.getHours();


if (hora < 18) {
  document.write('<img alt="diuna" src="../fotos/horse-3246562_1280.jpg">');
} else {
  document.write(
    '<img alt="noturno" src="../fotos/monochrome-image-8598798_1280.jpg">'
  );
}
