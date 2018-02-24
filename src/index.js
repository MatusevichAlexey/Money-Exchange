// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    if (currency <= 0) return {};
    if (currency >= 10000) return {error: "You are rich, my friend! We don't have so much coins for exchange"};

    var resultObject = {};

    h = Math.floor(currency/50);
    if (h > 0) {
    currency = currency - (h*50);    
    resultObject.H = h;
    } 
    
    q = Math.floor(currency/25);
    if (q > 0) {
        currency = currency - (q*25);    
        resultObject.Q = q;
    } 
    
    d = Math.floor(currency/10);
    if (d > 0) {
        currency = currency - (d*10);    
        resultObject.D = d;
    } 
    
    n = Math.floor(currency/5);
    if (n > 0) {
        currency = currency - (n*5);    
        resultObject.N = n;
    } 
    
    p = Math.floor(currency/1);
    if (p > 0) {
        currency = currency - (p*0);    
        resultObject.P = p;
    }   

    return resultObject;
}