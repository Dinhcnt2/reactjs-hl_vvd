import React, { Component } from 'react';
import VvdEventComp from './components/VvdEventComp';
import VvdEventCompClass from './components/VvdEventCompClass';
import VvdEventForm1 from './components/VvdEventForm1';
import VvdEventForm2 from './components/VvdEventForm2';

class App extends Component {
  render() {
    return (
      <div className='container border'>
        <h1 className='text-center'>
          Vương Văn Định<br />ReactJs - Form - Event
        </h1>
        <hr />

        <VvdEventComp />
        <VvdEventCompClass />
        <VvdEventForm1 />
        <VvdEventForm2 />
      </div>
    );
  }
}

export default App;