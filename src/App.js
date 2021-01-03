import React from 'react';
import Heading from './Heading';
import Card from './Card';
import Data from './Data';

function App(){
  return(
    <>
      <Heading />
      <div className = "main">
        <div className = "row">
          <Card imgsrc = {Data[0].imgsrc} nameFilm = {Data[0].nameFilm} link = {Data[0].link} />
          <Card imgsrc = {Data[1].imgsrc} nameFilm = {Data[1].nameFilm} link = {Data[1].link} />
          <Card imgsrc = {Data[2].imgsrc} nameFilm = {Data[2].nameFilm} link = {Data[2].link} />
        </div>
      </div>
    </>
  );
}

export default App;