$(function() {
  $("#userForm").submit(function(event) {
    event.preventDefault();
    //retrieve sentence entered by user, save it as userInput and remove punctuation
    let userInput = $("#userInput")
      .val()
      .replace(/[\.,-\/#!$%"\^&\*;:{}=\-_`~()@\+\?><\[\]\+]/g, "");
    //split userInput into an array of strings, using white space as the separator and save it as inputToArray
    let inputToArray = userInput.split(" ");
    //filter the array for words that are 3 or more characters in length and save it as filteredArray
    let filteredArray = inputToArray.filter(function(word) {
      if (word.length >= 3) {
        return word;
      }
    });
    //reverse the filtered array, turn it back into a string and save it as finalArray
    let finalArray = filteredArray.reverse().join(" ");
    //display finalArray in output div
    $("#output").text(finalArray);
  });
});
