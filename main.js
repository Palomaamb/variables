const PopRock= "🎵 Pop Rock"
const Rock = "🎸 Rock"
const HardRock = "🤘 Hard Rock"
const Clásica = "🎼 Clásica"

const estiloTitulo = "color:black; font-size:18px; font-weight:bold; background-color:green";

const grupo1 = {
    nombre: "The Beatles",
    añodefundación: "1960",
    activo: true,
    géneromusical: PopRock,
};

const grupo2 = {
    nombre: "Queen",
    añodefundación: "1970",
    activo: false,
    géneromusical: Rock,
};

const grupo3 = {
    nombre: "AC DC",
    añodefundación: "1973",
    activo: true,
    géneromusical: HardRock,
};

const grupo4 = {
    nombre: "Ludwig van Beethoven",
    añodefundación: "1770",
    activo: false,
    géneromusical: Clásica,
};

const grupo5 = {
    nombre: "The Rolling Stones",
    añodefundación: "1962",
    activo: true,
    géneromusical: Rock,
};

console.log(grupo1);
console.log(grupo2);
console.log(grupo3);
console.log(grupo4);
console.log(grupo5);

console.log(`%c${grupo1.nombre}`, estiloTitulo);
console.log(`%c${grupo2.nombre}`, estiloTitulo);
console.log(`%c${grupo3.nombre}`, estiloTitulo);
console.log(`%c${grupo4.nombre}`, estiloTitulo);
console.log(`%c${grupo5.nombre}`, estiloTitulo);