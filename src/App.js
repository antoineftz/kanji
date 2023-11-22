import"./fonts/balonxb.ttf";
import { useState } from 'react';
import Card from "./Card";

function Flexboxa() {

  //Flexbox first row of squares 
   return(
  <div className="kanji-container">
    <div className="app-title">KANJI FLASHCARD</div>
      <div className="kanji-card">
        <Card/>
      </div>
    <div className="app-title2">100 KANJI DEMO</div>
    
  </div>  
 );
}

function Flexboxb() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  function resetClick() {
    setCount(0);
  }
// Second row of squares
  return(
  <div className="button-container">
    <div className="reset" onClick={resetClick}>RESET</div>
    <div className="sco">SCORE</div>
    <div className="score" onClick={handleClick}>{count}</div>  
    
  </div>
  );
}

export default function App() {
  return (
  <>
     <Flexboxa/>
     <Flexboxb/>
  </>
  );

}


