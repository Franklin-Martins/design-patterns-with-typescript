"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pessoa = void 0;
class Pessoa {
    constructor(name, exeFavorito) {
        this.name = name;
        this.exeFavorito = exeFavorito;
    }
    exercitar() {
        console.log(`${this.name} decidiu: `);
        this.exeFavorito.comecar();
    }
}
exports.Pessoa = Pessoa;
