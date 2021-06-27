import './App.css';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Home from './views/Home/Home';
import ItemDetailContainer from './views/ItemDetailContainer/ItemDetailContainer'
import Category from './views/Category/Category'
import Cart from './views/Cart/Cart';



function App() {
return (
<Router>
  <div className="App">
    <Navbar />
    <Switch>
      <Route path='/' exact component={Home} />
      <Route path='/detalles/:id' component={ItemDetailContainer} />
      <Route path='/category/:categoryId' exact component={Category} />
      <Route path='/cart' component={Cart} />

    </Switch>
    
  </div>
</Router>
);
}

export default App;