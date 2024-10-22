
//  This line defines a JavaScript function called addUser,
//  and in this case, the task is to add a user’s details to a table on a webpage.

        function addUser() {                                     //grabs the value entered by the user
            var name = document.getElementById('name').value;    //part looks for an HTML element with the ID ""
            var age = document.getElementById('age').value;      //grabs the value entered into that field,
            var phone = document.getElementById('phone').value;  //and stores it in the variable.
                                                                 
        
//We are creating a new table row (<tr>) using document.createElement(). 
 //This is how we prepare an empty row that will hold the user’s information    

            var row = document.createElement('tr');            //tr represents the table row in HTML.

//Here, we create three new table cells (<td>) to hold the name, age,
// and phone number of the user.


            var nameCell = document.createElement('td');        //td represents a table cell in HTML
            var ageCell = document.createElement('td');
            var phoneCell = document.createElement('td');


//We are setting the content (innerHTML) of the table cells to the values of the name, age, and phone
// variables that the user provided earlier. This is how the data gets displayed in each cell.

            
            nameCell.innerHTML = name;
            ageCell.innerHTML = age;
            phoneCell.innerHTML = phone;

//Now, we are adding the cells (nameCell, ageCell, and phoneCell) to the row that we created earlier.
// This means we are placing the user's data into a single row of the table.
            
            row.appendChild(nameCell);
            row.appendChild(ageCell);
            row.appendChild(phoneCell);
            
//This adds the new row to an existing table on the webpage. We use getElementById to find the table
// with the ID "userTable" and then add the row we just built (with the user’s details) to that table.
            
            document.getElementById('userTable').appendChild(row);

//After adding the user’s details to the table, we clear the input fields (name, age, phone) so they are empty,
// making the form ready for the next user entry.
            
            document.getElementById('name').value = '';
            document.getElementById('age').value = '';
            document.getElementById('phone').value = '';


//When the user clicks on the name cell in the table, this part of the code will fill the input fields with 
//the name, age, and phone number of that row. This makes it easy to edit the data if needed.
             
         nameCell.onclick = function fillForm() {
                document.getElementById('name').value = name;
                document.getElementById('age').value = age;
                document.getElementById('phone').value = phone;
            };
        };
        
