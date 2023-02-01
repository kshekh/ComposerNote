<script>
  import Icon from "svelte-icon";
  import arrowLeft from "../assets/icons/arrow-left.svg?raw";
  const tempsItems = [
    {number: '2/2', value:''} ,
    {number: '3/2', value:''},
    {number: '4/2', value:''},
    {number: '2/4', value:''},
    {number: '3/4', value:''},
    {number: '4/4', value:''},
    {number: '6/4', value:''},
    {number: '8/4', value:''},
    {number: '2/8', value:''},
    {number: '3/8', value:''},
    {number: '4/8', value:''},
    {number: '5/8', value:''},
    {number: '6/8', value:''},
    {number: '7/8', value:''},
    {number: '8/8', value:''},
  ]
</script>

<div class="min-w-screen min-h-screen bg-gradient-1 relative flex flex-col">
  <div class="max-w-sm mx-auto w-full px-3 flex flex-1 flex-col py-5 gap-5">
    <!-- top section -->
    <div class="flex items-center justify-center relative">
      <!-- on:click={() => show = false} -->
      <button
        type="button"
        class="outline-none cursor-pointer absolute left-0 -top-1.5 p-1"
        ><Icon data={arrowLeft} class="text-white w-5" stroke="transparent" />
      </button>
      <div class="text-center space-y-4">
        <h1 class="text-xl font-semibold text-white-100 leading-none">
          Score Settings
        </h1>
        <p
          class="font-semibold leading-sung text-white-400 text-center "
        >
          Please choose a title and subtitle.
        </p>
      </div>
    </div>
    <!-- middle section -->
    <div class="space-y-6 flex justify-center flex-1">
      <div
        class="bg-white rounded-md flex flex-wrap justify-center items-center mx-auto py-2 text-center"
      >
        <div class="space-y-1 overflow-y-auto max-h-[calc(100vh-14rem)]">
            {#each tempsItems as tempsItem}
          <button
            type="button"
            class="outline-none hover:bg-white-400 px-4 py-2 ease-in-out duration-300 text-lg font-medium text-dark-400 block w-full"
            >{tempsItem.number}</button
          >
          {/each}
           
        </div>
      </div>
    </div>
    <!-- Bottom section here -->

    <div class="relative ">
      <button
        class=" bg-white-400 w-full p-4 rounded text-center text-lg leading-none font-semibold cursor-pointer text-dark-400 duration-300 ease-in-out hover:bg-white"
        >Accept Rhythm</button
      >
    </div>
  </div>
</div>
