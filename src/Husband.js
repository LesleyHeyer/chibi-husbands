import {React, useState} from 'react';

import style from './husband.module.css';


const Husband = ({name, images, information, yes, no, husbands, setHusbands}) => {

  // const getSubmit = (e) => {
  //   setSubmit(e.target.value);
  //   e.preventDefault();
  // }

  // const getSubmit = (e) => {
  //   e.preventDefault();

  //   setSubmit([
  //     ...submit,
  //     {choice: e.target.value, id: name},
  //   ]);

  //   if(e.target.value === "yes"){
  //     window.alert('you pressed yes');
  //     return yes;
  //   } else {
  //       window.alert("you pressed no");
  //       return no;
  //   }
  // };



  // const formSubmit = (e) => {
  //   e.preventDefault();
  //   console.log(state)
  // }

  const [response, setResponse] = useState('');
  const [radioButtonChoice, setRadioButtonChoice] = useState(null);

  const formSubmit = (e) => {
    e.preventDefault();

    setHusbands( prevHusbands => prevHusbands.map(prevHusband => {
      if(prevHusband.name === name){
        return {...prevHusband, choice: radioButtonChoice}
      } 
      return prevHusband;
    })
      
    );

    if(radioButtonChoice === "yes"){
      window.alert('No going back now!');
      setResponse(yes);
    } else {
        window.alert("Are you serious?");
        setResponse(no);
    } 
  };


    return(
        <div className={style.husbandContainer}>
            <h1>{name}</h1>
            <ol>
              {information.map(info =>(
                  <li>{info}</li>
              ))}
            </ol>
            <img className={style.husband} src={images} />
            <p>Will You Marry Me?</p>
            <div className="form">
            <div className={style.buttonSection}>
                    <div className={style.radioButton}>
                    <label for="yes">
                      <input 
                        type="radio" 
                        checked={radioButtonChoice === "yes"}
                        onChange={(e) => { setRadioButtonChoice(e.target.value) }}
                        name="husband" 
                        value="yes"
                      />
                        Yes
                    </label>
                    <label for="no">
                      <input 
                        type="radio" 
                        checked={radioButtonChoice === "no"}
                        onChange={(e) => { setRadioButtonChoice(e.target.value) }}
                        name="husband" 
                        value="no"
                      />
                        No
                    </label>
                    </div>
                    <br />
                    <div>
                    <button 
                      className={style.submitButton} 
                      type="submit" 
                      onClick={(e) => (formSubmit(e))}>
                        Ask Him!
                      </button>
                      <br />
                    </div>
                    </div>
                    </div>
            <div>
                {!response ? '' : <p className={style.response}>His Answer: {response} </p> }
            </div>
            <br/>
        </div>
    );

};

export default Husband;
