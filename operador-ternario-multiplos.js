let quartodisponiveis = 5;
let reservaconfirmada = true;

let statusreserva = (reservaconfirmada && quartosdisponiveis > 0  )? "reserva confirmada "
: (quartodisponiveis > 0 ) ? "aguardando confirmacao"
: "sem quartos disponiveis";

console.log(statusreserva);// saida: "reserva confirmada"