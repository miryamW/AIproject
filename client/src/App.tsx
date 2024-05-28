import React from 'react';
import logo from './logo.svg';
import './App.css';
import RMGButton from './components/RMGButton.component';
import RMGImage from './components/RMGImage.component';
import RMGInput from './components/RMGInput.component';
import RMGText from './components/RMGText.component';
import RMGHeader from './components/RMGHeader.component';
import Login from './components/login';
import Main from './components/main.component';

function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.tsx</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
    <div>
      {/* <RMGButton title={'AAAAAAAAAA'}></RMGButton>
      <br />
      <RMGImage src={"../IMG_1686.JPG"} alt={'hello'}></RMGImage>
      <br />
      <RMGInput type={''} value={''} onChange={function (event: React.ChangeEvent<HTMLInputElement>): void {
        throw new Error('Function not implemented.');
      } }></RMGInput>
      <br />
      <RMGText text={'xxxxxxxxxxxxxxxxxxxxx'}></RMGText>
      <br />
      <RMGHeader text={'zzzzzzzz'} level={'1'}></RMGHeader>
      <br />
      <Login></Login> */}
      <Main></Main>
    </div>
  );
}

export default App;
