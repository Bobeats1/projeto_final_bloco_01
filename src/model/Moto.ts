import { Produto } from "./Produto";
export class Moto extends Produto{
//Atribuir atributos da Subclasse
    private _cilindrada: number;

// Método constructor 

    constructor (numero: number, modelo: string, preco: number, cilindrada: number){
        super(numero, modelo, preco);
        this._cilindrada = cilindrada;
    }

    // Métodos Get e Set 

    public get cilindrada(){
        return this._cilindrada;
    }

    public set cilindrada (cilindrada: number){
        this._cilindrada= cilindrada;
    }

// Métodos 

    public visualizar(): void {
        super.visualizar();
        console.log("Quantidade de Cilindradas da Moto: " + this._cilindrada);      
    }
}