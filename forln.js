const carro = {
    marca: 'Toyota',
    modelo: 'Corolla',
    ano: 2020,
    cor: 'prata'
};
for (const chave in carro) {
    console.log(`${chave}: ${carro[chave]}`);
}