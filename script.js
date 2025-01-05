//your JS code here. If required.
document.addEventListener("DOMContentLoaded",()=>{
	const target = document.getElementById('level');
	let domlevel= 1;
	let curr= target;
	while(curr.parentElement){
		domlevel++;
		curr = curr.parentElement;
	}
	alert(`The level of the element is: ${domLevel}`);
})