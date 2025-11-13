import { Produto } from "../model/Produto";

export interface ProdutoRepository {

    // CRUD da Conta
    procuraId(numero: number ): void;
    listarTodas(): void;
    adicionar(produto: Produto): void;
    atualizar(produto: Produto): void;
    apagar(produto: Produto): void;

}