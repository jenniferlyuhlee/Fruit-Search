const input = document.querySelector('#fruit');
const suggestions = document.querySelector('.suggestions ul');

const fruits = ['Apple 🍎', 'Apricot', 'Avocado 🥑', 'Banana 🍌', 'Bilberry', 'Blackberry', 'Blackcurrant', 'Blueberry', 'Boysenberry', 'Currant', 'Cherry 🍒', 'Coconut 🥥', 'Cranberry', 'Cucumber 🥒', 'Custard apple', 'Damson', 'Date', 'Dragonfruit', 'Durian', 'Elderberry', 'Feijoa', 'Fig', 'Gooseberry', 'Grape 🍇', 'Raisin', 'Grapefruit', 'Guava', 'Honeyberry', 'Huckleberry', 'Jabuticaba', 'Jackfruit', 'Jambul', 'Juniper berry', 'Kiwifruit 🥝', 'Kumquat', 'Lemon 🍋', 'Lime', 'Loquat', 'Longan', 'Lychee', 'Mango', 'Mangosteen', 'Marionberry', 'Melon', 'Cantaloupe 🍈', 'Honeydew', 'Watermelon 🍉', 'Miracle fruit', 'Mulberry', 'Nectarine', 'Nance', 'Olive', 'Orange 🍊', 'Clementine', 'Mandarine', 'Tangerine', 'Papaya', 'Passionfruit', 'Peach 🍑', 'Pear 🍐', 'Persimmon', 'Plantain', 'Plum', 'Pineapple 🍍', 'Pomegranate', 'Pomelo', 'Quince', 'Raspberry', 'Salmonberry', 'Rambutan', 'Redcurrant', 'Salak', 'Satsuma', 'Soursop', 'Star fruit', 'Strawberry 🍓', 'Tamarillo', 'Tamarind', 'Yuzu'];

//creates case-insensitive array of fruits that match input, when no input then empty array
function search(str) {
	let results = [];
	if (str){
		results = fruits.filter((fruit) => fruit.toLowerCase().includes(str.toLowerCase()));
	}
	return results;
}

//updates display of suggestions drop-down everytime a key is released
function searchHandler(e) {
	suggestions.innerText = null;
	const keyInput = e.target.value;
	showSuggestions(search(keyInput), keyInput);
}

//creates display of suggestions
function showSuggestions(results, inputVal) {
	results.forEach((fruit) => {
		const suggestion = document.createElement('li');
		const matchIndex = fruit.toLowerCase().indexOf(inputVal.toLowerCase());
		//if input exists in suggestions, bolds text
		if (matchIndex !== -1){
			const inputLetters = fruit.substring(matchIndex, matchIndex + inputVal.length);
			const boldLetters = fruit.replace(inputLetters, `<strong>${inputLetters}</strong>`);
			suggestion.innerHTML = boldLetters;
		}
		suggestions.append(suggestion);
	});
}

//populates input field with clicked suggestion
function useSuggestion(e) {
	input.value = e.target.innerText;
	suggestions.innerText = null;
}

input.addEventListener('keyup', searchHandler);
suggestions.addEventListener('click', useSuggestion);