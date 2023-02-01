<script>
  import Icon from "svelte-icon";
  import redonda from "../assets/icons/redonda.svg?raw";
  import blanca from "../assets/icons/blanca.svg?raw";
  import negra from "../assets/icons/negra.svg?raw";
  import corchea from "../assets/icons/corchea.svg?raw";
  import semicorchea from "../assets/icons/semicorchea.svg?raw";
  import sostenido from "../assets/icons/sostenido.svg?raw";
  import arrowUp from "../assets/icons/arrow-up.svg?raw";
  import arrowDown from "../assets/icons/arrow-down.svg?raw";
  import list from "../assets/icons/list.svg?raw";
  import playButton from "../assets/icons/playButton.svg?raw";
  import { openModal } from 'svelte-modals'
  import Modal from '../components/EditorDrawer.svelte'
  import SaveSheet from '../components/EditorSavesheet.svelte'
  const updateCurrentFigureAndListen = (value) => {};
  export function updateOctave(octave) {}

  function handleClick() {
    openModal(Modal, { title: "Alert", message: "This is an alert" })
  }

  function handleSave() {
    openModal(SaveSheet, { title: "Alert", message: "This is an alert" })
  }


  const editorButtons = [
    {
      icon: redonda,
      value: "Redonda",
    },
    {
      icon: blanca,
      value: "Blanca",
    },
    {
      icon: negra,
      value: "Negra",
    },
    {
      icon: corchea,
      value: "Corchea",
    },
    {
      icon: semicorchea,
      value: "Semicorchea",
    },
    {
      icon: sostenido,
      value: "Sostenido",
    },
  ];
</script>

<div class="min-w-screen min-h-screen bg-gradient-1 relative flex flex-col">
  <div
    class="max-w-4xl mx-auto w-full px-3 flex flex-1 items-center justify-center py-5 gap-5"
  >
    <!-- Left side -->
    <div class="flex justify-center items-stretch space-x-6 w-full">
      <div class="flex flex-wrap space-y-2 w-24 shrink-0">
        {#each editorButtons as editorButton}
          <button
            type="button"
            on:click={() => updateCurrentFigureAndListen(editorButton.value)}
            class="w-full h-14 bg-dark-300 rounded-md flex justify-center items-center cursor-pointer hover:bg-white-400 ease-in-out duration-300 outline-none text-dark-500"
          >
            <Icon
              data={editorButton.icon}
              class="w-8 h-8"
              size="16"
              stroke="transparent"
            />
          </button>
        {/each}
      </div>
      <div class="bg-white rounded-md flex-1 p-4 relative">
        <div class="flex justify-center absolute inset-x-0  bottom-0 p-4">
          <div class="sm:w-1/2 flex justify-between ml-auto">
            <button
              class="outline-none bg-dark-600 rounded-full text-white flex justify-center items-center w-12 h-12 -translate-x-1/2 shrink-0"
            >
              <Icon data={playButton} class="w-5" stroke="transparent" />
            </button>
            <div class="flex gap-4">
              <button  on:click={handleSave}
                class="w-10 h-10 rounded-full bg-red  flex justify-center items-center"
              >
                <span class="w-3 h-3 bg-white rounded-full " />
              </button>
              <button type="button" on:click={handleClick}
                class="outline-none bg-dark-600 rounded-full text-white flex justify-center items-center w-10 h-10"
              >
                <Icon data={list} class="w-4" stroke="transparent" />
              </button>
            </div>
          </div>
        </div>
      </div>
      <div class="flex flex-col space-y-2 items-center justify-center shrink-0">
        <button
          type="button"
          on:click={() => updateOctave("up")}
          class="w-12 h-28 bg-dark-300 rounded-md flex justify-center items-center cursor-pointer hover:bg-white-400 ease-in-out duration-300 outline-none text-dark-500"
        >
          <Icon
            data={arrowUp}
            class="w-10 h-20"
            size="20"
            stroke="transparent"
          />
        </button>

        <button
          type="button"
          on:click={() => updateOctave("down")}
          class="w-12 h-28 bg-dark-300 rounded-md flex justify-center items-center cursor-pointer hover:bg-white-400 ease-in-out duration-300 outline-none text-dark-500"
        >
          <Icon
            data={arrowDown}
            class="w-10 h-20"
            size="20"
            stroke="transparent"
          />
        </button>
      </div>
    </div>
  </div>
</div>
