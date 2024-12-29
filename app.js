function generatequote(){
    let quoteContainer = document.getElementById('quote');
    let author = document.getElementById('author');
    quoteContainer = "";
    author = "";
    
    let quotes = [
        { quote: '"To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment."',author: "~ Albert Einstein"},
        { quote: '"Be kind, for everyone you meet is fighting a hard battle."',author : "~ Plato"},
        {quote: '"The only way to do great work is to love what you do."',author: '~ War and Peace'},
        {quote: '"If you can dream it, you can achieve it."',author: '~ Mahatma Gandhi'},
        {quote: '"The greatest accomplishment is not in never falling, but in rising every time we fall."',author: '~ Charles Dickens'},
        {quote: '"Do not go where the path may lead, go instead where there is no path and leave a trail."',author: '~ Mahatma Gandhi'},
        {quote: '"If you cannot do great things, do small things in a great way."',author: '~ Mahatma Gandhi'},
        {quote: '"Spread love everywhere you go. Let no one ever come to you without leaving a trace."',author: '~ John Lennon'},]
       
      let randomIndex = Math.floor(Math.random() * quotes.length);
      let quote = quotes[randomIndex];
      document.getElementById('quote').textContent = quote.quote;
      document.getElementById('author').textContent = quote.author;
      document.getElementById('btn').textContent = "Another ";
      document.getElementById('or').style.display = "inline";
      document.getElementById("btn2").style.display = "inline"
}
function reload(){
    window.location.reload()
}

