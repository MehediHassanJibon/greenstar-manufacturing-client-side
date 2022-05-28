import logo from './logo.svg';
import './App.css';
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div className="App">
      <h1 class="text-3xl font-bold underline">
    Wellcome To Green Manufacturing Limited
  </h1>
  <button className="btn btn-primary">Button</button>
  <ToastContainer></ToastContainer>
    </div>
  );
}

export default App;
