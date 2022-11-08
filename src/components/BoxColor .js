function BoxColor({ r, g, b }) {
  let cor = `rgb(${r},${g},${b})`;
  return (
    <div style={{ backgroundColor: cor }} className="boxColor">
      <p>
        rgb({r},{g},{b})
      </p>
    </div>
  );
}
export default BoxColor;
