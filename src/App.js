import { useEffect } from 'react';

//57a8994c

const API_URL = 'http://www.omdbapi.com?apikey=57a8994c';

const App = () => {
  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();

    console.log(data);
  };

  useEffect(() => {
    searchMovies('Spiderman');
  }, []);

  return <h1>App</h1>;
};

export default App;