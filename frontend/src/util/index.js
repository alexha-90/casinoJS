import { DECK } from "../constants/CardDeck"
//==============================================================//

export const mimicDeal = (delay: number) =>
  new Promise(res => setTimeout(res, delay));

export const getCardValueAndSuit = () => {
  /**
   *  for value =
   *    2 through 10, face card value
   *    11 = jack
   *    12 = queen
   *    13 = king
   *    14 = ace
  **/
  const currDeck = DECK; // FIXME: deck should be initialized and put into redux
  const randIndex = Math.floor(Math.random() * 52);
  const randCard = currDeck[randIndex];

  let value = parseInt(randCard.slice(1)); // separate suit from value
  let weight;
  if (value === 14) {
    value = "A"
    weight = "wild_ace";
  } else if (value >= 10) {
    weight = 10;
  } else {
    weight = value;
  }

  return {
    value: value,
    weight: weight,
    suit: randCard[0]
  }
};