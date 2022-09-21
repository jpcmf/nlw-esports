import { MagnifyingGlassPlus } from 'phosphor-react';

export function CreateAdBanner() {
  return (
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
  );
}
