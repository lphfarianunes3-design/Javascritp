let resultadoDado
let lancamento = 0;

while (resultadoDado !== 6) {
    resultadosDado= math.floor(math.random() * 6)+ 1;//gera um numero aleatorio de 1 a 6
    lancamento++;
    console.log(`Lançamento ${lancamento}: resultado do dado {resultadoDado}`);
}
console.log(`finalmente! o numero 6 foi obtido após ${lancamento} lançamentos.`);