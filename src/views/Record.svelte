<script>
  import Frame from "../assets/icons/Frame.svg?url";
  import RecordCircle from "../assets/icons/record-circle.svg?url";
  import Icon from "svelte-icon";
  import arrowLeft from "../assets/icons/arrow-left.svg?raw";
</script>

<div class="min-w-screen min-h-screen bg-gradient-1 relative flex flex-col">
  <div class="max-w-sm mx-auto w-full px-3 flex flex-1 flex-col py-5 gap-5">
    <div class="flex items-center justify-center relative">
      <!-- on:click={() => show = false} -->
      <button
        type="button"
        class="outline-none cursor-pointer absolute left-0 -top-1.5 p-1"
        ><Icon data={arrowLeft} class="text-white w-5" stroke="transparent" />
      </button>
      <div class="text-center space-y-4">
        <h1 class="text-xl font-semibold text-white-100 leading-none">
          Record your idea
        </h1>
        <p class="font-semibold leading-sung text-white-400 text-center ">
          Tap the record button at rhythm of your musical idea so that aria
          capture the pulsation of your melody. (Recommended more than 4 taps)
        </p>
      </div>
    </div>

    <!-- middle section -->
    <div class="space-y-6 flex justify-center flex-1">
      <div class="relative flex flex-wrap justify-center items-center">
        <img src={Frame} alt="frame" />
        <img src={RecordCircle} alt="record circle" class="absolute " />
        <span
          class="text-2xl font-medium text-white leading-none text-center block"
          >BPM: 80</span
        >
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
