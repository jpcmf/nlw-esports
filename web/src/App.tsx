import './styles/main.css';
import logoImage from './assets/logo-nlw-e.svg';
import { MagnifyingGlassPlus } from 'phosphor-react';

export default function App() {
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
        <a href="" className="relative rounded-lg overflow-hidden">
          <img src="/image 1.png" alt="image" />
          <div className="w-full pt-16 pb-4 px-4 bg-landing-card-gradient absolute bottom-0 left-0 right-0">
            <strong className="block font-bold text-white">
              League of Legends
            </strong>
            <span className="block text-small text-zinc-300">4 anúncios</span>
          </div>
        </a>
        <a href="" className="relative rounded-lg overflow-hidden">
          <img src="/image 2.png" alt="image" />
          <div className="w-full pt-16 pb-4 px-4 bg-landing-card-gradient absolute bottom-0 left-0 right-0">
            <strong className="block font-bold text-white">Dota 2 </strong>
            <span className="block text-small text-zinc-300">4 anúncios</span>
          </div>
        </a>
        <a href="" className="relative rounded-lg overflow-hidden">
          <img src="/image 3.png" alt="image" />
          <div className="w-full pt-16 pb-4 px-4 bg-landing-card-gradient absolute bottom-0 left-0 right-0">
            <strong className="block font-bold text-white">
              Counter Strike
            </strong>
            <span className="block text-small text-zinc-300">4 anúncios</span>
          </div>
        </a>
        <a href="" className="relative rounded-lg overflow-hidden">
          <img src="/image 4.png" alt="image" />
          <div className="w-full pt-16 pb-4 px-4 bg-landing-card-gradient absolute bottom-0 left-0 right-0">
            <strong className="block font-bold text-white">Apex Legends</strong>
            <span className="block text-small text-zinc-300">4 anúncios</span>
          </div>
        </a>
        <a href="" className="relative rounded-lg overflow-hidden">
          <img src="/image 5.png" alt="image" />
          <div className="w-full pt-16 pb-4 px-4 bg-landing-card-gradient absolute bottom-0 left-0 right-0">
            <strong className="block font-bold text-white">Fortnite</strong>
            <span className="block text-small text-zinc-300">4 anúncios</span>
          </div>
        </a>
        <a href="" className="relative rounded-lg overflow-hidden">
          <img src="/image 6.png" alt="image" />
          <div className="w-full pt-16 pb-4 px-4 bg-landing-card-gradient absolute bottom-0 left-0 right-0">
            <strong className="block font-bold text-white">
              World of Warcraft
            </strong>
            <span className="block text-small text-zinc-300">4 anúncios</span>
          </div>
        </a>
      </div>
      <div className="pt-1 bg-landing-gradient self-stretch rounded-lg mt-8">
        <div className="bg-[#2A2634] px-8 py-6 rounded-lg">
          <div className="flex justify-between">
            <div className="flex flex-col">
              <span className="text-white font-black text-2xl">
                Não encontrou seu duo?
              </span>
              <span className="text-zinc-400 mt-1">
                Publique um anúncio para encontrar novos players!
              </span>
            </div>
            <button className="py-3 px-4 bg-violet-500 text-white rounded-md hover:bg-violet-600 flex items-center gap-3">
              <MagnifyingGlassPlus size={24} />
              Publicar anúncio
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
