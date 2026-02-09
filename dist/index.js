"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Tamagochi_1 = __importDefault(require("./Tamagochi"));
const tamagochi = new Tamagochi_1.default("Pikachu", 50);
tamagochi.jugar();
tamagochi.comer("manzana");
tamagochi.dormir();
tamagochi.mostrarEstado();
tamagochi.comer("veneno");
tamagochi.jugar();
tamagochi.dormir();
tamagochi.mostrarEstado();
