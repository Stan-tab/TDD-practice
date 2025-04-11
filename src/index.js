function capitalize(str) {
	const code = str.charCodeAt(0);
	if (code <= 90) return;
	return str.replace(str.charAt(0), String.fromCharCode(code - 32));
}

function reverseString(str) {
	const arr = [];
	for (let i = 0; i < str.length; i++) {
		arr.unshift(str.charAt(i));
	}
	return arr.join('');
}

function caesarCipher(str, shift) {
	const arr = str.split('');
	for (let i = 0; i < str.length; i++) {
		if (!/[a-zA-Z]/.test(arr[i])) continue;
		const code = arr[i].charCodeAt();
		let pos;
		let gr = 91;
		let low = 65;
		if (code / 97 >= 1) {
			gr = 123;
			low = 97;
		}
		pos = (26 - (gr - code) + shift) % 26;
		arr[i] = String.fromCharCode(low + pos);
	}
	return arr.join('');
}

function analyzeArray(arr) {
	let avg = arr[0];
	let min = arr[0];
	let max = arr[0];
	for (let i = 1; i < arr.length; i++) {
		avg += arr[i];
		if (min > arr[i]) min = arr[i];
		if (max < arr[i]) max = arr[i];
	}
	return {
		average: avg / arr.length,
		min,
		max,
		length: arr.length
	};
}

module.exports = { capitalize, reverseString, caesarCipher, analyzeArray };
