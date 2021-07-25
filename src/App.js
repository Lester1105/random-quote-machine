import React,{useEffect, useState} from 'react';
import './App.scss';
import colorArray from './color-array';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons'
let quoteUrl='https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json';

function App() {
const[quote,setQuote]=useState("");
const[author,setAuthor]=useState("");
const[randomNum,setRandomNum]=useState(0);
const[array,setArray]=useState(null);
const [accentColor,setAccentColor]=useState('#000000');

 const fetchQuote = async (url)=>{
const response = await fetch(url)
const parsedJSON= await response.json()
setArray(parsedJSON.quotes)
console.log(parsedJSON)
}

useEffect(()=>{
  fetchQuote(quoteUrl)
},[quoteUrl]

)
  function generateRandomNum() {
    let randomInt = Math.floor(Math.random() * array.length);
    setRandomNum(randomInt);
    setQuote(array[randomInt].quote);
    setAuthor(array[randomInt].author);
    setAccentColor(colorArray[randomInt]);
  }

return (
    <div className="App">
      <header className="App-header" style={{backgroundColor:accentColor}}>
        <div id ="quote-box" style={{color:accentColor}}>
       <h3 id="text" >< FontAwesomeIcon icon ={faQuoteLeft} /> {quote}</h3>
       <h5 id="author">- {author}</h5>
       
       
       <button id="new-quote" onClick={ generateRandomNum } style={{backgroundColor:accentColor}}>New quote</button>
       <div className="button">
       <a id="tweet-quote" href={`https://twitter.com/intent/tweet?text=${author}`} style={{backgroundColor:accentColor}}>< FontAwesomeIcon icon ={faTwitter} />
       </a>
       </div>
       </div>
      </header>
    </div>
  );
  }

export default App;
