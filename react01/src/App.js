import './App.css';


function Header() {
  return (
    <header className="Header">
      <div className="h_inner">
        <div className="h_logo">
          <h1></h1>
        </div>
      </div>

      {/* <div className=""></div> */}
    </header>
  );
}


function Main() {  
  const numA = 30;
  const numB = 1;


  const strA = "리액트 첫 시작";
  const strB = "25.06.11";


  return (
    <main>
      <h2>{numA + numB} 살</h2>
      <h2>{strA + strB} 살</h2>
    </main>
  );
}


function Footer() {
  return (
    <footer></footer>
  );
}


function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}



export default App;