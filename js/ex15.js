let dia = new Date();
let hora = dia.getHours();
let minuto = dia.getMinutes();
if((hora==1) || (hora==2) || (hora==3) || (hora==4) || (hora==5))
    document.write(" Vai dormir vagabundo!");
if((hora==6) || (hora==7) || (hora==8) || (hora==9) || (hora==10) || (hora==11))
    document.write("Bom dia!");
if (hora==12) document.write("Vamos almoçar?");
if ((hora==13) || (hora==14) || (hora==15) || (hora==16) || (hora==17))
    document.write("Boa tarde!");
if ((hora==18) || (hora==19)) document.write("Bom final de tarde!");
if ((hora==20) || (hora==21) || (hora==22)) document.write("Boa noite!");
if (hora==23) document.write("Ó Meu! Já é quase meia-noite!");
if (hora==0) document.write("Meia-noite! já é amanhã!");
if((hora==19) & (minuto==30)) document.write("<br>Vamos pra aula!");
if((hora==20) & (minuto==50)) document.write("<br>Hora do Recreio!");
if((hora==22) & (minuto==30)) document.write("<br>Vamos embora, a aula terminou!");