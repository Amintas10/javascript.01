let frase = "Ola, Tudo bem?";
alert('ola')
let tamanho = frase.length;

document.write(frase + "<br>");

for (let i = 0; i < tamanho; ) {
    document.write("<br> posição " + i + " : " + frase.charAt(i));
    i++
}
document.write("<br><br> Primeiro caractere: " + frase.charAt(0) + "<br />");
document.write("Último caractere: " + frase.charAt(frase.length-1));