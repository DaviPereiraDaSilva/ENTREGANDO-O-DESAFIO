class RecintosZoo {
    recintosViaveis;
    erro;


    analisaRecintos(animal, quantidade) {

        let resultado = new RecintosZoo();
        // Definição dos recintos!!
       const recintos =[
            {recinto: 1, bioma: "savana", tamanho_total: 10, animais: [{especie: "Macaco", quantidade: 3}]},
            {recinto: 2, bioma: "floresta", tamanho_total: 5, animais: []},
            {recinto: 3, bioma: "savana e rio", tamanho_total: 7, animais: [{especie: "Gazela", quantidade: 1}]}, 
            {recinto: 4, bioma: "rio", tamanho_total: 8, animais: []}, 
            {recinto: 5, bioma: "savana", tamanho_total: 9, animais: [{especie: "Leão", quantidade: 1}]},
       ]
        
       let leao = new Animal(3, "savana", true);

       let animais = [];

       animais.push(leao);

       console.log(animais)
        //Definição dos animais!!
        // leao: {tamanho: 3, bioma: ["savana"], carnivoro: true},
        // leopardo: {tamanho: 2, bioma: ["savana"], carnivoro: true},
        // crocodilo: {tamanho: 3, bioma: ["rio"], carnivoro: true},
        // macaco: {tamanho: 1, bioma: ["savana ou floresta"], carnivoro: false},
        // gazela: {tamanho: 2, bioma: ["savana"], carnivoro: false},
        // hipopotamo: {tamanho: 4, bioma: ["savana ou rio"], carnivoro: false},
      
        //Verificando se o animal é valido!!
        if(!animais[animal]){
           resultado.erro = "animal"
            return resultado.erro;
        
        } 

    
        //Verificando se a quantidade é valida!!
        if (quantidade <=0){
            return resultado.erro = "Quantidade invalida";
            
        }

       if(recinto <=0){
        return resultado.erro = "não há recinto viavel";

        
        }

        let infor_anima = animais[especie];
        let taman_preciso = animalInfo.tamanho * quantidade;

         let recinto_compativel = recintos.filter((recinto) => {
         let espaco_ocpdo = recinto.animais.reduce((b, animal) => b + (animais[animal.especie].tamanho * animal.quantidade), 0);
         let espaco_total = recinto.tamanho;

    // Verificando bioma!!
    if (!animalInfo.biomas.includes(recinto.bioma) && !(recinto.bioma === "savana e rio" && animalInfo.biomas.includes("savana"))) {
      return resultado.recintosViaveis = false;
    }

    // Verificando animais carnivoros
    if (animalInfo.carnivoro && recinto.animais.length > 0 && recinto.animais[0].especie !== especie.toLowerCase()) {
      return resultado.recintosViaveis = false;
    }

    // Verificando hipopotamo se pode conviver com outras especies!!
    if (especie === "hipopotamo" && recinto.bioma !== "savana e rio" && recinto.animais.length > 0) {
      return resultado.recintosViaveis = false;
    }

    // Verificndo se há espaço, de acordo com as regras passadas!!
    let espaco_sobra = recinto.animais.length > 0 ? 1 : 0;
    let espaco_livre = espaco_total - espaco_ocpdo - espaco_sobra;

    return espaco-livre >= taman_preciso;
       });

  if (recinto_compativel.length === 0) {
    return resultado.erro = "Não há recinto viável";
  }

  // Numerar recintos compativeis
  return recinto_compativel
    .sort((a, b) => a.numero - b.numero)
    .map((recinto) => {
      let espaco_ocpdo = recinto.animais.reduce((b, animal) => b + (animais[animal.especie].tamanho * animal.quantidade), 0);
      let espaco_sobra = recinto.animais.length > 0 ? 1 : 0;
      let espaco_livre = recinto.tamanho - espaco_ocpdo - espaco_sobra;
      return `Recinto nro ${recinto.numero} (espaço livre: ${espaco_livre} total: ${recinto.tamanho})`;
    }); 
    }
}

class Animal{
    constructor(nome, tamanho, bioma, carnivoro){
        this.nome = nome;
        this.tamanho = tamanho;
        this.bioma = bioma;
        this.carnivoro = carnivoro;
    }
}

export { RecintosZoo as RecintosZoo };

