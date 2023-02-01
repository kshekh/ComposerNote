<script>
  import { closeModal } from "svelte-modals";
  import { fade } from "svelte/transition";
  import Icon from "svelte-icon";

  import cross from "../assets/icons/cross.svg?raw";
  import Input from "../components/Input.svelte";
  // provided by <Modals />
  export let isOpen;
</script>

{#if isOpen}
  <div
    role="dialog"
    class="fixed inset-0 flex justify-center items-center max-h-full overflow-auto pointer-events-none "
    transition:fade
    on:introstart
    on:outroend
  >
    <div
      class="bg-dark-300 rounded-md w-96 max-w-full px-4 py-5 mx-auto  relative z-10 pointer-events-auto"
    >
      <div class="space-y-5">
        <div class="space-y-2 text-center">
          <h2 class="text-xl font-semibold text-white-100 leading-none">
            Do you want to save changes?
          </h2>
          <p class="font-semibold leading-sung text-white-400 text-center">
            Please choose a title and subtitle
          </p>
        </div>
		<div class="p-4rounded-md space-y-4">
		<Input
		type="text"
		id="qualification"
		label="Qualification"
		labelClass="text-dark-200"
		className="bg-dark-400"
		name="qualification"
		placeholder="Master in music"
	  />
		<Input
		type="text"
		id="caption"
		label="Caption"
		labelClass="text-dark-200"
		className="bg-dark-400"
		name="caption"
		placeholder="Caption"
	  />
	  <div class="flex gap-4 ">
		<button
		class=" bg-white-400 w-full px-4 py-3 rounded text-center text-lg leading-none font-semibold cursor-pointer text-dark-400 duration-300 ease-in-out hover:bg-white"
		  >Save</button
		>
		<button on:click={closeModal}
		class="border-2 border-white-400 text-white-400 hover:bg-white-400 w-full px-4 py-3 rounded text-center text-lg leading-none font-semibold cursor-pointer hover:text-dark-400 duration-300 ease-in-out "
		  >Close</button
		>
	  </div>
      </div>
      </div>
      <button
        on:click={closeModal}
        class="absolute top-0 -right-10 bg-white text-dark-300 flex justify-center items-center rounded-full w-8 h-8"
        ><Icon
          data={cross}
          class="w-4 "
          size="16"
          stroke="transparent"
        /></button
      >
    </div>
  </div>
{/if}

 
