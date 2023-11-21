import React, { useEffect, useState } from 'react';
import { Badge } from '@chakra-ui/react';
import '../Styles/Counter.css';

export default function Counter() {

    const [like, setLike] = useState(0);
    const [dislike, setDislike] = useState(0);

    useEffect(() => {
        console.log("Total Clicks", like + dislike);
      }, [like, dislike]);

  return (
    <div className='counter'>
        <div className='counter-like-con'>
            <button
                onClick={() => setLike(like + 1)}
            >
                <Badge colorScheme='green'
                badgeContent={like}>Like 👍</Badge>
            </button>
            <span>{like}</span>
        </div>
        <div className='counter-like-con'>
            <span>{dislike}</span>
            <button
                onClick={() => setDislike(dislike + 1)}
            >
                <Badge colorScheme='red' badgeContent={dislike}>DisLike 👎</Badge>
            </button>
        </div>
    </div>
  )
}
