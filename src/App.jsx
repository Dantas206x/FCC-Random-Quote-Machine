// Import necessary React libraries
import React, { useState, useEffect } from 'react';

// Define the App component
function App() {
  // State variables to store the current quote and author
  const [quote, setQuote] = useState('');
  const [author, setAuthor] = useState('');

  // Function to fetch a new quote from an API
  const getNewQuote = async () => {
    try {
      const response = await fetch('https://api.quotable.io/random');
      const data = await response.json();

      // Update state with the new quote and author
      setQuote(data.content);
      setAuthor(data.author);
    } catch (error) {
      console.error('Error fetching new quote:', error);
    }
  };

  // Function to open a new Twitter window with the current quote
  const tweetQuote = () => {
    const tweetUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(
      `"${quote}" - ${author}`
    )}`;
    window.open(tweetUrl, '_blank');
  };

  // Fetch a new quote on the initial render
  useEffect(() => {
    getNewQuote();
  }, []);

  return (
    <div id="quote-box" className="text-center">
      <div id="text" className="mb-3">
        "{quote}"
      </div>
      <div id="author" className="mb-3">
        - {author}
      </div>
      <button id="new-quote" className="btn btn-primary mr-2" onClick={getNewQuote}>
        New Quote
      </button>
      <a id="tweet-quote" className="btn btn-info" onClick={tweetQuote} href="twitter.com/intent/tweet" target="_blank" rel="noopener noreferrer">
        Tweet Quote
      </a>
    </div>
  );
}

export default App;
