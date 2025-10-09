const readline = require("readline-sync");
const conectar = require("./database");

let db;
let collection;

async function inserir(nomeTarefa) {
    const resultado = await collection.insertOne({
        nome: nomeTarefa,
        concluida: false
     });
     console.log("Tarefa criada com sucesso", resultado)
}

async function main(){
    db = await conectar();
    collection = db.collection("tarefas");


        while (true) {

            console.log("Menu principal");
            console.log('1 - criar tarefa');
            console.log("2 - Buscar tarefa");
            console.log("3 - Criar tarefa");
            console.log("4 - Remover tarefa");
            console.log("5 - Sair");

            const opcao = readline.question("Escolha uma opção: ");

            switch(opcao){
            case '1':{
                const nome = readline.question("Informe o nome da tarefa: ")
                await inserir (nome);
            break;
            }
            case '2':   break;
            case '3':   break;
            case '4':   break;
            case '5': 
                process.exit(0);   
            default: 
                console.log('Opcao invalida');

         }
    }
}
main()