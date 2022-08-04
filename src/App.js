import TomeCards from "./components/TomeCards";
import Wallpaper from "./components/Wallpaper";
import Header from "./components/Header";
import "../src/assets/css/global.css";

function App() {
  const figures = [
    { 
      id: 1,
      name: "Artorias",
      title: "the Abysswalker",
      link: "https://darksouls.wiki.fextralife.com/Artorias+the+Abysswalker",
    },
    {
      id: 2,
      name: "Sif",
      title: "the Great Grey Wolf",
      link: "https://darksouls.wiki.fextralife.com/Great+Grey+Wolf+Sif",
    },
    {
      id: 3,
      name: "Lautrec",
      title: "the Embraced",
      link: "https://darksouls.wiki.fextralife.com/Knight+Lautrec",
    },
    {
      id: 4,
      name: "Seath",
      title: "the Scaleless",
      link: "https://darksouls.wiki.fextralife.com/Seath+the+Scaleless",
    },
    {
      id: 5,
      name: "Placeholder",
      title: "the Unstoppable",
    },
    {
      id: 6,
      name: "Placeholder",
      title: "the Destroyer",
    },
  ];

  return (
    <div className="App">
      <Header />
      <Wallpaper />
      <div style={{margin: '7.5% 12.5% 12.5% 12.5%'}}>
        <TomeCards figures={figures} />
      </div>
    </div>
  );
}

export default App;
