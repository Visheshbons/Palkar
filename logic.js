// JS file (logic.js)

// Palkar array with Palkar words
var Palkar = ["Dosko", "Prev", "Vishesh", "Amma", "Ba", "Kavad", "Gundo", "Kupothoti", "Ger", "Ger", "Piso", "Bundi", "Paai", "Hath", "Phool", "Adhum", "Adhum", "Dhivo", "Handhar", "Mato", "Nino", "Madhim", "Foon", "Uncho", "Kallo", "Somor", "Paskad", "Jukko", "Rovvo", "Thumi", "Wanti", "Hadhu", "Kayye", "Yelle", "Thelle", "Pisidi", "Kerotho", "Kobo"];
// English array with English translations
var English = ["Head", "Love", "Special", "Mum", "Father", "Door", "Stone", "Bin", "Home", "House", "Idiot", "Car", "Foot", "Hand", "Flower", "Glasses", "Mirror", "Light", "Dark", "Big", "Small", "Middle", "Sun", "Top", "Bottom", "Front", "Back", "Lot", "Little", "You", "A", "Half", "What", "This", "That", "Tail", "Do", "When"];

// Loading translations...
console.log("Loading translations...");

// // Display translations
// for (var i = 0; i < Palkar.length; i++) {
//   console.log(Palkar[i] + " means " + English[i]);
// }

console.log("No errors identified while loading the translations!");

document.addEventListener("DOMContentLoaded", function() {
    // Get the input element for translation from Palkar to English
    var EngPut = document.getElementById("PalToEng");
    // Get the element where the translation will be displayed
    var translationOutput = document.getElementById("translationOutput");

    // Function to update the translation dynamically
    function updateTranslation() {
        translationOutput.innerHTML = ""; // Clear previous translation
        var inputText = EngPut.value.trim();

        if (inputText !== "") {
            // Autocapitalize the input text (capitalize the first letter)
            var autocapitalizedText = inputText.charAt(0).toUpperCase() + inputText.slice(1);

            // Find the index of the autocapitalized input word in the Palkar array
            var index = Palkar.indexOf(autocapitalizedText);

            if (index !== -1) {
                // If found, display the corresponding English translation
                var translation = document.createElement("span");
                translation.textContent = "Translation: " + English[index];
                translation.classList.add("translated"); // Add a class for styling
                translationOutput.appendChild(translation);
            } else {
                translationOutput.textContent = "Word not found in Palkar dictionary.";
            }
        } else {
            translationOutput.textContent = "Please enter a word to translate.";
        }
    }

    if (EngPut !== null && translationOutput !== null) {
        // Add an event listener to the input element
        EngPut.addEventListener("input", updateTranslation);
    } else {
        console.error("Element not found");
    }
});







document.addEventListener("DOMContentLoaded", function() {
    // Get the input element for translation from English to Palkar
    var PalPut = document.getElementById("EngToPal");
    // Get the element where the translation will be displayed
    var transOut = document.getElementById("transOut");

    // Function to update the translation dynamically
    function pdtTrnsltn() {
        transOut.innerHTML = ""; // Clear previous translation
        var inputText = PalPut.value.trim();

        if (inputText !== "") {
            // Autocapitalize the input text (capitalize the first letter)
            var autoCapitalize = inputText.charAt(0).toUpperCase() + inputText.slice(1);

            // Find the index of the autocapitalized input word in the English array
            var index = English.indexOf(autoCapitalize);

            if (index !== -1) {
                // If found, display the corresponding Palkar translation
                var translation = document.createElement("span");
                translation.textContent = "Translation: " + Palkar[index];
                translation.classList.add("translated"); // Add a class for styling
                transOut.appendChild(translation);
            } else {
                transOut.textContent = "Word not found in English dictionary.";
            }
        } else {
            transOut.textContent = "Please enter a word to translate.";
        }
    }

    if (PalPut !== null && transOut !== null) {
        // Add an event listener to the input element
        PalPut.addEventListener("input", pdtTrnsltn);
    } else {
        console.error("Element not found");
    }
});
