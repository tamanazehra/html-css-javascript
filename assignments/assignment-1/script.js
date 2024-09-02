
document.addEventListener('DOMContentLoaded', function() {
    const addButton = document.getElementById('addButton');
    const userTableBody = document.querySelector('#userTable tbody');

    // Function to add a new row to the table
    function addUser() {
        // Get values from the input fields
        const name = document.getElementById('name').value.trim();
        const age = document.getElementById('age').value.trim();
        const phone = document.getElementById('phone').value.trim();

        //  If any field is empty, do not add to the table
        if (name === '' || age === '' || phone === '') {
            alert('Please fill in all fields before adding.');
            return;
        }

        // Create a new row and cells
        const newRow = document.createElement('tr');

        const nameCell = document.createElement('td');
        nameCell.textContent = name;
        newRow.appendChild(nameCell);

        const ageCell = document.createElement('td');
        ageCell.textContent = age;
        newRow.appendChild(ageCell);

        const phoneCell = document.createElement('td');
        phoneCell.textContent = phone;
        newRow.appendChild(phoneCell);

        // Add the new row to the table
        userTableBody.appendChild(newRow);

        // Clear the input fields after adding the entry
        document.getElementById('userForm').reset();
    }

    // Add event listener to the "Add" button
    addButton.addEventListener('click', addUser);
});
