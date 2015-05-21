
// creates an array called x with 3 values, all undefined
var x = Array.apply(0, Array(3));

// same as Math.max(14,3,77);
Math.max.apply(Math, [14,3,77]);

// creates an array with 3 values ([1,2,3]) by adding 1 to the index at each point in the array and replacing undefined with that sum
Array.apply(0, Array(3)).map(function(v,i){
	return i + 1;
});

// creates an array with the squared values of 1, 2, and 3
Array.apple(0, Array(3)).map(function(v,i){
	return (y + 1) * (y + 1);
});

// creates a string with the 26 letters of the alphabet
Array.apply(0, Array(26)).map(function(v,i){
	return String.fromCharCode(i + 65);
}).join('');

// creates an array with n undefined values, then loops through that array with reduce. the reduce function ignores the undefined values(v) and instead multiplies the current value(c), which is initially set to 1, with the index(i) before adding it to the previous current value
function factorial(n) {
	return Array.apply(0, Array(n)).reduce(function(c,v,i){
		return c * i + c;
	}, 1);
}

// this time the reduce function first checks to see if the index is less than 2 (and if it is, the function pushes the current index to the empty array); otherwise, it adds the values from the array at one index and two indices below the current one and pushes that sum to the array instead
function fibo(n) {
	return Array.apply(0, Array(n)).reduce(function(c,v,i){
		return c.concat((i < 2) ? i : c[i-1] + c[i-2]);
	}, [])
}

// take each entry in the array and, if the length is longer than the current longest value, sets that entry to the new longest value
function findLongest(array) {
	return array.reduce(function(longest, entry, index){
		return entry.length > longest.value.length ? {index: index, value: entry} : longest;
	}, {index: -1, value: ''});
}

// works like bubble sort? http://en.wikipedia.org/wiki/Bubble_sort
function sort(entries) {
	return Array.apply(0, Array(entries.length)).map(function(){
		return entries.splice(entries.reduce(function(max, entry, index){
			return entry > max.value ? {index: index, value: entry} : max;
		}, {value: null}).index, 1).pop();
	});
}
