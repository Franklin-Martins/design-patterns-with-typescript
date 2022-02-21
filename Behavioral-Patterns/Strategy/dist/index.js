"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const exercicioFavorito_1 = require("./exercicioFavorito");
const Pessoa_1 = require("./Pessoa");
const p = new Pessoa_1.Pessoa('Franklin', new exercicioFavorito_1.Musculacao);
const p2 = new Pessoa_1.Pessoa('Franklin', new exercicioFavorito_1.EstadoX);
p2.exercitar();
