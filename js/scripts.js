$(function() {
    $("#userForm").submit(function(event) {
        event.preventDefault();
        let userInput = $("#userInput").val();
        console.log('userInput', userInput);
        let inputToArray = userInput.split(' ');
        console.log('inputToArray', inputToArray)
        let filteredArray = inputToArray.filter(function(word) {
            if (word.length > 3) {
                return word;
            } 
        })
        console.log('filteredArray', filteredArray)
    })
});
