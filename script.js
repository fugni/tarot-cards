function randomNumber() {
    
    var random1 = Math.floor(Math.random() * 78);
    const card1 = document.getElementById("card1");
    card1.setAttribute("src", "tarot/" + random1 + ".jpg");

    var random2 = Math.floor(Math.random() * 78);
    const card2 = document.getElementById("card2");
    card2.setAttribute("src", "tarot/" + random2 + ".jpg");

    var random3 = Math.floor(Math.random() * 78);
    const card3 = document.getElementById("card3");
    card3.setAttribute("src", "tarot/" + random3 + ".jpg");
}