import { DECK } from "../constants/CardDeck"
//==============================================================//

export const mimicDeal = (delay: number) =>
  new Promise(res => setTimeout(res, delay));

export const getCardValueAndSuit = () => {
  const currDeck = DECK; // FIXME: deck should be initialized and put into redux
  const randIndex = Math.floor(Math.random() * 52);
  const randCard = currDeck[randIndex];
  const randCardVal = randCard.slice(1);

  let weight = parseInt(randCardVal); // separate suit from value
  if (isNaN(weight)) {
    weight = (randCard[1] === "A") ? "wild_ace" : 10;
  }

  return {
    suit: randCard[0],
    value: randCardVal,
    weight: weight
  }
};