import './assets/style/_app.scss';
import Background from './components/Background';
import Input from './components/Input';
import MainData from './components/MainData';
import DailyForecast from './components/DailyForecast';

function App() {
  return (
    <div className="App">
      <Background>
        <Input />
        <MainData />
        <DailyForecast />
      </Background>
    </div>
  );
}

export default App;
