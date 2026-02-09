import Tamagochi from "./Tamagochi";

const tamagochi = new Tamagochi("Pikachu", 50);

tamagochi.jugar();
tamagochi.comer("manzana");
tamagochi.dormir();
tamagochi.mostrarEstado();

tamagochi.comer("veneno");
tamagochi.jugar();
tamagochi.dormir();
tamagochi.mostrarEstado();