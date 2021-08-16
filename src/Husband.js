import React from 'react';

import style from './husband.module.css';


const Husband = ({name, images, information, yes, no, submit, setSubmit}) => {

  const getSubmit = e => {
    e.preventDefault();
    setSubmit(submitChoice(e));
  }

  const submitChoice = e => {
    if(e.target.value === "yes"){
      return yes;
    } else {
        window.alert("are you sure?");
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
                    <input type="radio" id="yes" name="husband" value="yes"/>
                    <label for="yes">Yes</label>
                    <input type="radio" id="no" name="husband" value="no"/>
                    <label for="no">No</label>
                    </div>
                    <br />
                    <div>
                    <button className={style.submitButton} type="submit" onClick={(e) => getSubmit(e)}>Will he say yes?</button><br />
                    </div>
                </form>
            <div>
                <p>His Answer: {submitChoice}</p> 
            </div>
            </div>
            <br/>
        </div>
    );

};

export default Husband;