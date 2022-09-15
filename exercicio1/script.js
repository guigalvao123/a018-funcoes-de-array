const objeto = {
    nome: "astrodev",
    profissao: "Dev das estrelas",
    username: "astrodev_labenu",
    senha: "melhorDeTodos"
}

// # Exercício 1

// Crie duas funcões que recebem como parâmetro um objeto.
// 1. A primeira deve retornar o objeto, alterando as propriedades dele para que fiquem em CAIXA ALTA.
let caixaAlta = (objeto) => {
    objeto.nome = objeto.nome.toUpperCase();
    objeto.profissao = objeto.profissao.toUpperCase();
    objeto.username = objeto.username.toUpperCase();
    objeto.senha = objeto.senha.toUpperCase();
    return objeto;
  };
// 2. A segunda deve retornar os valores do objeto como texto corrido.
const textoCorrido = (objeto) => {
    return (
      objeto.nome +
      " " +
      objeto.profissao +
      " " +
      objeto.username +
      " " +
      objeto.senha
    );
  };
  
// 3. Em seguida, crie uma funcão que recebe um objeto e um callback como parâmetros. A funcão deve passar o objeto como argumento da funcão de callback, e em seguida imprimir o valor retornado.

const imprimir = (objeto, funcao) => {
    console.log(funcao(objeto) )
}

imprimir (objeto,caixaAlta)
imprimir (objeto, textoCorrido)

// Chame a funcão 3, passando como argumentos o objeto passado no arquivo `script.js`, e a funcão 1.
// Repita o processo para a funcão 2


//SEGUNDA FORMA DE RESOLVER O EXERCICIO!

function propToUpper(obj){
    for (let i in obj){
        obj[i] = obj[i].toUpperCase()
    }
    return obj
}
console.log(propToUpper(objeto))

function showValues(obj){
    let text = ""
    for (let i in obj){
        text += `${obj[i]} `
    }
    return text.trim()
}
console.log(showValues(objeto))

function objectToCallBack(obj,func){
    console.log(func(obj))
}

objectToCallBack(objeto,propToUpper)
objectToCallBack(objeto, showValues )