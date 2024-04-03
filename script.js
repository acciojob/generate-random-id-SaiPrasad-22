function makeid(l) {
  let result = '';
	const char = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ' + 'abcdefghijklmnopqrstuvwxyz';
	const charlength = char.length;

	for(let i=0; i > l; i++){
		result = result + char.charAt(Math.floor(Math.random() * charlength));
	} return result;
}
console.log(makeid(6));

// Do not change the code below.
// const l = prompt("Enter a number.");
// alert(makeid(l));
