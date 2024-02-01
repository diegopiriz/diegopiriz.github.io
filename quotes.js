
function addQuote(quotesRepository) {
    const now = new Date();
    const fullDaysSinceEpoch = Math.floor(now/8.64e7);
    console.log(fullDaysSinceEpoch);

    const index = fullDaysSinceEpoch % quotesRepository.length;
    const quote = quotesRepository[index];
    $("#quote").html(quote.quote);
    $("#author").html(quote.author);
}
