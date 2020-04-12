//variables
const list = document.querySelector('#lista-tweets');

//eventlisteners
eventlisteners();

function eventlisteners() {
    document.querySelector('form').addEventListener('submit', addTweet);

    list.addEventListener('click', removeTweet);

    document.addEventListener('DOMContentLoaded', localStorageReady);
}


//functions
function addTweet(e) {
    e.preventDefault();
    const tweet = document.querySelector('#tweet').value;
    const li = document.createElement('li');
    const btnRemove = document.createElement('a');
    btnRemove.classList.add('remove-tweet');
    btnRemove.innerText = 'X';


    li.textContent = tweet;
    list.appendChild(li);
    li.appendChild(btnRemove);


    addTweetLocalStorage(tweet);
    if(tweet !== '') {
        document.querySelector('#tweet').value = '';
    }
}


function removeTweet(e) {
    e.preventDefault();

    if (e.target.className === 'remove-tweet') {
        e.target.parentElement.remove();
        removeTweetLocalstorage(e.target.parentElement.innerText);
    }
}

//add tweets to localsotrage(localstorage just receive strings)
function  addTweetLocalStorage(tweet) {
    let tweets;

    tweets = getTweetLocalstorage();

    tweets.push(tweet);
    //REMBER localstorage just can get strings
    localStorage.setItem('tweets', JSON.stringify(tweets));
}

//verify if there are elements in loclastorage
function getTweetLocalstorage() {
    let tweets;

    if (localStorage.getItem('tweets') === null) {
        tweets = [];
    } else {
        tweets = JSON.parse(localStorage.getItem('tweets'));
    }

    return tweets;
}

function localStorageReady() {
    let tweets = getTweetLocalstorage();

    tweets.forEach(function(tweet) {
        const li = document.createElement('li');
        const btnRemove = document.createElement('a');
        btnRemove.classList.add('remove-tweet');
        btnRemove.innerText = 'X';

        li.textContent = tweet;
        list.appendChild(li);
        li.appendChild(btnRemove);
    });
}

function removeTweetLocalstorage(value) {
    let tweetToRemove = value.slice(0, value.length-1);
    let tweets = getTweetLocalstorage();

    tweets.forEach((tweet, index) => {
        if (tweet === tweetToRemove) {
            tweets.splice(index, 1);
        }
    });

    //REMBER localstorage just can get strings
    localStorage.setItem('tweets', JSON.stringify(tweets));
}