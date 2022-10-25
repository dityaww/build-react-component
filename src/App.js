import './App.css';
import Home from './components/Home';
import Navbar from './components/Navbar';

function App() {
  return (
    <div>
      <Navbar />
      <div className="container">
        <h2 className='react-title'>React Component</h2>
        <div className="row">
          <Home 
            title={"Build Web Film with TMDB API"} 
            desc={`
            We develop a website film with The Movie Database API, 
            we build this web by using HTML, CSS and Javascript
            in this web have some feature, the first one this web can show a list film
            and this web can search about a film`}
          />

          <Home 
            title={"Build Web Film with TMDB API"} 
            desc={`
            We develop a website film with The Movie Database API, 
            we build this web by using HTML, CSS and Javascript
            in this web have some feature, the first one this web can show a list film
            and this web can search about a film`}
          />

          <Home 
            title={"Build Web Film with TMDB API"} 
            desc={`
            We develop a website film with The Movie Database API, 
            we build this web by using HTML, CSS and Javascript
            in this web have some feature, the first one this web can show a list film
            and this web can search about a film`}
          />
          
          <Home 
            title={"Build Web Film with TMDB API"} 
            desc={`
            We develop a website film with The Movie Database API, 
            we build this web by using HTML, CSS and Javascript
            in this web have some feature, the first one this web can show a list film
            and this web can search about a film`}
          />
          
          <Home 
            title={"Build Web Film with TMDB API"} 
            desc={`
            We develop a website film with The Movie Database API, 
            we build this web by using HTML, CSS and Javascript
            in this web have some feature, the first one this web can show a list film
            and this web can search about a film`}
          />

          <Home 
            title={"Build Web Film with TMDB API"} 
            desc={`
            We develop a website film with The Movie Database API, 
            we build this web by using HTML, CSS and Javascript
            in this web have some feature, the first one this web can show a list film
            and this web can search about a film`}
          />
          
        </div>
      </div>
    </div>
  );
}

export default App;
