function onClick(){
// Inputs que serão recebidos do formulário.
let dataNome = document.getElementById("nome").value;
let dataNumero = document.getElementById("numero").value;
let dataEmail = document.getElementById("email").value;
let dataCargo = document.getElementById("cargo").value;

let  dataSegmento = document.getElementById("segmento").value;
let dataAtividade = document.getElementById("atividade").value;
let dataFaturamentoMensal = document.getElementById("faturamento").value;
//

// Variáveis.
let dataSegmentoIndex;
let faturamentoListaIndex;
let dataAtividadeIndex;
let pisCofinsLista = [0.009360, 0.014706, 0.018343, 0.023273, 0.027316, 0.038025];
let pisCofinsListaIndex;
let porcentagemIndex;
let segmentoLista = new Array(25);
for (let i = 0; i < segmentoLista.length; i++) {
    segmentoLista[i] = i+1;
};
let faturamentoLista = [15000, 30000, 60000, 150000, 300000, 400000];
for (let i = 0; i < faturamentoLista.length; i++) {
    if ((!(dataFaturamentoMensal > faturamentoLista[i]))||(i == 5)){
        faturamentoListaIndex = faturamentoLista[i];
        pisCofinsListaIndex = pisCofinsLista[i];
        break;
    }; 
};
dataSegmentoIndex = dataSegmento;
dataAtividadeIndex = dataAtividade;
//

// Tabela de segmentos por porcentagem de recuperação.
switch (dataSegmentoIndex){
    case '1':(porcentagemIndex=1-0.2);break;//Autopeças Automotivas
    case '2':(porcentagemIndex=1-0.2);break;//Autopeças Agrícolas
    case '3':(porcentagemIndex=1-0.2);break;//Autopeças Caminhões
    case '4':(porcentagemIndex=1-0.5);break;//Auto Elétricas
    case '5':(porcentagemIndex=1-0.65);break;//Moto Peças
    case '6':(porcentagemIndex=1-0.85);break;//Bicicletarias
    case '7':(porcentagemIndex=1-0.05);break;//Lojas de Pneus
    case '8':(porcentagemIndex=1-0.1);break;//Distribuidoras de Bebidas
    case '9':(porcentagemIndex=1-0.85);break;//Padarias
    case '10':(porcentagemIndex=1-0.8);break;//Lanchonetes
    case '11':(porcentagemIndex=1-0.7);break;//Restaurantes
    case '12':(porcentagemIndex=1-0.4);break;//Conveniências de Postos
    case '13':(porcentagemIndex=1-0.4);break;//Bares
    case '14':(porcentagemIndex=1-0.85);break;//Pizzarias
    case '15':(porcentagemIndex=1-0.15);break;//Farmácias
    case '16':(porcentagemIndex=1-0.15);break;//Drogarias
    case '17':(porcentagemIndex=1-0.3);break;//Revendas de Cosméticos
    case '18':(porcentagemIndex=1-0.2);break;//Perfumarias
    case '19':(porcentagemIndex=1-0.8);break;//Mercados
    case '20':(porcentagemIndex=1-0.75);break;//Supermercados
    case '21':(porcentagemIndex=1-0.8);break;//Minimercados
    case '22':(porcentagemIndex=1-0.8);break;//Mercearias
    case '23':(porcentagemIndex=1-0.8);break;//Petshops
    case '24':(porcentagemIndex=1-0.6);break;//Lojas Veterinárias
    case '25':(porcentagemIndex=1-0.05);break;//Revendas de Gás Liquefeito
    case '26':(porcentagemIndex=1-0.05);break;//Revendas de Baterias
    case '27':(porcentagemIndex=1-0.4);break;//Boates
    case '28':(porcentagemIndex=1-0.85);break;//Hotéis
    case '29':(porcentagemIndex=1-0.85);break;//Motéis
    case '30':(porcentagemIndex=1-0.7);break;//Bombas Injetoras
}
//

// Fórmulas
recuperacao100porCento = (pisCofinsListaIndex * dataFaturamentoMensal);
recuperacaoConformeSegmento = (recuperacao100porCento * porcentagemIndex);
estimativaDeRecuperacao = (recuperacaoConformeSegmento * dataAtividadeIndex);
//

//Resultados
console.log('Nome do Cliente: ',dataNome);
console.log('Número do Cliente: ',dataNumero);
console.log('E-Mail do Cliente: ',dataEmail);
console.log('Cargo do Cliente: ',dataCargo);
console.log('Faturamento Mensal Informado: ',dataFaturamentoMensal);
console.log('Faixa do Faturamento Mensal: Até ',faturamentoListaIndex);
console.log('PIS/COFINS da Faixa de Faturamento Mensal: ',pisCofinsListaIndex);
console.log('% de Recuperação do Segmento: ',porcentagemIndex);
console.log('Meses de Atividade Considerados: ',dataAtividadeIndex);
console.log('Recuperação 100%: ',recuperacao100porCento);
console.log('% de Recuperação Conforme Segmento: ',porcentagemIndex);
console.log('Valor Recuperado Conforme o Segmento: ',recuperacaoConformeSegmento);
console.log('Estimativa de Recuperação no Período: ',estimativaDeRecuperacao);
//
}