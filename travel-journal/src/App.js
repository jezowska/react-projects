
import './App.css';
import Card from './components/Card'
import Navbar from './components/Navbar'
import data from './data'


function App() {
  const cards = data.map(item => {
    return (
      <Card
        key={item.id}
        {...item}
      />
    )
  })

  console.log(data)
  return (
    <div className="App">
      <Navbar />
      <div className="cards">
        {cards}
      </div>
    </div>
  );
}

export default App;
