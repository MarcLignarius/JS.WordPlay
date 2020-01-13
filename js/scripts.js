$(function() {
    $("#userForm").submit(function(event) {
        event.preventDefault();
        let userInput = $("#userInput").val();
        console.log('userInput', userInput);
        let userInputArray = userInput.split();
        console.log('userInputArray', userInputArray)
    })
});
