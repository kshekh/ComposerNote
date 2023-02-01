<script>
  import Icon from "svelte-icon";
  import arrowLeft from "../assets/icons/arrow-left.svg?raw";
  import grid from "../assets/icons/grid.svg?raw";
  import logout from "../assets/icons/logout.svg?raw";
  import userAvtar from "../assets/images/lorem-face-590.jpg";
  import { fly } from 'svelte/transition';
  export let show = true;
  const menuItems = [
		{				
			heading: 'Menu',
            icon: grid,
			 
		},	
		{				
			heading: 'Logout',
            icon: logout,
			 
		},	
    
    ]
    
</script>

<!-- max-w-sm mx-auto px-3 py-4 --> 
{#if show}
<div class="fixed inset-0 z-50" transition:fly={{x: -100, opacity: 1}} >
  <div class="w-60 mr-auto  px-3 flex flex-1 flex-col py-5 gap-5"  >
    <div class=" flex items-center justify-between">
      <button type="button" on:click={() => show = false} class="outline-none cursor-pointer -top-1.5 p-1 relative"
        ><Icon data={arrowLeft} class="text-white w-5" stroke="transparent" />
      </button>
      <div class="flex-col cursor-pointer">
        <h1 class="text-xl font-medium text-white leading-none">Norewing</h1>
      </div>
    </div>
    <div class="space-y-10">
      <div class="bg-white-100/10 px-3 py-1.5 flex justify-between">
        <div class="flex gap-3 items-center">
          <div
            class="relative w-14 h-14 overflow-hidden flex justify-center items-center rounded-full shrink-0"
          >
            <img
              src={userAvtar}
              alt="user"
              class="object-cover aspect-square"
            />
          </div>
          <div class="space-y-2">
            <h3
              class="font-semibold text-white-100 leading-none tracking-wide"
            >
              Sara John
            </h3>
            <p class="text-sm font-light leading-none text-white-200">
              ID1235
            </p>
          </div>
        </div>
        <button type="button" class="outline-none cursor-pointer">
          <Icon
            data={arrowLeft}
            class="text-white w-2 rotate-180 shrink-0"
            stroke="transparent"
          />
        </button>
      </div>
      <div class="space-y-3">
        {#each menuItems as menuItem}
        <a
          href="/#"
          class="flex gap-3 items-center px-3 py-2 hover:bg-white-400 text-white-400 hover:text-dark-400 ease-in-out duration-300"
        >
          <Icon data={menuItem.icon} class="w-5" stroke="transparent" />
          <span>{menuItem.heading}</span>
        </a>
        {/each}
      </div>
    </div>
  </div>
</div>
  {/if}
 
