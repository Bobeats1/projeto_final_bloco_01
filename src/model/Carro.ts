import { Produto } from "./Produto";
export class Carro extends Produto{
//Atribuir atributos da Subclasse
    private _nportas: number;

// Método constructor 

    constructor (numero: number, modelo: string, preco: number, nportas: number){
        super(numero, modelo, preco);
        this._nportas = nportas;
    }

    // Métodos Get e Set 

    public get nportas(){
        return this._nportas;
    }

    public set nportas (nportas: number){
        this._nportas= nportas;
    }

// Métodos 

    public visualizar(): void {
        super.visualizar();
        console.log("Número de Portas nesse modelo: " + this._nportas);      
    }
}