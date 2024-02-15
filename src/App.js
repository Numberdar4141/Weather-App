import Weather from './Component/Weather';
import './App.css';

import QRgenrator from './Component/QRgenrator';
import TextTovoice from './Component/TextTovoice';
import Dragdrop4 from './Component/Dragdrop4';
import Ranpasword from './Component/Ranpasword';

function App() {

  return (
    <div className="App">
<Weather/>

<QRgenrator/>
<TextTovoice/>
<Dragdrop4/>
<Ranpasword/>
     
    </div>
  );
}

export default App;
