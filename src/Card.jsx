import React from 'react';


function Card(props){
    return(
        <>
            <div className="card">
                <img src = {props.imgsrc} alt = "img" />
                <div className = "cardInfo">
                    <p>{props.nameFilm}</p>
                    <p>An Original Bollywood Film</p>
                    <a href={props.link}>
                        <button>Watch Now</button>
                    </a>
                </div>
            </div>
        </>
    );
}

export default Card;