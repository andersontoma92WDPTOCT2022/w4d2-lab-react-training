function Random({ max, min }) {
  let sorteado = min + Math.floor(Math.random() * (max - min));
  return (
    <div className="greetings">
      <p>
        Random value between {min} and {max} => {sorteado}
      </p>
    </div>
  );
}
export default Random;
