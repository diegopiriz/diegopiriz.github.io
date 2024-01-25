var cookieName = "quote_index";

function addQuote(quotesRepository) {
    var index = $.cookie(cookieName);
    if(index === undefined) {
        index = Math.floor(Math.random() * quotesRepository.length)
        $.cookie(cookieName, index, { expires: 1, path: '/' });
    }
    var quote = quotesRepository[index];
    $("#quote").html(quote.quote);
    $("#author").html(quote.author);
}
