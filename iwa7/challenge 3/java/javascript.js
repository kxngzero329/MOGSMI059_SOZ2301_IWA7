const leoName = 'Leo';
const leoSurname = 'Musvaire     ';
const leoBalance = '-9394';

const sarahName = 'Sarah    ';
const sarahSurname = 'Kleinhans';
const sarahBalance = '-4582.21000111';

const divider = '----------------------------------';

// Only change below this line

const owed = (parseInt(leoBalance) * -1) + (parseFloat(sarahBalance) * -1)
const leo1 = (parseInt(leoBalance) * -1)
const sarah1 = (parseFloat(sarahBalance) * -1).toFixed(2)
const amount = owed.toLocaleString("fi-FI")
const leo = `${leoName} ${leoSurname}  (Owed: R ${leo1})`
const sarah = `${sarahName} ${sarahSurname}  (Owed: R ${sarah1})`
const total = "Total amount owed: "
const result = `\n${leo}\n${sarah}\n\n${divider}\n\n  ${total}R ${amount}\n\n${divider}`;

console.log(result)