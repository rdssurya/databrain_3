import { useEffect, useState } from 'react';
import './App.css';
import ListItem from './Components/ListItem';

function App() {
  const [listItems, setListItems] = useState([]);

  useEffect(()=>{
    makingApiCall();
  },[]);


  /**
   * Function which is called inside useEffect hook whenever the component mounts
   * to fetch the data from  "https://api.github.com/users" which is a list of github users.
   */
  const makingApiCall = async () => {
    try {
      const items = await fetch("https://api.github.com/users");
      const data = await items.json();
      setListItems(data);
    } catch (error) {
      throw new Error(error);
    }
  };

  return (
    <div className="App">
      <h1>List of Items</h1>
      <ol>
      {listItems.map((listItem) => (
      <li className='itemDiv'>
        <ListItem 
          id={listItem.id}
          key={listItem.id} 
          username={listItem.login}
        />
      </li>))}
      </ol>
    </div>
  );
}

export default App;
