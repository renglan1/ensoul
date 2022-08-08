import FragmentCards from "./components/FragmentCards";
import DefaultLayout from "./layouts/DefaultLayout";
import "../src/assets/global.scss";

function App() {
  const characters = [
    {
      id: 1,
      name: "Isha",
      title: "the Revenant",
    },
    {
      id: 2,
      name: "Lydia",
      title: "the Inquisitor",
    },
    {
      id: 3,
      name: "Astel",
      title: "the Insatiable",
    },
    {
      id: 4,
      name: "Malakath",
      title: "the Dread",
    },
    {
      id: 5,
      name: "Veer",
      title: "the Hunter",
    },
    {
      id: 6,
      name: "Phoci",
      title: "the Mage of the Golden Spire",
    },
  ];

  return (
    <div className="App">
      <DefaultLayout>
        <FragmentCards characters={characters} />
      </DefaultLayout>
    </div>
  );
}

export default App;
