function IdCard({ lastName, firstName, gender, height, birth, picture }) {
  return (
    <div className="idCard">
      <img src={picture} alt="figura" />
      <article>
        <p>
          <b>lastName: </b>
          {lastName}
        </p>
        <p>
          <b>firstName: </b>
          {firstName}
        </p>
        <p>
          <b>gender: </b>
          {gender}
        </p>
        <p>
          <b>height: </b>
          {height}
        </p>
        <p>
          <b>birth: </b>
          {birth}
        </p>
      </article>
    </div>
  );
}
export default IdCard;
