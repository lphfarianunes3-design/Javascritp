








































function exemploVar() {
    console.log (x);


    let x = 10;
    
    if (true) {
        var x = 20 // mesma variavel x e redeclarada dentro do bloco
        console.log(x);//28 (dentro do bloco)
    }
    console.log(x);// 28 (o valor foi alterado)
}

exemploVar();