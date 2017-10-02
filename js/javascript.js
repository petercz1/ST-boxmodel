console.log('loaded js!');

var words = ['and', 'be', 'this'];
var answer1 = findLongestWord(words);

var myResultsTag = document.querySelector('#results');
myResultsTag.innerHTML = answer1; // place your function output here!

function findLongestWord(incoming_array) {
  // write code in here!
  var biggest_length_so_far = 0;
  console.log('biggest length start at: ' + biggest_length_so_far);

  for (var counter = 0; counter < incoming_array.length; counter++) {
    console.log('biggest_length_so_far: ' + biggest_length_so_far);

    var word = incoming_array[counter];
    console.log('new word length: ' + word.length);

    if (word.length > biggest_length_so_far) {
      console.log('if-statement triggered!');
      // do what?
      biggest_length_so_far = word.length;
    }

    console.log('new value of biggest_length_so_far: ' + biggest_length_so_far);

  }
  return biggest_length_so_far;
}