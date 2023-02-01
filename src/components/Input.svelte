<script>
	export let label = '';
	export let name = '';
	export let className = '';
	export let labelClass = '';
	export let type = '';
	export let id = '';
	export let placeholder = '';
 
 
</script>
<div class="relative space-y-2">
<label class="block text-sm font-normal {labelClass}"  for="{id}" >{label}</label>
	<input type="{type}" name="{name}" class="peer block w-full rounded border-transparent text-sm font-normal text-white-100 leading-none p-4 focus:border-gray-300 focus:ring-gray-300 pr-16 ease-in-out duration-300 outline-none placeholder-white-100 {className}" id="{id}" placeholder="{placeholder}" />
</div>
	

 