// form.js
function submit() {
  window.location.href = `./result.html?id=${answerCode}`;
}

// result.js
const urlParams = new URLSearchParams(window.location.search);
const answerscode = urlParams.get('id');
// console.log(answerscode, window.location)
var newUrl = new URL(window.location.href);
var search_params = newUrl.searchParams;

// new value of "id" is set to "101"
search_params.set('id', answerscode);

// change the search property of the main url
newUrl.search = search_params.toString();

// the new url string
var final_url = newUrl.toString();
