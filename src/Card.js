//Card component,show next kanji

import { useState } from 'react';
import { kanjiList } from './list';

export default function Card() {
  const [index, setIndex] = useState(0);
  
  const hasNext = index < kanjiList.length - 1;

  function handleNextClick() {
    if (hasNext) {
      setIndex(index + 1);
    } else {
      setIndex(0);
    }
  }

  let kimage = kanjiList[index];

  return (
    <>
     <img
         onClick={handleNextClick}
         src={kimage}
         alt={'noimage'}
      />
    </>
  );
}
