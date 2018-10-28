// Batch mute words on twitter
// Run in Chrome console when visiting: https://twitter.com/settings/muted_keywords
var time = 500;
$.each(array, function(key,valueObj){
	setTimeout(function() {
    	$('#mute-settings > div > button').click();
    }, time);
	time += 500;
	setTimeout(function() {
    	$('div > div.rich-editor.is-plainText.is-singleLine > div').text(valueObj);
    }, time);
	time += 500;
	setTimeout(function() {
    	$('div > div.rich-editor.is-plainText.is-singleLine').focus();
    }, time);
	time += 500;
	setTimeout(function() {
    	$('div.MutedKeywordsAddItemForm-row > button').click();
    }, time);
	time += 500;
});

// Restore console.log on twitter.com
var i = document.createElement('iframe');
i.style.display = 'none';
document.body.appendChild(i);
window.console = i.contentWindow.console;

// Scrape twitter account ids to array from a list
// e.g. https://twitter.com/twittergov/lists/us-cabinet
var allPoliticians = $('.stream-item[data-item-type=user]').map( function () {
	return $(this).attr('data-item-id')
}).get();

// Save an array to .csv
let csvContent = "data:text/csv;charset=utf-8,";
allPoliticians.forEach(function(row){
   csvContent += row + "\r\n";
});
var encodedUri = encodeURI(csvContent);
var link = document.createElement("a");
link.setAttribute("href", encodedUri);
link.setAttribute("download", "my_data.csv");
document.body.appendChild(link); // Required for FF
link.click(); // This will download the data file named "my_data.csv".



https://ballotpedia.org/List_of_current_members_of_the_U.S._Congress
