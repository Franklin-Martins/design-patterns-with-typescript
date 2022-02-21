import { ExercicioFavorito } from './exercicioFavorito'

export class Pessoa{
    public name:string;
    public exeFavorito:ExercicioFavorito;

    constructor(name:string, exeFavorito:ExercicioFavorito){
        this.name = name;
        this.exeFavorito = exeFavorito;
    }

    exercitar():void{
        console.log(`${this.name} decidiu: `);
        this.exeFavorito.comecar();
    }
}