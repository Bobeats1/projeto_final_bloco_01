import readlinesync = require("readline-sync");
import { colors } from "./src/util/Colors";
import { Produto } from "./src/model/Produto";
import { Carro } from "./src/model/Carro";
import { Moto } from "./src/model/Moto";
import { ProdutoController } from "./src/controller/ProdutoController";

export function main() {

    // Instância da classe Produto Controller
    let produtos: ProdutoController = new ProdutoController();
    
    // Variáveis Auxiliares
    let opcao, tipo, numero, preco, cilindrada, nportas : number;
    let modelo: string;
    const tiposProdutos = ['Carro', 'Moto'];

    // TESTE DE CLASSES
    const moto: Moto = new Moto(1, "Nimbus", 500, 700);
    

      const carro: Carro = new Carro(4, "Ceifador", 700, 4);
    

    while (true) {

        console.log(colors.bg.black, colors.fg.bluestrong,
                    "*****************************************************");
        console.log("                                                     ");
        console.log("                G e G Concessionária                 ");
        console.log("                                                     ");
        console.log("*****************************************************");
        console.log("                                                     ");
        console.log("            1 - Criar Produto                        ");
        console.log("            2 - Listar todos os Produtos             ");
        console.log("            3 - Buscar Produto por ID                ");
        console.log("            4 - Atualizar Produto                    ");
        console.log("            5 - Apagar Produto                       ");
        console.log("            6 - Sair                                 ");
        console.log("                                                     ");
        console.log("*****************************************************");
        console.log("                                                     "
            , colors.reset);

        console.log("Entre com a opção desejada: ");
        opcao = readlinesync.questionInt("");

        if (opcao == 6) {
            console.log(colors.bg.black, colors.fg.bluestrong,"\nG e G Concessionária, sempre em movimento com você!");
            sobre();
            console.log(colors.reset, "");
            process.exit(0);
        }

        switch (opcao) {
            case 1:
                console.log(colors.fg.bluestrong,"\n\nCriar Produto\n\n",colors.reset);

                console.log("Digite o nome do Modelo: ");
                modelo= readlinesync.question("");

                console.log("Digite o Preço do Modelo: ");
                preco= readlinesync.questionFloat("");

                console.log("Digite o tipo do Modelo: ");
                tipo= readlinesync.keyInSelect(tiposProdutos, "", {cancel: false}) +1;

                switch (tipo){
                    case 1:
                        console.log("Digite a quantidade de portas do modelo: ");
                        nportas= readlinesync.questionInt("");
                        produtos.adicionar(
                            new Carro(produtos.gerarId(), modelo, preco, nportas));
                        break;
                    case 2: 
                        console.log("Digite a quantidade de cilindradas do modelo: ");
                        cilindrada= readlinesync.questionInt("");
                        produtos.adicionar(new Moto(produtos.gerarId(), modelo, preco, cilindrada));
                        break;
                }

                keyPress()
                break;
            case 2:
                console.log(colors.fg.bluestrong,"\n\nListar todos os Produtos\n\n", colors.reset);

                produtos.listarTodas();
                keyPress()
                break;
            case 3:
                console.log(colors.fg.bluestrong,"\n\nConsultar Produto por ID\n\n",colors.reset);

                console.log("Digite o ID do Produto: ");
                numero= readlinesync.questionInt("");
                produtos.procuraId(numero);

                keyPress()
                break;
            case 4:
                console.log(colors.fg.bluestrong,"\n\nAtualizar Produto\n\n",colors.reset);

                console.log("Digite o ID do produto: ");
                numero= readlinesync.questionInt("");

                let produto = produtos.buscarNoArray(numero);

                if (produto != null) {

                    console.log("Digite o nome do Modelo: ");
                    modelo= readlinesync.question("");

                    console.log("Digite o Preço do Modelo: ");
                    preco= readlinesync.questionFloat("");
                    
                    switch (tipo){
                        case 1: 
                        console.log ("Digite o número de portas do Modelo:");
                        nportas= readlinesync.questionInt ("");
                        produtos.atualizar(
                            new Carro(numero, modelo, preco, nportas));
                        break;
                    case 2: 
                        console.log("Digite a quantidade de cilindradas do Modelo: ");
                        cilindrada = readlinesync.questionInt("");
                        produtos.atualizar(new Moto(numero, modelo, preco, cilindrada));
                        break;
                    }
                } else {
                    console.log (colors.fg.red, "O Produto de ID: " + numero + 
                        " não foi encontrado!", colors.reset);
                }

                keyPress()
                break;
            case 5:
                console.log(colors.fg.bluestrong,"\n\nApagar um Produto\n\n",colors.reset);

                console.log("Digite o ID do produto: ");
                numero= readlinesync.questionInt("");
                produtos.apagar(numero);

                keyPress()
                break;
            default:
                console.log(colors.fg.red,"\nOpção Inválida!\n",colors.reset);

                keyPress()
                break;
        }
    }

}

// Função Sobre 

export function sobre(): void {
    console.log("\n*****************************************************");
    console.log("Projeto Desenvolvido por: ");
    console.log("Gabriel Gomes - gabriel.gomes86@gmail.com");
    console.log("github.com/Bobeats1");
    console.log("*****************************************************");
}
// Função Keypress 
function keyPress(): void {
    console.log(colors.reset, "");
    console.log("\nPressione enter para continuar...");
    readlinesync.prompt();
}

main();