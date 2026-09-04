function exemploConst(){
    const x = 10;
    console.log(x);//10
    // x = 20;// isso causara um erro porque x foi declarada como const
    if (true) {
        const y = 30 
        console .log(y);//30
    }
    // conole.log (y);// isso causaranum erro porque y nao existe fora do bloco
}
exemploConst();