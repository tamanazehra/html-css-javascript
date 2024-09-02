
document.addEventListener('DOMContentLoaded', function() {
    const showButton = document.getElementById('showButton');
    const daysList = document.getElementById('daysList');
    const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    // Function to show the days of the week
    function showDays() {
    
        daysOfWeek.forEach(day => {
            const listItem = document.createElement('li');
            listItem.textContent = day;
            daysList.appendChild(listItem);
        });

        // Remove the hidden class to display the box
        document.getElementById('daysBox').classList.remove('hidden');

        // Disable the button after showing the days
        showButton.disabled = true;
    }

    // Add event listener to the "Show" button
    showButton.addEventListener('click', showDays);
});
