import FragmentCards from './components/FragmentCards';
import Wallpaper from './components/Wallpaper';
import Header from './components/Header';
import '../src/assets/global.scss';

function App() {
  const characters = [
    { 
      id: 1,
      name: 'Isha',
      title: 'the Revenant',
    },
    {
      id: 2,
      name: 'Lydia',
      title: 'the Inquisitor',
    },
    {
      id: 3,
      name: 'Astel',
      title: 'the Insatiable',
    },
    {
      id: 4,
      name: 'Malakath',
      title: 'the Dread',
    },
    {
      id: 5,
      name: 'Veer',
      title: 'the Hunter',
    },
    {
      id: 6,
      name: 'Phoci',
      title: 'the Mage of the Golden Spire',
    },
  ];

  return (
    <div className='App'>
      <Header />
      <Wallpaper />
      <div style={{margin: '7.5% 12.5% 12.5% 12.5%'}}>
        <FragmentCards characters={characters} />
      </div>
    </div>
  );
}

export default App;
