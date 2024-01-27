// You get any card as an argument. Your task is to return the suit of this card (in lowercase).

// Our deck (is preloaded):

// ('3♣') -> return 'clubs'
// ('3♦') -> return 'diamonds'
// ('3♥') -> return 'hearts'
// ('3♠') -> return 'spades'

// function defineSuit(card){
//     switch (card.split('').pop()){
//         case '♣' : return 'clubs'
//         case '♦' : return 'diamonds'
//         case '♥' : return 'hearts'
//         case '♠' : return 'spades'
//         default:    return 'error';
//     }
// }


function defineSuit(card){
    return {
        '♣' : 'clubs',
        '♦' : 'diamonds',
        '♥' : 'hearts',
        '♠' : 'spades'
    }[card.substr(-1)]
}

console.log(defineSuit('3♥'))