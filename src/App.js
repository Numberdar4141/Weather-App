import Weather from './Component/Weather';
import './App.css';

import QRgenrator from './Component/QRgenrator';
import TextTovoice from './Component/TextTovoice';

function App() {

  return (
    <div className="App">
<Weather/>

<QRgenrator/>
<TextTovoice/>
     
    </div>
  );
}

export default App;
