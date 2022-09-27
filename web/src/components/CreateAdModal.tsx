import * as Dialog from '@radix-ui/react-dialog';
import * as Checkbox from '@radix-ui/react-checkbox';
import { Input } from './Form/Input';
import { Check, GameController } from 'phosphor-react';

export function CreateAdModal() {
  return (
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
            <Input
              type="text"
              name="game"
              id="game"
              placeholder="Selecione o game que deseja jogar"
            />
          </div>
          <div className="flex flex-col gap-2 mt-4">
            <label className="font-semibold" htmlFor="name">
              Seu nome (ou nickname)
            </label>
            <Input
              type="text"
              name="name"
              id="name"
              placeholder="Como te chamam dentro do game?"
            />
          </div>
          <div className="flex flex-row justify-between mt-4">
            <div className="flex flex-col gap-2">
              <label className="font-semibold" htmlFor="yearsPlaying">
                Joga há quantos anos?
              </label>
              <Input
                type="number"
                name="yearPlaying"
                id="yearPlaying"
                placeholder="Tudo bem ser ZERO"
              />
            </div>
            <div className="flex flex-col gap-2 w-2/4">
              <label className="font-semibold" htmlFor="discord">
                Qual seu Discord?
              </label>
              <Input
                type="text"
                name="discord"
                id="discord"
                placeholder="Usuario#0000"
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
              <div className="flex justify-between gap-1">
                <Input
                  type="time"
                  name="hourStart"
                  id="hourStart"
                  placeholder="De"
                />

                <Input
                  type="time"
                  name="hourEnd"
                  id="hourEnd"
                  placeholder="Até"
                />
              </div>
            </div>
          </div>
          <div className="flex mt-6 font-semibold items-center">
            <Checkbox.Root className="w-6 h-6 p-1 rounded bg-zinc-900 mr-3">
              <Checkbox.CheckboxIndicator spellCheck={true}>
                <Check className="w-4 h-4 text-emerald-400" />
              </Checkbox.CheckboxIndicator>
            </Checkbox.Root>
            Costumo me conectar ao chat de voz
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
  );
}
