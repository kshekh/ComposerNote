<script>
     import Icon from 'svelte-icon'
  import eye from '../assets/icons/eye.svg?raw'
  import eyeCut from '../assets/icons/eye-cut.svg?raw'
	export let label = '';
	export let name = '';
	export let className = '';
	export let labelClass = '';
	export let id = '';
    export let placeholder = '';
 
    let passwordView = false;
</script>
<div class="relative space-y-2">
<label class="block text-sm font-normal {labelClass}"  for="{id}" >{label}</label>
<div class="relative">
	<input type="{passwordView ? 'text' : 'password'}" name="{name}" class="peer block w-full rounded border-transparent text-sm font-normal text-white-100 leading-none p-4 focus:border-gray-300 focus:ring-gray-300 pr-16 ease-in-out duration-300 outline-none placeholder-white-100 {className}" id="{id}" placeholder="{placeholder}" />
    <button type="button" on:click="{() => passwordView = !passwordView}" class="absolute inset-y-0 w-16 right-0 flex items-center justify-center">
        {#if passwordView}
        <Icon data={eyeCut} class="text-white-100/50 w-5" stroke="transparent" /> 
        {:else}
        <Icon data={eye} class="text-white-100/50 w-5" stroke="transparent" /> 
        {/if}
    </button>
</div> 
</div>
	

 