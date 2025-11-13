import readlinesync = require("readline-sync");
import { colors } from "./src/util/Colors";
import { Produto } from "./src/model/Produto";
import { Carro } from "./src/model/Carro";
import { Moto } from "./src/model/Moto";

export function main() {

    let opcao: number;
// TESTE DE CLASSES
    const moto: Moto = new Moto(1, "Nimbus", 500, 700);
    moto.visualizar();

       const carro: Carro = new Carro(4, "Ceifador", 700, 4);
    carro.visualizar();

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

                keyPress()
                break;
            case 2:
                console.log(colors.fg.bluestrong,"\n\nListar todos os Produtos\n\n", colors.reset);

                keyPress()
                break;
            case 3:
                console.log(colors.fg.bluestrong,"\n\nConsultar Produto por ID\n\n",colors.reset);

                keyPress()
                break;
            case 4:
                console.log(colors.fg.bluestrong,"\n\nAtualizar Produto\n\n",colors.reset);

                keyPress()
                break;
            case 5:
                console.log(colors.fg.bluestrong,"\n\nApagar um Produto\n\n",colors.reset);

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