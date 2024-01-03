function addRecipe() {
    const recipeName = document.getElementById('recipe-name').value;
    const daySelect = document.getElementById('day-select');
    const selectedDay = daySelect.options[daySelect.selectedIndex].value;
  
    if (recipeName && selectedDay) {
      const mealList = document.getElementById('meal-list');
      const listItem = document.createElement('li');
      listItem.textContent = `${selectedDay}: ${recipeName}`;
      mealList.appendChild(listItem);
  
      // Clear input fields after adding recipe
      document.getElementById('recipe-name').value = '';
      daySelect.selectedIndex = 0;
    } else {
      alert('Please fill out all fields.');
    }
  }
  
  function saveMealPlan() {
    const mealList = document.getElementById('meal-list');
    const meals = mealList.querySelectorAll('li');
  
    if (meals.length === 0) {
      alert('Please add recipes to create a meal plan.');
    } else {
      // Example: You can send the meal plan data to a server or save it locally
      const savedMealPlan = [];
      meals.forEach((meal) => {
        savedMealPlan.push(meal.textContent);
      });
  
      // For demonstration purposes, log the meal plan to the console
      console.log('Saved Meal Plan:', savedMealPlan);
      alert('Meal plan saved!');
    }
  }
  