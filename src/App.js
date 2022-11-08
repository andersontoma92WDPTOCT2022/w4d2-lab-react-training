import './App.css';
import IdCard from './components/IdCard';
import Greetings from './components/Greetings';

function App() {
  return (
    <div className="App">
      <h1>lab W4 d2</h1>
      <section>
        <IdCard
          lastName="Doe"
          firstName="John"
          gender="male"
          height={178}
          birth={'1992-07-14'}
          picture="https://randomuser.me/api/portraits/men/44.jpg"
        />

        <IdCard
          lastName="Delores "
          firstName="Obrien"
          gender="female"
          height={172}
          birth={'1988-05-11'}
          picture="https://randomuser.me/api/portraits/women/44.jpg"
        />
      </section>
      <section>
        <Greetings lang="de">Ludwig</Greetings>
        <Greetings lang="fr">François</Greetings>
      </section>

      {/* .children : entre as tags de abertura e fechamento*/}
    </div>
  );
}

export default App;
