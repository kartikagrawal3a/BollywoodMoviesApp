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
        <div className = "row">
          <Card imgsrc = {Data[3].imgsrc} nameFilm = {Data[3].nameFilm} link = {Data[3].link} />
          <Card imgsrc = {Data[4].imgsrc} nameFilm = {Data[4].nameFilm} link = {Data[4].link} />
          <Card imgsrc = {Data[5].imgsrc} nameFilm = {Data[5].nameFilm} link = {Data[5].link} />
        </div>
      </div>
    </>
  );
}

export default App;