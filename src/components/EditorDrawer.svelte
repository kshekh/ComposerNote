<script>
  import { closeModal } from "svelte-modals";
  import { fade } from "svelte/transition";
  import Icon from "svelte-icon";
  import plus from "../assets/icons/plus.svg?raw";
  import sessionOut from "../assets/icons/sessionOut.svg?raw";
  import cross from "../assets/icons/cross.svg?raw";
  import CheckBox from "./CheckBox.svelte";
  // provided by <Modals />
  export let isOpen;
</script>

{#if isOpen}
  <div
    role="dialog"
    class="fixed inset-0 flex justify-center items-center max-h-full overflow-auto pointer-events-none "
    transition:fade  on:introstart on:outroend
  >
    <div class="bg-dark-300 rounded-md w-96 max-w-full px-4 py-10 mx-auto  relative z-10 pointer-events-auto">
      <div class="space-y-7">
      <div class="flex gap-3 justify-center items-center">
        <CheckBox
          labelClass="relative z-10 leading-none"
          label=""
          id="Frequency"
          classes="relative cursor-pointer"
          span="w-8 h-5 bg-white-100 flex border border-white-100 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full  after:-translate-x-px peer-checked:after:border-white after:absolute after:top-[4px] after:left-[4px] after:bg-dark-400 after:border-dark-400 after:border after:rounded-full after:h-3 after:w-3 after:transition-all peer-checked:after:border-transparent"
        />
        <h2 class="text-xl font-normal text-white-400 text-center">
          Frequency
        </h2>
      </div>
      <hr class="border-0 h-0.5 w-full bg-gradient-5" />
    
      <div class="space-y-5 px-5">
        <button type="button" class="flex gap-2 text-white-100">
          <Icon
        data={plus}
        class="w-5"
        
        stroke="transparent"
      /><span
            class=" font-normal leading-none">Save</span
          >
        </button>
        <button type="button" class="flex gap-2 text-white-100">
          <Icon
        data={sessionOut}
        class="w-4"
         
        stroke="transparent"
      /><span
            class=" font-normal leading-none "
            >Close Session</span
          >
        </button>
      </div> 
    </div>
      <button on:click={closeModal} class="absolute top-0 -right-10 bg-white text-dark-300 flex justify-center items-center rounded-full w-8 h-8"><Icon
        data={cross}
        class="w-4 "
        size="16"
        stroke="transparent"
      /></button>
   
    </div>
  </div>
{/if}
