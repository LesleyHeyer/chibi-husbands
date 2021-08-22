import React from 'react';

import style from './husband.module.css';


const Husband = ({name, images, information, yes, no, state, setState}) => {

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

  const formSubmit = (e) => {
    e.preventDefault();

    setState([
      ...state,
      {choice: e.target.value, id: name},
    ]);

    if(e.target.value === "yes"){
      window.alert('you pressed yes');
      return yes;
    } else {
        window.alert("you pressed no");
        return no;
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
            <p>Would You Marry Him?</p>
            <div className="form">
                <form>
                    <div className={style.radioButton}>
                    <label for="yes">
                      <input 
                        type="radio" 
                        checked={state === "yes"}
                        onChange={(e) => { setState(e.target.value) }}
                        name="husband" 
                        value="yes"
                      />
                        Yes
                    </label>
                    <label for="no">
                      <input 
                        type="radio" 
                        checked={state === "no"}
                        onChange={(e) => { setState(e.target.value) }}
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
                      onSubmit={(e) => (formSubmit(e))}>
                        Will he say yes?
                      </button>
                      <br />
                    </div>
                </form>
            <div>
                <p>Radio Button Is : {state}</p> 
            </div>
            </div>
            <br/>
        </div>
    );

};

export default Husband;