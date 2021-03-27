import logo from './logo.svg';
import './App.css';

// components
import Sidebar from './Sidebar'
import Navbar from './Navbar'
import Section from './Section'



function App() {
  return (
    <div className="">
      <Navbar />
      <div className="d-flex">
        <Sidebar />
        <Section />
      </div>
    </div>
  );
}

export default App;
