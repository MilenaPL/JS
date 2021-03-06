// Write a getCard() function which returns a random playing card object, like:
// 		{
// 			value: 'K'
// 			suit: 'clubs'
// 		}
//Pick a random value from:
//----1,2,3,4,5,6,7,8,9,10,J,Q,K,A
//Pick a random suit from:
//----clubs,spades, hearts, diamonds
//Return both in an object

function getCard() {
  const value = [
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K",
    "A",
  ];
  const suit = ["clubs", "spades", "hearts", "diamonds"];

  let randomValue = value[Math.floor(Math.random() * value.length)];
  let randomSuit = suit[Math.floor(Math.random() * suit.length)];

  const finalObject = {
    value: randomValue,
    suit: randomSuit,
  };

  {
    return finalObject;
  }
}
getCard();
