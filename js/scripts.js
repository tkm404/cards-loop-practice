window.onload = function(event){
  event.preventDefault();
  let h1 = document.createElement("h1");
  h1.append("Look at the Cards, the Cards are Amazing");
  document.querySelector("body").append(h1);

  let suits = ["Hearts", "Diamonds", "Clubs", "Spades"];
  let cards = ["Ace of ", "2 of ", "3 of ", "4 of ", "5 of ", "6 of ", "7 of ", "8 of ", "9 of ", "10 of ", "Jack of ", "Queen of ", "King of "];
  const ul = document.createElement("ul")
  document.querySelector("body").append(ul);
  cards.forEach(function(card) {
    const hearts = document.createElement("li");
    hearts.append();
      ul.append(hearts);

    const diamonds = document.createElement("li")
    diamonds.append();
      ul.append(diamonds);

      const clubs  = document.createElement("li")
      diamonds.append();
        ul.append(clubs);

        const spades = document.createElement("li")
        diamonds.append();
          ul.append(spades);

        // suits.forEach(function(suit) {
        //   hearts.append(suits[0], cards[0+=1]) 

      let cardName = [];
      cardName.push(cards, suits)

    })
  };

