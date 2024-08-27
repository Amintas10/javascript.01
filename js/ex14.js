let imagemAtual = true;

function trocarImagem()
{
    let img1 = document.getElementById("img1");
    if (imagemAtual){
        img1.src ="../fotos/horse-3246562_1280.jpg"
    } else{
        img1.src = "../fotos/monochrome-image-8598798_1280.jpg"
    }
    imagemAtual = !imagemAtual;
}
