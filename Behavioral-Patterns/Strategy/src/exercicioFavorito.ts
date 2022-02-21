export interface ExercicioFavorito{
    comecar(): void;
}

export class Correr implements ExercicioFavorito{
    public comecar(): void {
        console.log('Correr uma maratona');
    }
}

export class Futebol implements ExercicioFavorito{
    public comecar(): void {
        console.log('Jogar futebol');
    }
}

export class Musculacao implements ExercicioFavorito{
    public comecar(): void {
        console.log('Fazer musculação');
    }
}

export class EstadoX implements ExercicioFavorito{
    public comecar(): void {
        console.log('ESSA PARADA EM ESPECIFICO');
    }
}