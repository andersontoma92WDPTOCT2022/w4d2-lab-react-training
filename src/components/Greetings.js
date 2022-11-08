function Greetings({ lang, children }) {
  const frase = {
    de: 'hallo',
    en: 'hello',
    es: 'buenos dias',
    fr: 'bonjour',
  };
  return (
    <div>
      {/*{console.log(children)} */}
      <p>
        {frase[lang]} {children}
      </p>
    </div>
  );
}
export default Greetings;
