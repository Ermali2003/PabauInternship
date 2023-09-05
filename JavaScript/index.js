document.addEventListener("DOMContentLoaded", function () {
  const checkboxForm = document.getElementById("checkboxForm");
  const shuffleButton = document.getElementById("shuffleButton");
  const changeButton = document.getElementById("changeButton");
  const showSelectedButton = document.getElementById("showSelectedButton");
  const selectedValues = document.getElementById("selectedValues");

  // Function to shuffle the order of checkboxes and labels
  shuffleButton.addEventListener("click", function (e) {
    e.preventDefault();
    const checkboxContainer = document.getElementById("checkboxContainer");
    const checkboxItems = Array.from(
      checkboxContainer.querySelectorAll(".checkboxItem")
    );

    // Shuffle the array of checkbox items
    for (let i = checkboxItems.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      checkboxContainer.insertBefore(
        checkboxItems[j],
        checkboxItems[i].nextSibling
      );
    }
  });

  // Function to change the values of checkboxes
  changeButton.addEventListener("click", function (e) {
    e.preventDefault();
    const checkboxes = Array.from(
      checkboxForm.querySelectorAll('input[type="checkbox"]')
    );
    checkboxes.forEach((checkbox, index) => {
      checkbox.value = `NewValue${index + 1}`;
    });
  });

  // Function to display selected checkboxes
  showSelectedButton.addEventListener("click", function (e) {
    e.preventDefault();
    const selectedCheckboxes = Array.from(
      checkboxForm.querySelectorAll('input[type="checkbox"]:checked')
    );
    const selectedValuesText = selectedCheckboxes
      .map((checkbox) => checkbox.value)
      .join(", ");
    selectedValues.textContent = `Selected Values: ${selectedValuesText}`;
  });
});
