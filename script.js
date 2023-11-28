function displayText() {
    // Get the value from the textbox
    let inputValue = document.getElementById("myTextbox").value;

    // Display the value on the page
    let displayArea = document.getElementById("displayArea");
    displayArea.textContent = " " + inputValue;
}