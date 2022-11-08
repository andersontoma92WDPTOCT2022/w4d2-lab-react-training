import { useState } from 'react';

function LikeButton(params) {
  //precisa ser const!
  const [contador, setContador] = useState(0);
  return (
    <div>
      <button
        className="button"
        onClick={() => {
          setContador(contador + 1);
        }}
      >
        {contador} Like{contador >= 2 ? 's' : ''}
      </button>
    </div>
  );
}
export default LikeButton;
