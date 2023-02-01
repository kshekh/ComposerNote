<script>
    import Icon from 'svelte-icon'
  import menu from '../assets/icons/menu.svg?raw'
  import search from '../assets/icons/search.svg?raw'
  import dots from '../assets/icons/dots.svg?raw'
  import music1 from '../assets/images/music-1.png'
  import music2 from '../assets/images/music-2.png'
  import music3 from '../assets/images/music-3.png'
  import music4 from '../assets/images/music-4.png'
  import music5 from '../assets/images/music-5.png'
  import music6 from '../assets/images/music-6.png'
  import music7 from '../assets/images/music-7.png'
  import music8 from '../assets/images/music-8.png'
  import SideNav from '../components/SideNav.svelte';
  import { slide, fly } from 'svelte/transition';
	 
  const songList = [
		{				
			heading: 'pop music',
			detail: 'Arash',
			img: music1,
			alt: 'Music'
		},	
        {				
			heading: 'peaceful piano music',
			detail: 'relaxing piano music',
			img: music2,
			alt: 'Music'
		},
        {				
			heading: 'Instrumental Guitar',
			detail: 'piano music',
			img: music3,
			alt: 'Music'
		},
        {				
			heading: 'InsAfter School',
			detail: 'Feather',
			img: music4,
			alt: 'Music'
		},
        {				
			heading: 'Canpeaceful piano music',
			detail: 'Love Aras',
			img: music5,
			alt: 'Music'
		},
        {				
			heading: 'Fragments',
			detail: 'Ed Sheeran',
			img: music6,
			alt: 'Music'
		},
        {				
			heading: 'Party Music',
			detail: 'DJ Snake',
			img: music7,
			alt: 'Music'
		},
        {				
			heading: 'Meditation Musi',
			detail: 'relaxing music',
			img: music8,
			alt: 'Music'
		},
    ]
    let sidebar = false;
  
 </script>
<SideNav bind:show={sidebar} />
 
<div class="min-w-screen min-h-screen bg-gradient-1 relative flex flex-col">
    {#if !sidebar}
    <div class="max-w-sm mx-auto w-full px-3 flex flex-1 flex-col py-5 gap-5 " transition:fly={{x: 100, opacity: 1}}>
         <!-- top section -->
         <div class=" fixed inset-x-0 top-0  bg-dark-100 z-10">
            <div class="max-w-sm mx-auto px-3 py-4 flex items-center justify-between">
            <button type="button" class="outline-none cursor-pointer" on:click={() => sidebar = !sidebar} ><Icon data={menu} class="text-white w-5" stroke="transparent" /> </button>
            <div class="flex-col cursor-pointer"><h1 class="text-xl font-medium text-white leading-none">Norewing</h1></div>
            <button type="button" class="outline-none inline-flex justify-center items-center cursor-pointer w-10 h-10 rounded-full bg-white/10 hover:bg-red ease-in-out duration-300">
                <Icon data={search} class="text-white w-4" stroke="transparent" /> 
            </button>
        </div>
        </div>
        <div class="flex-1 py-10">
           
            <!-- middle section -->
            <div class="divide-y divide-white-300/20">
                {#each songList as song}
                <div class="relative flex justify-between py-5">
                    <div class="flex gap-5 items-center">
                        <div class="relative w-16 h-16 overflow-hidden flex justify-center items-center shrink-0">
                            <img src={song.img} alt={song.alt} class="object-cover aspect-square">
                        </div>
                        <div class="space-y-2">
                            <h3 class="text-lg font-semibold text-white-100 leading-none tracking-wide">{song.heading}</h3>
                            <p class="text-sm font-light leading-none text-white-200/50">{song.detail}</p>
                        </div>
                    </div>
                    <button type="button" class="outline-none cursor-pointer"><Icon data={dots} class="text-white w-5" stroke="transparent" /> </button>
                </div>
                {/each}
                
               
            </div>
        </div>
        <!-- Bottom section here -->
        <div class="bg-gradient-4 backdrop-blur-3xl rounded-t-2xl w-full py-3 fixed inset-x-0 bottom-0 flex justify-center items-center">
            <button class="w-10 h-10 rounded-full bg-red  flex justify-center items-center">
                <span class="w-3 h-3 bg-white rounded-full "></span>
            </button>  
        </div>
    </div>
    {:else}
    <div class="max-w-sm mx-auto w-full px-3 flex flex-1 flex-col py-5 gap-5  scale-75 translate-x-1/2 border border-white-100/20 overflow-hidden rounded-xl  " transition:fly={{x: -100, opacity: 1}}>
        <!-- top section -->
        <div class=" fixed inset-x-0 top-0  bg-dark-100 z-10">
           <div class="max-w-sm mx-auto px-3 py-4 flex items-center justify-between">
           <button type="button" class="outline-none cursor-pointer" on:click={() => sidebar = !sidebar} ><Icon data={menu} class="text-white w-5" stroke="transparent" /> </button>
           <div class="flex-col cursor-pointer"><h1 class="text-xl font-medium text-white leading-none">Norewing</h1></div>
           <button type="button" class="outline-none inline-flex justify-center items-center cursor-pointer w-10 h-10 rounded-full bg-white/10 hover:bg-red ease-in-out duration-300">
               <Icon data={search} class="text-white w-4" stroke="transparent" /> 
           </button>
       </div>
       </div>
       <div class="flex-1 py-10">
          
           <!-- middle section -->
           <div class="divide-y divide-white-300/20">
               {#each songList as song}
               <div class="relative flex justify-between py-5">
                   <div class="flex gap-5 items-center">
                       <div class="relative w-16 h-16 overflow-hidden flex justify-center items-center shrink-0">
                           <img src={song.img} alt={song.alt} class="object-cover aspect-square">
                       </div>
                       <div class="space-y-2">
                           <h3 class="text-lg font-semibold text-white-100 leading-none tracking-wide">{song.heading}</h3>
                           <p class="text-sm font-light leading-none text-white-200/50">{song.detail}</p>
                       </div>
                   </div>
                   <button type="button" class="outline-none cursor-pointer"><Icon data={dots} class="text-white w-5" stroke="transparent" /> </button>
               </div>
               {/each}
               
              
           </div>
       </div>
       <!-- Bottom section here -->
       <div class="bg-gradient-4 backdrop-blur-3xl rounded-t-2xl w-full py-3 fixed inset-x-0 bottom-0 flex justify-center items-center">
           <button class="w-10 h-10 rounded-full bg-red  flex justify-center items-center">
               <span class="w-3 h-3 bg-white rounded-full "></span>
           </button>  
       </div>
   </div>
    {/if}
</div>
 

 