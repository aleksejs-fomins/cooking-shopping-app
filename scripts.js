function readJSONFile(blob) {
    var reader = new FileReader();
    
    reader.onload = function(event) {
        text = event.target.result;
        jsonContents = JSON.parse(text)
    };

    reader.onerror = function(event) {
        console.error("File could not be read! Code " + event.target.error.code);
    };

    var file = new File(blob, { type: 'plain/text' });
    reader.readAsText(file);
}

let jsonContents
let shoppingItems
let recipes

document.getElementById("jsonFileInput").addEventListener("change", (e) => {
    readJSONFile(e.target.files);
})

document.getElementById("itemsButton").addEventListener("click", (e) => {
    shoppingItems = jsonContents.items
    console.log(shoppingItems)
})

document.getElementById("recipesButton").addEventListener("click", (e) => {
    recipes = jsonContents.recipes
    console.log(recipes)
})
