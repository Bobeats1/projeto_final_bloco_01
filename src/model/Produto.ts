export abstract class Produto {
// Atributos da Classe Abstrata
private _numero: number;
private _modelo: string;
private _preco: number;

//Método Constructor 

    constructor (numero: number, modelo: string, preco: number) {
        this._numero = numero;
        this._modelo = modelo;
        this._preco = preco;
    }
// Métodos GET e SET

public get numero(){
    return this._numero;
}
public set numero(numero: number) {
    this._numero = numero;
}

public get modelo(){
    return this._modelo;
}
public set modelo(modelo: string) {
    this._modelo = modelo;
}

public get preco(){
    return this._preco;
}
public set preco(preco: number) {
    this._preco = preco;
}

//Métodos 

public visualizar (): void{

    console.log("\n\n*****************************************************");
        console.log("Dados do Produto:");
        console.log("*****************************************************");
        console.log("ID do Produto: " + this._numero);
        console.log("Modelo: " + this._modelo);
        console.log("Preço do Produto (R$): " + this._preco);
    
}
}