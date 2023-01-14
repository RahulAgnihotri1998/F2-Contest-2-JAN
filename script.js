let employeeList = [];
let employeeId = 1;

// Add Employee button click event
document.getElementById("addEmployeeBtn").addEventListener("click", function() {
    // Get form input values
    let name = document.getElementById("name").value;
    let profession = document.getElementById("profession").value;
    let age = document.getElementById("age").value;

    // Check if all fields are filled
    if (name === "" || profession === "" || age === "") {
        document.getElementById("error").innerHTML = "All fields are required";
        document.getElementById("success").innerHTML = "";
    } else {
        // Create employee object
        let employee = {
            id: employeeId,
            name: name,
            profession: profession,
            age: age
        };

        // Add employee object to array
        employeeList.push(employee);

        // Clear form input values
        document.getElementById("name").value = "";
        document.getElementById("profession").value = "";
        document.getElementById("age").value = "";

        // Show success message
        document.getElementById("success").innerHTML = "Employee added successfully";
        document.getElementById("error").innerHTML = "";

        // Update employee table
        updateEmployeeTable();

        // Increment employee ID
        employeeId++;
    }
});

// Function to update employee table
function updateEmployeeTable() {
    let employeeTable = document.getElementById("employeeList");
    employeeTable.innerHTML = "";
    for (let i = 0; i < employeeList.length; i++) {
        let employee = employeeList[i];
        let row = document.createElement("tr");
        let idCell = document.createElement("td");
        let nameCell = document.createElement("td");
        let professionCell = document.createElement("td");
        let ageCell = document.createElement("td");
        let actionsCell = document.createElement("td");

        idCell.innerHTML = employee.id;
        nameCell.innerHTML = employee.name;
        professionCell.innerHTML = employee.profession;
        ageCell.innerHTML = employee.age;

        
        // Create delete button
  
        let deleteBtn = document.createElement("button");
deleteBtn.innerHTML = "Delete";
deleteBtn.setAttribute("data-id", employee.id);
deleteBtn.addEventListener("click", function() {
    let employeeId = this.getAttribute("data-id");
    for (let j = 0; j < employeeList.length; j++) {
        if (employeeList[j].id == employeeId) {
            employeeList.splice(j, 1);
            employeeId--;
            updateEmployeeTable();
            break;
        }
    }
});

        actionsCell.appendChild(deleteBtn);

        row.appendChild(idCell);
        row.appendChild(nameCell);
        row.appendChild(professionCell);
        row.appendChild(ageCell);
        row.appendChild(actionsCell);

        employeeTable.appendChild(row);
    }
}