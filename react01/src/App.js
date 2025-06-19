import React, { useState } from 'react';
import './App.css';
import Header from "./component/Header";
import Nav from "./component/Nav";
import Article from "./component/Article";


function App() {
  // const _mode = useState('WELCOME');
  // const mode = _mode[0];
  // const setMode = _mode[1];

  const [mode, setMode] = useState('WELCOME');
  const [id, setId] = useState(null);


  const menus = [
    {id:1, menuName:'Menu1', desc:'Menu1 is html'},
    {id:2, menuName:'Menu2', desc:'Menu2 is css'},
    {id:3, menuName:'Menu3', desc:'Menu3 is js'}
  ]

  let content = null;
  if(mode === 'WELCOME'){
    content = <Article title="Welcome" desc="This page name is Welcome" />
  } else if(mode === 'READ'){
    let menuName, desc = null;
    for(let i = 0; i<menus.length; i++){
      console.log(menus[i].id, id)
      if(menus[i].id === id){
        menuName = menus[i].menuName;
        desc = menus[i].desc;
      }
    }
    content = <Article title={menuName} body={desc}/>
  }



  return (
    <div className="App">
      {
      /* <Header title="REACT01" onChangeMode={function(){
        alert('Header alert 함수이다!');
      }} />       
      위 함수를 화살표 함수로 바꿈 ↓*/
      }     

      {/* 
      <Header title="REACT01" onChangeMode={() => {alert('Header alert 함수이다!');}} />
      <Nav menus={menus} onChangeMode={(id) => {alert(id);}} />
      <Article title="Welcome" desc="Hello, React Class" /> 
      */}

      <Header title="REACT01" onChangeMode={() => {
       setMode('WELCOME');
      }} />
      <Nav menus={menus} onChangeMode={(_id) => {        
       setMode('READ');
       setId(_id);
      }} />
      {content}
      {/* <Article title="Welcome" desc="Hello, React Class" /> */}
    </div>
  );
}



export default App;