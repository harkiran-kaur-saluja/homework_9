import React, {useState} from 'react';

import './style.css'

function App() {
  const [items, setItems] = useState([]);

  function handleInput () {
    let item = document.getElementById('input').value;
    let copy = [].concat(items, item);
    setItems(copy);
  }

  
  return (
    <div className="App mb-3">
      <Input handleInput={handleInput}/>
      <h3 className="display-6">List Items:</h3>
      <GenerateList list={items} />
    </div>
  );
}

function Input(props) {
  return (
    <div className="entry">
      <input id="input" className="form-control" placeholder="Enter next task:" type="text" name="to-do" />
      <button className="btn btn-primary" onClick={() => props.handleInput()}>Submit</button>
    </div>
    
  );
}

function GenerateList(props) {
  
  return props.list.map((currentItem) => {
    return (
      <ul className="list-item" key={currentItem}>
        <li className="lead" >{currentItem}</li>
      </ul>
    );
  });
}

export default App;
