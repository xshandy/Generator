function displayRecipe(response) {
  let recipe = response.data.answer;

  new Typewriter("#recipe", {
    strings: response.data.answer,
    autoStart: true,
    delay: 10,
    cursor: "",
  });
}

function generateRecipe(event) {
  event.preventDefault();

  let instructionsInput = document.querySelector("#user-instructions");
  let apiKey = "04ate034e9ce8febe66dc16ff8de2o76";
  let prompt = `Generate a recipe in ${instructionsInput.value} cuisine`;
  let context =
    "easy and simple recipes. Title should be inside a <strong> element.";
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let recipeElement = document.querySelector("#recipe");
  recipeElement.classList.remove("hidden");
  recipeElement.innerHTML = "⏳ Generating the recipe. Please wait";

  axios.get(apiUrl).then(displayRecipe);
}

let recipeFormElement = document.querySelector("#recipe-generator-form");
recipeFormElement.addEventListener("submit", generateRecipe);
