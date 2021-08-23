import React, { useState } from 'react';
import './App.css';
import Husband from './Husband';

function App() {

  const husbandsArray = [
    {name: "Cross",
    husbandPhoto: "../images/ChibiHusband-Cross.png",
    info: ["He's amazing", "He's kind of immortal", "He's a good choice"],
    yesResponse: "Wise decision, I accept you as well.",
    noResponse: "No worries, my dear.  I'm patient."
    },
    {name: "Sergio",
    husbandPhoto: "../images/ChibiHusband-Sergio.png",
    info: ["He's kind", "He's a shy boy", "He's devoted"],
    yesResponse: "Och, I'd love to, Lass!!",
    noResponse: "That's okay, Lass.  Yer worth the wait."
    },
    {name: "Azibo",
    husbandPhoto: "../images/ChibiHusband-Azibo.png",
    info: ["He's adorable", "He's a family man", "He's can catch dinner... literally"],
    yesResponse: "Yaaay!! When!? When!?",
    noResponse: "*cries*"
    },
    {name: "Tyger",
    husbandPhoto: "../images/ChibiHusband-Tyger.png",
    info: ["He can cook", "He cleans", "He's your man candy!"],
    yesResponse: "I knew you would, baby",
    noResponse: "Damn, that's harsh... I'll go eat this cake myself"
    },
    {name: "Ox",
    husbandPhoto: "../images/ChibiHusband-Ox.png",
    info: ["He's a gentleman", "He will bring you flowers", "He's a gentle giant"],
    yesResponse: "Yes, that sounds lovely",
    noResponse: "No hard feelings."
    },
    {name: "Aiden",
    husbandPhoto: "../images/ChibiHusband-Aiden.png",
    info: ["He'll have the royal chefs prepare you anything", "He's a prince", "He will always make you laugh"],
    yesResponse: "You had me at 'wedding garter'",
    noResponse: "I bet I could talk you into it still..."
    },
    {name: "Riel",
    husbandPhoto: "../images/ChibiHusband-Riel.png",
    info: ["He'll hire a maid to clean", "He's got a big heart", "He'll buy dinner?"],
    yesResponse: "You got it!",
    noResponse: "I'll make Ramen if that'll convince you."
    },
    {name: "Jeremiah",
    husbandPhoto: "../images/ChibiHusband-Jeremiah.png",
    info: ["He's a pirate", "He's a sexy nerd", "He's a love machine"],
    yesResponse: "You + me = Match made.  Simple equation.",
    noResponse: "I'd let you eat breakfast in bed if you'd say 'yes'"
    }
  ];

  const [husbands, setHusbands] = useState(husbandsArray);


  return (
    <div className="App">
     <header className="titleimg">
       <img src='./images/ChibiHusbands-Title.png' />
    </header> 
    <body>
      <div className="husbandContainer">
      {husbands.map(husband => (
         <Husband 
         key={husband.name} 
         name={husband.name} 
         images={husband.husbandPhoto}
         information={husband.info}
         yes={husband.yesResponse}
         no={husband.noResponse}
         setHusbands={setHusbands}
         husbands={husbands}
         />
      ))}
      </div>
      <div>
        {/* <form>
        <button class="submitButton" type="submit">Make Your Choice</button><br />
        </form> */}
      </div>
    </body>
    <footer>
      <p>No More Chibi Husbands! Sorry!!</p>
    </footer>
    </div>
  );
}

export default App;
