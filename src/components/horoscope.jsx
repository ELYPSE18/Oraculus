import React, { useState, useEffect } from 'react';

function Horoscope( props ) {

 

  return (
    <div>
      <p id= "datejour"></p>
      <h1>{props.horoscope.signe}</h1>
      <span id="date">{props.horoscope.date}</span>
      <div id="amour"><span>Amour :</span> {props.horoscope.amour}</div>
      <div id="travail"><span>Travail :</span> {props.horoscope.travail}</div>
      <div id="argent"><span>Argent :</span> {props.horoscope.argent}</div>
      <div id="sante"><span>Santé :</span> {props.horoscope.sante}</div>
      <div id="famille"><span>Famille :</span> {props.horoscope.famille}</div>
      <div id="conseil"><span>Conseil :</span> {props.horoscope.conseil}</div>
    </div>
  );
}




export default Horoscope;
