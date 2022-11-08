import profiles from '../data/berlin.json';

function FaceBook() {
  return (
    <div>
      {profiles.map(({ firstName, country, lastName, img, isStudent }) => {
        return (
          <div className="idCard">
            <img src={img} alt="foto" className="foto" />
            <article>
              <div>firstName {firstName}</div>
              <div>lastName {lastName}</div>
              <div>country {country}</div>
            </article>
          </div>
        );
      })}
    </div>
  );
}
export default FaceBook;
