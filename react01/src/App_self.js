import './App.css';



function Header(props){
  return(
    <header>
      <h1>{props.title}</h1>
    </header>
  )
}

function Main(props){
  const preStd_li= [];
  for(let i=0; i<props.preStudy.length; i++){
    let t = props.preStudy[i];
    preStd_li.push(<li key={t.id}>{t.txt}</li>);
  }

  return(
    <main>
      <p>react 수업 듣기전 필요한 베이스 공부 리스트</p>
      <ul>
        {preStd_li}
      </ul>
    </main>

  )
}





function App() {
  const preStudy = [
    {id:1, txt:'html'},
    {id:2, txt:'css'},
    {id:3, txt:'javascript'}
  ]

  return (
    <div className="App">
      <Header title="React First Class"/>
      <Main preStudy={preStudy}/>
    </div>
  );
}



export default App;