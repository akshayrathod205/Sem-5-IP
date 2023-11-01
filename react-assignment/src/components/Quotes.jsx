import React, { Component } from "react";

class Quotes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quotes: [
        "Life is 10% what happens to us and 90% how we react to it. - Charles R. Swindoll",
        "The only way to do great work is to love what you do. - Steve Jobs",
        "In the middle of every difficulty lies opportunity. - Albert Einstein",
        "Success is not final, failure is not fatal: It is the courage to continue that counts. - Winston Churchill",
        "Don't watch the clock; do what it does. Keep going. - Sam Levenson",
      ],
    };

    this.myRef = React.createRef();
  }

  generateRandomQuote = () => {
    const randomIndex = Math.floor(Math.random() * this.state.quotes.length);
    const randomQuote = this.state.quotes[randomIndex];
    this.myRef.current.textContent = randomQuote;
  };

  render() {
    return (
      <div>
        <h1>Random Quote Generator</h1>
        <button onClick={this.generateRandomQuote}>Generate Quote</button>
        <p ref={this.myRef}>
          Press the button to generate a random quote.
        </p>
      </div>
    );
  }
}

export default Quotes;
