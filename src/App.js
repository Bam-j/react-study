import './App.css';
import {useState} from 'react';
import ColorPicker from './codes/ColorPicker';

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const onClick = () => {
    setIsOpen(!isOpen);
  };

    return (
        <div>
          <button onClick={onClick}>열기</button>

          {isOpen && <ColorPicker/>}
        </div>
    );
}

export default App;
