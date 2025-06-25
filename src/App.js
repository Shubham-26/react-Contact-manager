import React from 'react';
import './App.css';
import Header from './Header'
import AddContact from './AddContact'
import ContactList from './ContactList'
import ContactJson from './contact.json'

import 'semantic-ui-css/semantic.min.css';


const App = () => {


  return (
    <div className='ui container'>
      <Header></Header>
      <AddContact ></AddContact>
      <ContactList></ContactList>
    </div>
  )
}

export default App



