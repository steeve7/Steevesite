import './App.css';
import Container from './Container/Container';
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function App() {
  return (
    <div className="App">
    <ToastContainer/>
     <Container/>
    </div>
  );
}

export default App;
