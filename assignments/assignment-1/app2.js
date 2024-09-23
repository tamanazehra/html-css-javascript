
function addUser() {
      
    var name = document.getElementById('name').value;
    var age = document.getElementById('age').value;
    var phone = document.getElementById('phone').value;

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

     const userTableBody = document.querySelector('#userTable tbody');
     
    // Add the new row to the table
    userTableBody.appendChild(newRow);

    // Clear the input fields after adding the entry
    document.getElementById('userForm').reset();
}