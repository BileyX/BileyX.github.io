
let memes = ["https://i.pinimg.com/236x/0b/fc/a8/0bfca8eca795a4b8f3c70c2c82660b66.jpg", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwYXDtDFyRDhmlX7xAvCcjFUC9cBS62bNt9w&usqp=CAU",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgTPPFTVf0Avux6jJznMsKzf7_y-I1OOfZ9w&usqp=CAU", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSX26ljlJ_H4d9hsWwBd5xZ9BgCLJ7sUkejEg&usqp=CAU",
        "https://i.chzbgr.com/full/9033817344/h523ECDB0/woman-presenting-class-and-someone-says-can-speak-up-cant-hear", "https://i.chzbgr.com/full/9346330368/h4317FCF6/person-women-on-instagram-be-like-got-new-shoes",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0uAvh8yPPJ-xxjrTtCMdYGv20CTkH0HwfpA&usqp=CAU", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOlhCLVkX8aQQ2dJB6vke-jD00pHIh7cjR2w&usqp=CAU", 
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwq40F1SQfyD94IFSF4xsjOhOXENCCaiOzPA&usqp=CAU", "https://www.metro.us/wp-content/uploads/2020/02/landing.strip_10_8_2017_17_13_33_533-web.jpg", 
        "https://static.demilked.com/wp-content/uploads/2021/12/hilarious-memes-the-funny-introvert-1.jpeg", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVbc_r_AczaTrKHBCA4M53unbpcO-G4IFoHg&usqp=CAU", 
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZFy1FuNcjk4ZT_Jh1zp7dt-bikeEiuYef6w&usqp=CAU", "https://preview.redd.it/drakes-claiming-top-3-these-mid-meme-gotta-join-the-party-v0-mkkqah4pkaqc1.jpeg?auto=webp&s=25a1e4fd16ca1b13a66038b9a4d416da2f51903b"
    ]; // 14 images

let quotes = ["The game ends when the king falls, not when the pawn takes the queen.", "What's normal to a spider is chaos to a fly.",
        "Addiction is not the problem, it is an attempt to solve the problem", "Nothing offends a man of today more than to tell him that he is an ordinary person.",
        "It was never a battle to won. It's an eternal dance.", "To love is very different than to own.",
        "We don't become the highest version of ourselves we can imagine, We become the lowest version of ourselves we can accept.", "Always smell good, the first whole you penetrate is her nostrils.",
        "I promise If I'm not dead, then I'm dedicated.", "Once the rain is over, the umbrella becomes a burden for everyone.",
        "There was once a man who had so little that all he had was a lot of money.", "Go with what you feel cuz real problems can't be calculated.",
        "Learn the way to hell so you can flee from it", "Ships are safe in the harbor, but that ain't what ships are made for."
    ]; //14 quotes

let jokes = ["Dont call me handsome, if you wont handsome pussy over", "Spiderman isn't the only one who gets sticky hands after using the web all day",
        "Hear about the new restaurant called Karma? There's no menu, You get what you deserve.", "When a movie says \"Based on a true story\" it means thats kinda what happened but with wayyy uglier people.",
        "Nobody cheats more than a girl with a gap teeth. She will always have space for another guy", "Imagine going to hell for small lies like \"i miss you too\"",
        "My girlfriend has changed a lot after she became vegan. It's like I've never seen herbivore.", "where do you find a wife with no legs? the last place you left her", 
        "Always smell good, the first whole you penetrate is her nostrils.", "If I had to pick my favorite tea, it would be that boo tea.",
        "I'm not a hard drinker. I actually find it pretyy easy.", "I went to the zoo the other day and saw a baguette in a cage. The zookeeper told me it was bread in captivity.",
        "I'm buysexual. You buy me food, I become sexual.", "Time to start making new year's goals. Your goal should be to not suck."
    ]; //14 jokes

let riddles = [
        { question: 'I speak without a mouth and hear without ears. I have no body, but I come alive with wind. What am I?', answer: 'An echo' },
        { question: 'You measure my life in hours and I serve you by expiring. I’m quick when I’m thin and slow when I’m fat. The wind is my enemy. ', answer: 'A Candle' },
        { question: 'I have cities, but no houses. I have mountains, but no trees. I have water, but no fish. What am I? ', answer: 'A Map' },
        { question: 'What is seen in the middle of March and April that can’t be seen at the beginning or end of either month?', answer: 'The letter "R"' },
        { question: 'You see a boat filled with people. It has not sunk, but when you look again you don’t see a single person on the boat. Why?', answer: 'All the people were married' },
        { question: 'What word in the English language does the following: the first two letters signify a male, the first three letters signify a female, the first four letters signify a great, while the entire world signifies a great woman. What is the word?', answer: 'Heroine' }
      ]; //6 riddles


function clear(){
    const memeOut = document.querySelector('#meme-output');
    const jokeOut = document.querySelector('#joke-output');
    const quoteOut = document.querySelector('#quote-output');
    const riddleOut = document.querySelector('#riddle-output');

    memeOut.innerHTML = '';
    jokeOut.innerHTML = '';
    quoteOut.innerHTML = '';
    riddleOut.innerHTML = '';
}


function memeGenerator(){
    const out = document.querySelector('#meme-output');
    const dis = document.createElement('img');
    dis.setAttribute("src", memes[randNum(memes.length)]);
    dis.setAttribute("id", "memeDis");

    clear();
    out.appendChild(dis);
}

function jokeGenerator(){
    const out = document.querySelector('#joke-output');
    const dis = document.createElement('p');
    dis.textContent = jokes[randNum(jokes.length)];
    dis.setAttribute("id", "jokeDis");
    
    clear();
    out.appendChild(dis);
}

function quoteGenerator(){
    const out = document.querySelector('#quote-output');
    const dis = document.createElement('p');
    dis.textContent = quotes[randNum(quotes.length)];
    dis.setAttribute("id", "quoteDis");
    
    clear();
    out.appendChild(dis);
}

function riddleGenerator(){
    const out = document.querySelector('#riddle-output');
    const disRiddle = document.createElement('p');
    const disAns = document.createElement('p');
    const random = randNum(riddles.length);
    disRiddle.textContent = riddles[random].question;
    disAns.textContent = '- '+ riddles[random].answer;
    disRiddle.setAttribute("id", "riddleDis");
    disAns.setAttribute("id", "riddleAns");
    
    clear();
    disAns.hidden = true;
    out.appendChild(disRiddle);
    out.appendChild(disAns);
}

function revealAns(){
    const riddleDiv = document.querySelector('#riddle-output');
    const riddle = riddleDiv.querySelector('p');
    const riddleAns = document.querySelector('#riddleAns');

    if(riddle && riddleAns.hidden){
        riddleAns.hidden = false;
    }
    else if(riddle && riddleAns){
        alert("Answer is aleardy revealed");
    }
    else{
        alert("No riddle to show answer for, Generate a riddle first");
    }
}

function randNum(len){
    return Math.floor(Math.random() * len);
}


const memeBtn = document.querySelector('#meme-gen');
const jokeBtn = document.querySelector('#joke-gen');
const quoteBtn = document.querySelector('#quote-gen');
const riddleBtn = document.querySelector('#riddle-gen');
const revealBtn = document.querySelector('#riddle-ans');

memeBtn.onclick = memeGenerator;
jokeBtn.onclick = jokeGenerator;
quoteBtn.onclick = quoteGenerator;
riddleBtn.onclick = riddleGenerator;
revealBtn.onclick = revealAns;