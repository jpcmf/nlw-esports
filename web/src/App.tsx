import './styles/main.css';
import logoImage from './assets/logo-nlw-e.svg';
import * as Dialog from '@radix-ui/react-dialog';
import { GameBanner } from './components/GameBanner';
import { CreateAdBanner } from './components/CreateAdBanner';
import { useEffect, useState } from 'react';

interface Game {
  id: string;
  title: string;
  bannerUrl: string;
  _count: {
    ads: number;
  };
}

export default function App() {
  const [games, setGames] = useState<Game[]>([]);

  useEffect(() => {
    fetch('http://localhost:3333/games')
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setGames(data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="max-w-[1344px] mx-auto flex flex-col items-center my-20 landing">
      <img src={logoImage} alt="logo" />
      <h1 className="text-6xl text-white font-black mt-20 tracking-tighter landing__title">
        Seu{' '}
        <span className="bg-landing-gradient text-transparent bg-clip-text">
          duo
        </span>{' '}
        está aqui.
      </h1>

      <div className="grid grid-cols-6 gap-6 mt-16">
        {games.map((game: Game) => (
          <GameBanner
            key={game.id}
            bannerUrl={game.bannerUrl}
            title={game.title}
            adsCount={game._count.ads}
          />
        ))}
      </div>
      <Dialog.Root>
        <CreateAdBanner />
        <Dialog.Portal>
          <Dialog.Overlay className="bg-black/60 inset-0 fixed" />
          <Dialog.Content className="fixed bg-[#2a2634] py-8 px-10 text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-lg w-[480px] shadow-lg shadow-black/25">
            <Dialog.Title className="text-3xl text-white font-black">
              Publique um anúncio
            </Dialog.Title>
            <Dialog.Content>
              <form></form>
            </Dialog.Content>
            <Dialog.Close />
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </div>
  );
}
