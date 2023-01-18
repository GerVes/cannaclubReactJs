import Header from './Header';
import '../App.css';
import Main from './Main';
import Footer from './Footer';
import ItemListContainer from './ItemListContainer';
import { BrowserRouter } from 'react-router-dom';
import ItemList from './ItemList';
import Item from './Item';


function App() {
  return (
    <>
      <BrowserRouter>

        <Header />


        {/* <ItemListContainer greeting="Bienvenidos a Green Doors Cannabis Club" /> */}
        <Main />
        <Footer />
      </BrowserRouter>

    </>
  )
}

export default App;
