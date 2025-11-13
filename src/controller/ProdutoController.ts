import { Produto } from "../model/Produto";
import { ProdutoRepository } from "../repository/ProdutoRepository";
import { colors } from "../util/Colors";

export class ProdutoController implements ProdutoRepository{

    private listaProdutos: Array <Produto> = new Array <Produto>();
    numero: number = 0;

    procuraId(numero: number): void {
        let buscaProduto = this.buscarNoArray(numero);

        if (buscaProduto != null) {
            buscaProduto.visualizar();
        } else 
            console.log(colors.fg.red,"O Produto com ID: " + numero + 
                " não foi encontrado!" ,colors.reset);
    }
    listarTodas(): void {
        for (let produto of this.listaProdutos){
            produto.visualizar();
        };
    }
    adicionar(produto: Produto): void {
        this.listaProdutos.push(produto);
        console.log(colors.fg.green, 
            "\O Produto de ID: " + produto.numero + " foi adicionado com sucesso!", colors.reset);
    }
    atualizar(produto: Produto): void {
        let buscaProduto = this.buscarNoArray(produto.numero);

        if(buscaProduto != null) {
            this.listaProdutos[this.listaProdutos.indexOf(buscaProduto)] = produto;
            console.log(colors.fg.green, "\nO Produto de ID: " 
                + produto.numero + " foi atualizado com sucesso!", colors.reset);
        } else 
            console.log (colors.fg.red, "\nProduto de ID: " + produto.numero 
                + " não foi encontrado!", colors.reset);
    }
    apagar(produto: Produto): void {
        let buscaProduto= this.buscarNoArray(produto.numero);

        if (buscaProduto != null ) {
            this.listaProdutos.splice(this.listaProdutos.indexOf(buscaProduto), 1);
            console.log(colors.fg.green,"O Produto de ID: " + produto.numero + 
                " foi apagado com sucesso!", colors.reset);
        }else 
            console.log (colors.fg.red, "\nO Produto de ID: " + produto.numero + " não foi encontrado!", colors.reset);
    }

    // Método Auxiliar 
    // Gerador de ID 
    public gerarId(): number {
        return ++ this.numero;
    }
    // Checa se o Produto existe 

    public buscarNoArray(numero: number): Produto | null {

        for (let produto of this.listaProdutos) {
            if (produto.numero === numero)
                return produto;
        }
        return null;
    }

}