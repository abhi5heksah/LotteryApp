import React, { useState } from 'react'
import "./Lottery.css";
import { genTicket,sum } from './ticketgen';

function Lottery() {
    let [ticket, setTicket] = useState(genTicket(3));

    const isWinning = sum(ticket) === 21 || sum (ticket) === 7;

    const randomGen = () => {
        const newTicket = [
            Math.floor(Math.random() * 10),
            Math.floor(Math.random() * 10),
            Math.floor(Math.random() * 10),
        ];

    setTicket(newTicket);
    console.log("Random numbers generated:" , newTicket);
    console.log("Sum of all 3 numbers :" , sum(newTicket))
    };

    return (
        <div>
        <iframe
          className="lottery"
          src="https://lottie.host/embed/e9f6051a-4099-4524-a0a1-e74b455fa30b/CztdR8cKKr.json"
        ></iframe>
        <iframe
          className="money-animation"
          src="https://lottie.host/embed/f378861a-9cb1-4da2-9b0b-c05b0aec8e72/adCqLejhrr.json"
        ></iframe>


        <h1>Lottery Game!</h1>
        <div  className="ticket">
        <span>{ticket[0]}</span>
        <span>{ticket[1]}</span>
        <span>{ticket[2]}</span>
        </div>
          <h3>
        {isWinning
          ? `Hey Congratulations, you’re a winner! Your winning ticket is: ${ticket[0]}${ticket[1]}${ticket[2]}`
          : ""}
      </h3>
        <button onClick={randomGen}>Get your ticket</button>

        <footer>
            <p>
                <a className='sign' href='https://abhi5heksah.netlify.app/'> © abhi5heksah.</a> &nbsp;All rights reserved 2024.
            </p>
        </footer>
        </div>
  );
}

export default Lottery;
