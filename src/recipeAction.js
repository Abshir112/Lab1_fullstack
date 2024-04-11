const recipeData = [];

// Fetch and display recipes on load
window.onload = function() {
    fetchRecipes();
};
// Handle form submission for adding a new recipe
document.getElementById('recipeForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const recipeData = {
        title: document.getElementById('title').value,
        ingredients: document.getElementById('ingredients').value,
        instructions: document.getElementById('instructions').value,
        cookingTime: document.getElementById('cookingTime').value,
    };

    fetch('http://localhost:5000/api/recipes', { // Adjust the URL to your actual API endpoint
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(recipeData),
    })
    .then(response => response.json())
    .then(data => {
        console.log('Success:', data);
        // Directly display the newly added recipe without fetching the entire list again
        displayRecipe(data);
        // Optionally clear the form fields here if needed
       // document.getElementById('recipeForm').reset();
    })
    .catch((error) => {
        console.error('Error:', error);
    });
});


function fetchRecipes() {
    console.log('Fetching recipes...');
    fetch('http://localhost:5000/api/recipes') // Adjust the URL to your actual API endpoint
        .then(response => response.json())
        .then(recipes => {
            recipes.forEach(recipe => {
               // display recipe in a div by  the id recipeList
                recipeData.push(recipe);
                displayRecipe(recipe);
            });
        })
        .catch(error => console.error('Error fetching recipes:', error));
    
    console.log('Recipes fetched:', recipeData);
}

// // Display a recipe
// function displayRecipe(recipe) {
//     const recipeList = document.getElementById('recipeList');
//     const recipeCard = document.createElement('div');
//     recipeCard.className = "bg-white rounded-lg shadow-md overflow-hidden my-4 pr-16 relative word-wrap ";

//     recipeCard.innerHTML = `
//         <div class="p-4 relative">
//             <h3 class="text-lg font-semibold text-gray-800 ">${recipe.title}</h3>
//             <p class="text-gray-600"><span class="font-medium">Ingredients:</span> ${recipe.ingredients}</p>
//             <p class="text-gray-600"><span class="font-medium">Instructions:</span> ${recipe.instructions}</p>
//             <p class="text-gray-600"><span class="font-medium">Cooking Time:</span> ${recipe.cookingTime} minutes</p>
//         </div>
//         <div class="absolute top-0 right-0 ml-4 pt-4">
//             <button onclick="editRecipe('${recipe._id}')" class="text-blue-500  hover:text-blue-700">
//                 <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                     <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
//                 </svg>
//             </button>
//             <button onclick="deleteRecipe('${recipe._id}')" class="text-red-500  hover:text-red-700">
//                 <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                     <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1H8a1 1 0 00-1 1v3M4 7h16" />
//                 </svg>
//             </button>
//         </div>
//     `;

//     recipeList.appendChild(recipeCard);
// }

// Display a recipe in the table
function displayRecipe(recipe) {
    const recipeList = document.querySelector('.recipes-table tbody');
    const row = document.createElement('tr');
    row.innerHTML = `
        <td>${recipe.title}</td>
        <td>${recipe.ingredients}</td>
        <td>${recipe.instructions}</td>
        <td>${recipe.cookingTime} minutes</td>
        <td>
            <button onclick="editRecipe('${recipe._id}')" class="edit-button">Edit</button>
            <button onclick="deleteRecipe('${recipe._id}')" class="delete-button">Delete</button>
        </td>
    `;

    recipeList.appendChild(row);
}


async function editRecipe(recipeId) {
    try {
        console.log('Fetching recipe by ID:', recipeId);
        const response = recipeData.find(recipe => recipe._id === recipeId);
        // if (!response.ok) {
        //     throw new Error('Failed to fetch recipe');
        // }
        // const recipe = await response.json();
        console.log(response); // Ensure this is what you expect

        // Now use `recipe.title` safely after ensuring `recipe` is defined
    } catch (error) {
        console.error('Failed to fetch recipe:', error);
    }
}


// function editRecipe(recipeId) {
//     // Assuming you fetch or have the recipe details available
//     // For demonstration, let's say we have the recipe details in a variable named 'recipe'
//     const recipe = getRecipeById(recipeId);
//     console.log('Editing recipe:', recipe);
//     // Populate the form fields
//     document.getElementById('edit-id').value = recipeId;
//     document.getElementById('edit-title').value = recipe.title;
//     document.getElementById('edit-ingredients').value = recipe.ingredients;
//     document.getElementById('edit-instructions').value = recipe.instructions;
//     document.getElementById('edit-cookingTime').value = recipe.cookingTime;
    
//     // Show the modal
//     document.getElementById('editRecipeModal').classList.remove('hidden');
    
//     // Handle form submission
//     const form = document.getElementById('editRecipeForm');
//     form.onsubmit = function(e) {
//         e.preventDefault();

//         // Gather updated recipe details from form
//         const updatedRecipe = {
//             id: document.getElementById('edit-id').value,
//             title: document.getElementById('edit-title').value,
//             ingredients: document.getElementById('edit-ingredients').value,
//             instructions: document.getElementById('edit-instructions').value,
//             cookingTime: document.getElementById('edit-cookingTime').value,
//         };

//         // Send PUT request to update the recipe
//         fetch(`http://localhost:5000/api/recipes/${updatedRecipe.id}`, {
//             method: 'PUT',
//             headers: {
//                 'Content-Type': 'application/json',
//             },
//             body: JSON.stringify(updatedRecipe),
//         })
//         .then(response => response.json())
//         .then(data => {
//             console.log('Success:', data);
//             // Close the modal and refresh or update the UI
//             document.getElementById('editRecipeModal').classList.add('hidden');
//             // Refresh or update the UI accordingly
//         })
//         .catch((error) => {
//             console.error('Error:', error);
//         });
//     };
// }

function closeEditModal() {
    document.getElementById('editRecipeModal').classList.add('hidden');
}


function deleteRecipe(recipeId) {
    if (confirm('Are you sure you want to delete this recipe?')) {
        // Send DELETE request to delete the recipe
        fetch(`http://localhost:5000/api/recipes/${recipeId}`, {
            method: 'DELETE',
        })
        .then(response => {
            if (response.ok) {
                console.log('Recipe deleted successfully');
                // Optionally, remove the recipe from the UI
                // document.querySelector(`#recipeCard-${recipeId}`).remove();
            }
        })
        .catch((error) => {
            console.error('Error:', error);
        });
    }
}

// Method to get a recipe by ID
function getRecipeById(recipeId) {
    // Assuming you have a list of recipes available in a variable named 'recipes'
    // For demonstration, let's say 'recipes' is an array of recipe objects
    console.log('Fetching recipe by ID:', recipeId);
    return recipeData.find(recipe => recipe.id === recipeId);
}