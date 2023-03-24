import './App.css';
import Header from './components/Header'
import Search from './components/Search'
import ResultsList from './components/ResultsList'
import Footer from './components/Footer'

function App() {
  return (
    <div className="App">
      <Header />
      <Search />
      <ResultsList />
      <Footer />
    </div>
  );
}

export default App;
