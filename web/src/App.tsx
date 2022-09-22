import './styles/main.css';
import logoImage from './assets/logo-nlw-e.svg';
import * as Dialog from '@radix-ui/react-dialog';
import { GameBanner } from './components/GameBanner';
import { CreateAdBanner } from './components/CreateAdBanner';
import { GameController } from 'phosphor-react';
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

            <form className="mt-8">
              <div className="flex flex-col gap-2">
                <label className="font-semibold" htmlFor="game">
                  Qual o game?
                </label>
                <input
                  type="text"
                  name="game"
                  id="game"
                  placeholder="Selecione o game que deseja jogar"
                  className="bg-zinc-900 py-3 px-4 rounded text-sm placeholder:text-zinc-500"
                />
              </div>
              <div className="flex flex-col gap-2 mt-4">
                <label className="font-semibold" htmlFor="name">
                  Seu nome (ou nickname)
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Como te chamam dentro do game?"
                  className="bg-zinc-900 py-3 px-4 rounded text-sm placeholder:text-zinc-500"
                />
              </div>
              <div className="flex flex-row justify-between mt-4">
                <div className="flex flex-col gap-2">
                  <label className="font-semibold" htmlFor="yearsPlaying">
                    Joga há quantos anos?
                  </label>
                  <input
                    type="number"
                    name="yearPlaying"
                    id="yearPlaying"
                    placeholder="Tudo bem ser ZERO"
                    className="bg-zinc-900 py-3 px-4 rounded text-sm placeholder:text-zinc-500"
                  />
                </div>
                <div className="flex flex-col gap-2 w-2/4">
                  <label className="font-semibold" htmlFor="discord">
                    Qual seu Discord?
                  </label>
                  <input
                    type="text"
                    name="discord"
                    id="discord"
                    placeholder="Usuario#0000"
                    className="bg-zinc-900 py-3 px-4 rounded text-sm placeholder:text-zinc-500"
                  />
                </div>
              </div>
              <div className="flex flex-row justify-between mt-4">
                <div className="flex flex-col gap-2">
                  <label className="font-semibold" htmlFor="weekDays">
                    Quando costuma jogar?
                  </label>
                  <div className="flex flex-wrap gap-1">
                    <button
                      title="Domingo"
                      className="w-8 h-8 rounded bg-zinc-900 "
                    >
                      D
                    </button>
                    <button
                      title="Domingo"
                      className="w-8 h-8 rounded bg-zinc-900 "
                    >
                      S
                    </button>
                    <button
                      title="Domingo"
                      className="w-8 h-8 rounded bg-zinc-900 "
                    >
                      T
                    </button>
                    <button
                      title="Domingo"
                      className="w-8 h-8 rounded bg-zinc-900 "
                    >
                      Q
                    </button>
                    <button
                      title="Domingo"
                      className="w-8 h-8 rounded bg-zinc-900 "
                    >
                      Q
                    </button>
                    <button
                      title="Domingo"
                      className="w-8 h-8 rounded bg-zinc-900 "
                    >
                      S
                    </button>
                  </div>
                </div>
                <div className="flex flex-col gap-2 w-2/4">
                  <label className="font-semibold" htmlFor="hourStart">
                    Qual horário do dia?
                  </label>
                  <div className="flex justify-between gap-2">
                    <input
                      type="time"
                      name="hourStart"
                      id="hourStart"
                      placeholder="De"
                      className="bg-zinc-900 py-3 px-4 rounded text-sm placeholder:text-zinc-500"
                    />
                    <input
                      type="time"
                      name="hourEnd"
                      id="hourEnd"
                      placeholder="Até"
                      className="bg-zinc-900 py-3 px-4 rounded text-sm placeholder:text-zinc-500"
                    />
                  </div>
                </div>
              </div>
              <div className="flex mt-6">
                <label htmlFor="useVoiceChannel" className="font-semibold">
                  <input
                    className="font-semibold"
                    type="checkbox"
                    name="useVoiceChannel"
                    id="useVoiceChannel"
                  />
                  <span className="ml-3">
                    Costumo me conectar ao chat de voz
                  </span>
                </label>
              </div>

              <div className="flex flex-row justify-end mt-8 gap-4">
                <Dialog.Close
                  type="button"
                  className="bg-zinc-500 px-5 h-12 rounded-md font-semibold hover:bg-zinc-600"
                >
                  Cancelar
                </Dialog.Close>
                <button
                  type="submit"
                  className="flex place-items-center bg-violet-500 px-5 h-12 rounded-md font-semibold gap-3 hover:bg-violet-600"
                >
                  <GameController className="" size={24} />
                  Encontrar duo
                </button>
              </div>
            </form>

            <Dialog.Close />
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </div>
  );
}
