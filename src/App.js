import Header from "./components/header";
import Menu from "./components/menu";

function App() {
  return (
    <div className="App">
      <Header/>
      <div style ={{width: '100%', display: 'flex'}} >
        <Menu>

        </Menu>
        <div style={{'background-color': 'blue', width: '100%'}}>

        </div>
      </div>
    </div>
  );
}

export default App;
