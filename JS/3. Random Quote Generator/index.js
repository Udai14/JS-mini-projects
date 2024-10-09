const quotes = [
    "A rose by any other name would smell as sweet.",
    "All that glitters is not gold.",
    "All the world’s a stage, and all the men and women merely players.",
    "Ask not what your country can do for you; ask what you can do for your country.",
    "Ask, and it shall be given you; seek, and you shall find.",
    "Eighty percent of success is showing up.",
    "Elementary, my dear Watson.",
    "For those to whom much is given, much is required.",
    "Genius is one percent inspiration and ninety-nine percent perspiration.",
    "He travels the fastest who travels alone."
]

const usedIndexes = new Set(); // Set can only have unique elements, faster than using arrays
const quoteElement = document.getElementById("quote");

function generateQuote() {
    if (usedIndexes.size >= quotes.length) {
        usedIndexes.clear()
    }

    while (true) {
        const randomIndex = Math.floor(Math.random() * quotes.length);

        if (usedIndexes.has(randomIndex))
            continue; // goes back to start of loop

        const quote = quotes[randomIndex];
        quoteElement.innerHTML= quote;
        usedIndexes.add(randomIndex);
        break;
    }

}
