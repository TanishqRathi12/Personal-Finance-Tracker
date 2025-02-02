import './App.css';
import Header from './Components/Header';
import { AddTransaction } from './Components/AddTransaction';
import { TransactionList } from './Components/TansactionList';
import store from "../src/App/Store"
import { Provider } from 'react-redux';
import { Filter } from './Components/Filter';
import { Summary } from './Components/Summary';


function App() {
  return (
    <>
    <Provider store={store}>
      <Header/>
      <AddTransaction/>
      <Filter/>
      <TransactionList/>
      <Summary/>
    </Provider>  
    </>
  );
}

export default App;
