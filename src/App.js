import React from 'react';
import Laxmi from './images/laxmi.jpg';
import Dilbechara from './images/dilbechara.jpg';
import Coolie from './images/coolie.jpg';
import Heading from './Heading';
import Card from './Card';

function App(){
  return(
    <>
      <Heading />
      <div className = "main">
        <div className = "row">
          <Card imgsrc = {Laxmi}  nameFilm = "Laxmi"/>
          <Card imgsrc = {Dilbechara} nameFilm = "Dil Bechara"/>
          <Card imgsrc = {Coolie} nameFilm = "Coolie No. 1"/>
        </div>
      </div>
    </>
  );
}

export default App;