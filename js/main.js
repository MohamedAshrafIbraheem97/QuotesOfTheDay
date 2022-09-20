const quote = document.getElementById("quote");
const saidBy = document.getElementById("saidBy");
const quoteContent = document.getElementById("quoteContent");

const quotesArray = [
  {
    quote: "“Be yourself; everyone else is already taken.”",
    saidBy: "Oscar Wilde",
  },
  {
    quote:
      "“I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.”",
    saidBy: "Marilyn Monroe",
  },
  {
    quote:
      "“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.”",
    saidBy: "Albert Einstein",
  },
  {
    quote: "“So many books, so little time.”",
    saidBy: "Frank Zappa",
  },
  {
    quote: "“A room without books is like a body without a soul.”",
    saidBy: "Marcus Tullius Cicero",
  },
  {
    quote:
      "“Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.”",
    saidBy: "Bernard M. Baruch",
  },
  {
    quote:
      "“You've gotta dance like there's nobody watching,Love like you'll never be hurt,Sing like there's nobody listening,And live like it's heaven on earth.”",
    saidBy: "William W. Purkey",
  },
  {
    quote:
      "“You know you're in love when you can't fall asleep because reality is finally better than your dreams.”",
    saidBy: "Dr. Seuss",
  },
];

function generateRandomNumber() {
  let randomIndex = Math.random();
  return Math.round(randomIndex * 8);
}

function getQuote() {
  let quoteIndex = generateRandomNumber();

  quote.innerHTML = quotesArray[quoteIndex].quote;
  saidBy.innerHTML = quotesArray[quoteIndex].saidBy;
  quoteContent.classList.remove("hidden");
}
