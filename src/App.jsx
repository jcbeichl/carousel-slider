import { slides } from "./assets/data/carouselData";
import Carousel from "./components/Carousel";

const App = () => {
  return (
    <main className="app">
      <Carousel slides={slides} />
    </main>
  );
};

export default App;
