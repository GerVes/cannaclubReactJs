import Header from './Header';
import '../App.css';
import Main from './Main';
import Footer from './Footer';
import ItemListContainer from './ItemListContainer';
import { BrowserRouter } from 'react-router-dom';
import ItemList from './ItemList';
import Item from './Item';
import CustomProvider from './CustomProvider';



function App() {
  return (
    <>
      <CustomProvider>
        <BrowserRouter>
          <Header />
          <Main />
          <Footer />
        </BrowserRouter>
      </CustomProvider>
    </>
  )
}

export default App;
