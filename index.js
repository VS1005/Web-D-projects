let btn=document.querySelector('#new-quote');
let quote = document.querySelector('.quote');
let person=document.querySelector('.person');

const quotes = [{
    quote:"Ask not what your country can do for you; ask what you can do for your country.",
    person:'John Kennedy'
}, {
    quote:"I have a dream that my four little children will one day live in a nation where they will not be judged by the color of their skin but by their character.",
    person:'M.Luther King'
}, {
    quote:"Life is like riding a bicycle. To keep your balance, you must keep moving.",
    person:'Albert Einstein'
}, {
    quote:"What we've got here is failure to communicate. Some men you just can't reach.",
    person:'Captain'
}, {
    quote:"Two roads diverged in a wood, and I, I took the one less travelled by, and that has made all the difference.",
    person:'Robert Frost'
}, {
    quote:"Tis better to have loved and lost than never to have loved at all.",
    person:'Alfred Tennyson'
}, {
    quote:"Life is like a box of chocolates. You never know what you’re gonna get.",
    person:'Forest Gump'
}, {
    quote:"If you want something said, ask a man; if you want something done, ask a woman.",
    person:'Margret Thatcher'
}, {
    quote:"Genius is one percent inspiration and ninety-nine percent perspiration.",
    person:'Thomas Edison'
}, {
    quote:"PADHAI PAR DHYAN DO, YE SAB PADH KE NUMBER BHI NAHI AAYENGE AUR GHAR BHI NAHI CHALEGA.",
    person:'Vatsalya singh'

}]

btn.addEventListener('click',function(){

    let random=Math.floor(Math.random() * quotes.length);

    quote.innerText = quotes[random].quote;
    person.innerText = quotes[random].person;
})