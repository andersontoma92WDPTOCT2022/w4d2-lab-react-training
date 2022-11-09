import { useState } from 'react';
import profiles from '../data/berlin.json';

function FaceBook() {
  const [profileList, setProfileList] = useState(profiles);
  const deletar = (img) => {
    console.log('clicou', img);
    const filteredProfile = profileList.filter((profile) => {
      console.log(profile.img, profile.img !== img, '<---');
      return profile.img !== img;
    });
    setProfileList(filteredProfile);
  };
  return (
    <div>
      {profileList.map(({ firstName, country, lastName, img, isStudent }) => {
        return (
          <div className="idCard" key={img}>
            <img src={img} alt="foto" className="foto" />
            <article>
              <div>firstName {firstName}</div>
              <div>lastName {lastName}</div>
              <div>country {country}</div>
              <button onClick={() => deletar(img)}> delete </button>
            </article>
          </div>
        );
      })}
    </div>
  );
}
export default FaceBook;
