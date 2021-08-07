import React, { useState } from 'react';
import style from './husband.module.css';


const Husband = ({name, images, information, yes, no}) => {

  // const [submit, setSubmit] = useState([]);

  // const submitChoice = e => {
  //   if(value === "yes"){
  //     return yes;
  //   } else {
  //       e.alert("are you sure?");
  //       no;
  //   }
  // };

  // const getSubmit = e => {
  //   e.preventDefault();
  //   setSubmit();
  // }

    return(
        <div>
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
                    <div className={style.radioButtom}>
                    <input type="radio" id="yes" name="husband" value="yes"/>
                    <label for="yes">Yes</label>
                    <input type="radio" id="no" name="husband" value="no"/>
                    <label for="no">No</label>
                    <br />
                    <button className={style.submitButton} type="submit">Make Your Choice</button>
                    </div>
                </form>
            <div>
                <p>His Answer: {}</p>
            </div>
            </div>
            <br/>
        </div>
        </div>
    );

};

export default Husband;