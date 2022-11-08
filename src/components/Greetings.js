function Greetings({ lang, children }) {
  const frase = {
    de: 'hallo',
    en: 'hello',
    es: 'buenos dias',
    fr: 'bonjour',
  };
  return (
    <div className="greetings">
      {/*{console.log(children)} */}
      <h3>
        {frase[lang]} {children}
      </h3>
    </div>
  );
}
export default Greetings;
