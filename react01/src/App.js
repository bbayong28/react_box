import './App.css';
import Header from "./component/Header";
import Nav from "./component/Nav";
import Article from "./component/Article";


function App() {
  const mode = 'WELCOME'
  const menus = [
    {id:1, menuName:'Menu1', desc:'Menu1 is html'},
    {id:2, menuName:'Menu2', desc:'Menu2 is css'},
    {id:3, menuName:'Menu3', desc:'Menu3 is js'}
  ]
  if(mode === 'WELCOME'){

  } else if(mode === 'READ'){

  }


  return (
    <div className="App">
      {/* <Header title="REACT01" onChangeMode={function(){
        alert('Header alert 함수이다!');
      }} /> */}
      {/* // 위 함수를 화살표 함수로 바꿈 */}
      <Header title="REACT01" onChangeMode={() => {
        alert('Header alert 함수이다!');
      }} />
      <Nav menus={menus} onChangeMode={(id) => {
        alert(id);
      }} />
      <Article title="Welcome" desc="Hello, React Class" />
    </div>
  );
}



export default App;