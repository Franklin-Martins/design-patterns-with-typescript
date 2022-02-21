import { Musculacao, Correr, Futebol, EstadoX } from './exercicioFavorito';
import { Pessoa } from './Pessoa';

const p = new Pessoa('Franklin', new Musculacao);
const p2 = new Pessoa('Franklin', new EstadoX);

p2.exercitar();