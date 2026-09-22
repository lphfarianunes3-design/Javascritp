//valores falesy
console.log(!!0);   // false
console.log(!!"");  //false
console.log(!!null);  //false

// valores truthy
console.log(!!1);  // true
console.log(!!"texto"); // true
console.log(!![]);  // true (arrays vazios sao objetivos) 
console.log(!!{}); // true (Objetos vazios sao truthy)