function randomNumber() {

    const cardArray = ["The Fool", "The Magician", "The High Priestess", "The Empress", "The Emperor", "The Hierophant", "The Lovers", "The Chariot", "Strength", "The Hermit", "Wheel of Fortune", "Justice", "The Hanged Man", "Death", "Temperance", "The Devil", "The Tower", "The Star", "The Moon", "The Sun", "Judgement", "The World", "Ace of Wands", "Two of Wands", "Three of Wands", "Four of Wands", "Five of Wands", "Six of Wands", "Seven of Wands", "Eight of Wands", "Nine of Wands", "Ten of Wands", "Page of Wands", "Knight of Wands", "Queen of Wands", "King of Wands", "Ace of Cups", "Two of Cups", "Three of Cups", "Four of Cups", "Five of Cups", "Six of Cups", "Seven of Cups", "Eight of Cups", "Nine of Cups", "Ten of Cups", "Page of Cups", "Knight of Cups", "Queen of Cups", "King of Cups", "Ace of Swords", "Two of Swords", "Three of Swords", "Four of Swords", "Five of Swords", "Six of Swords", "Seven of Swords", "Eight of Swords", "Nine of Swords", "Ten of Swords", "Page of Swords", "Knight of Swords", "Queen of Swords", "King of Swords", "Ace of Pentacles", "Two of Pentacles", "Three of Pentacles", "Four of Pentacles", "Five of Pentacles", "Six of Pentacles", "Seven of Pentacles", "Eight of Pentacles", "Nine of Pentacles", "Ten of Pentacles", "Page of Pentacles", "Knight of Pentacles", "Queen of Pentacles", "King of Pentacles"];
    
    var random1 = Math.floor(Math.random() * 78);
    const img1 = document.getElementById("img1");
    img1.setAttribute("src", "tarot/" + random1 + ".jpg");
    const txt1 = document.getElementById("txt1")
    txt1.textContent = cardArray[random1]

    var random2 = Math.floor(Math.random() * 78);
    const img2 = document.getElementById("img2");
    img2.setAttribute("src", "tarot/" + random2 + ".jpg");
    const txt2 = document.getElementById("txt2")
    txt2.textContent = cardArray[random2]

    var random3 = Math.floor(Math.random() * 78);
    const img3 = document.getElementById("img3");
    img3.setAttribute("src", "tarot/" + random3 + ".jpg");
    const txt3 = document.getElementById("txt3")
    txt3.textContent = cardArray[random3]
}