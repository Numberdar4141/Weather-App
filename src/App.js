import Weather from './Component/Weather';
import './App.css';

import QRgenrator from './Component/QRgenrator';
import TextTovoice from './Component/TextTovoice';
import Dragdrop4 from './Component/Dragdrop4';
import Ranpasword from './Component/Ranpasword';
import PassStreng from './Component/PassStreng';
import Minicalender from './Component/Minicalender';

function App() {

  return (
    <div className="App">
<Weather/>

<QRgenrator/>
<TextTovoice/>
<Dragdrop4/>
<Ranpasword/>
<PassStreng/>
<Minicalender/>
     
    </div>
  );
}

export default App;
