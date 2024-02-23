import React, { useState, useEffect } from 'react';

const Quote = () => {
  const [quote, setQuote] = useState('');
  const [author, setAuthor] = useState('');

  useEffect(() => {
    fetchQuote();
  }, []);

  const fetchQuote = async () => {
    try {
      const response = await fetch('https://api.quotable.io/random');
      const data = await response.json();
      setQuote(data.content);
      setAuthor(data.author);
    } catch (error) {
      console.error('Error fetching quote:', error);
    }
  };

  const handleNewQuote = () => {
    fetchQuote();
  };

  const handleTweet = () => {
    const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(
      `"${quote}" - ${author}`
    )}`;
    window.open(twitterUrl, '_blank');
  };

  return (
    <div className='h-screen bg-gray-200 flex justify-center items-center'>
      <div className='bg-white p-8 max-w-md rounded shadow-md text-center'>
        <h2 className='text-2xl mb-4'>Quote of the day</h2>
        <blockquote className='italic text-lg mb-2'>" {quote} "</blockquote>
        <span className='block mb-4'>- {author}</span>
        <div className='flex justify-center space-x-4'>
          <button
            className='bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600'
            onClick={handleNewQuote}
          >
            New Quote
          </button>
          <button
            className='bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600'
            onClick={handleTweet}
          >
            Tweet
          </button>
        </div>
      </div>
    </div>
  );
};

export default Quote;
