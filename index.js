//coloque qualquer nome 
let nome = "lari";
//coloque uma quantidade de xp
let xp =  11000;
//o nivel vai ser classificado de acordo com o xp
let nivel = "";

if (xp < 1000){
    nivel = "ferro";
}
else if (xp <= 2000){
    nivel = "bronze";
}
else if (xp <= 5000){
    nivel = "prata";
}
else if (xp <= 7000){
    nivel = "ouro";
}
else if (xp <= 8000){
    nivel = "platina";
}
else if (xp <= 9000){
    nivel = "ascendente";
}
else if (xp <= 10000){
    nivel = "imortal";
}
else {
    nivel = "radiante";
}

console.log("O Herói de nome " + nome + " está no nível: " + nivel);
