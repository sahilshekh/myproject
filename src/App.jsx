
import './App.css';
import Mytext from './components/Mytext';
import Navbar from './components/Navbar';
function App() {
  return (
    <div className="App">
   <Navbar title="typo"/>
   <div className="container">
   <Mytext  Title="Type Your Text Here"/>
   </div>
   </div>
  );
}

export default App;
