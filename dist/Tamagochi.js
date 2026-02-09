"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Tamagochi {
    constructor(nombre, hambre, energia = 100, animo = "feliz", vivo = true) {
        this.energia = 100;
        this.animo = "feliz";
        this.vivo = true;
        this.nombre = nombre;
        this.hambre = hambre;
        this.energia = energia;
        this.animo = animo;
        this.vivo = vivo;
    }
    comer(comida) {
        if (this.vivo) {
            if (comida === "veneno") {
                this.vivo = false;
                this.energia = 0;
                this.animo = "muerto";
                console.log(`${this.nombre} comio veneno y se murio xd`);
            }
            else if (comida === "manzana") {
                this.energia += 10;
                if (this.energia > 100)
                    this.energia = 100;
                console.log(`${this.nombre} comió una manzana. Energía +10`);
            }
            else if (comida === "pizza") {
                this.energia += 15;
                if (this.energia > 100)
                    this.energia = 100;
                console.log(`${this.nombre} comió pizza. Energía +15`);
            }
        }
        else {
            console.log(`${this.nombre} no puede comer porque no está viva.`);
        }
    }
    dormir() {
        if (this.vivo) {
            this.energia += 20;
            if (this.energia > 100)
                this.energia = 100;
            console.log(`${this.nombre} durmió. Energía +20`);
        }
        else {
            console.log(`${this.nombre} no puede dormir porque no está vivo.`);
        }
    }
    jugar() {
        if (this.vivo) {
            this.energia -= 15;
            if (this.energia < 0) {
                this.energia = 0;
                this.animo = "triste";
            }
            else {
                this.animo = "feliz";
            }
            this.hambre += 10;
            if (this.hambre > 100)
                this.hambre = 100;
            this.actualizarEstado();
        }
        else {
            console.log(`${this.nombre} no puede jugar porque no está vivo.`);
        }
    }
    mostrarEstado() {
        console.log(`Nombre: ${this.nombre}`);
        console.log(`Hambre: ${this.hambre}`);
        console.log(`Energía: ${this.energia}`);
        console.log(`Ánimo: ${this.animo}`);
        console.log(`Vivo: ${this.vivo}`);
    }
    actualizarEstado() {
        if (this.energia <= 0) {
            this.vivo = false;
            this.animo = "muerto";
        }
        else if (this.energia < 20) {
            this.animo = "cansado";
        }
        else if (this.hambre > 70) {
            this.animo = "triste";
        }
        else if (this.energia > 60 && this.hambre < 40) {
            this.animo = "feliz";
        }
        else {
            this.animo = "normal";
        }
    }
}
exports.default = Tamagochi;
