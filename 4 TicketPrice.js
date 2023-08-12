let NumberOfChilds = 2;
let NumberOfAdults = 1;
let NumberOfSeniors = 1;

let childTicketPrice = 100;
let adultTicketPrice = 150;
let seniorTicketPrice = 120;

let totalPrice =
  NumberOfChilds * childTicketPrice +  NumberOfAdults * adultTicketPrice + NumberOfSeniors * seniorTicketPrice;

console.log(`The total ticket price is ${totalPrice}`);
