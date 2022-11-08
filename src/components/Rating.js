function Rating({ children }) {
  console.log(children);
  let stars =
    '🔅'.repeat(Math.round(children)) + '🤢'.repeat(5 - Math.round(children));
  console.log(stars);
  return <div>{stars}</div>;
}
export default Rating;
