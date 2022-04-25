import './App.css';

function App() {
  let user = []
  user.push({
    name: 'Jhon',
    age: 30,
    job: 'Programer'
  })
  user.push({
    name: 'Elena',
    age: 20,
    job: 'Administrator',
  })
  return (
    <div className="App">
    {user[0].job + ' ' + user[1].job}
    </div>
  );
}

export default App;
