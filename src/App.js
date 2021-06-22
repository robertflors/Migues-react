import './App.css';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Home from './views/Home/Home';
import ItemDetailContainer from './views/ItemDetailContainer/ItemDetailContainer'



function App() {
return (
<Router>
  <div className="App">
    <Navbar />
    <Switch>
      <Route path='/' exact component={Home} />
      <Route path='/detalles/:id' component={ItemDetailContainer} />

    </Switch>
    
  </div>
</Router>
);
}

export default App;