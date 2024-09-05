let employees = [];
let idCounter = 1;

function addEmployee() {
    const name = document.getElementById('name').value;
    const profession = document.getElementById('profession').value;
    const age = document.getElementById('age').value;
    const message = document.getElementById('message');

    if (name === '' || profession === '' || age === '') {
        message.textContent = 'All fields are required.';
        message.className = 'error';
        return;
    }

    const employee = {
        id: idCounter++,
        name: name,
        profession: profession,
        age: parseInt(age)
    };

    employees.push(employee);
    displayEmployees();
    message.textContent = 'Employee added successfully.';
    message.className = 'success';
    document.getElementById('employeeForm').reset();
}

function displayEmployees() {
    const employeeList = document.getElementById('employeeList');
    employeeList.innerHTML = '';

    employees.forEach(employee => {
        const employeeDiv = document.createElement('div');
        employeeDiv.id = `employee-${employee.id}`;
        employeeDiv.innerHTML = `
            <p>ID: ${employee.id}, Name: ${employee.name}, Profession: ${employee.profession}, Age: ${employee.age}</p>
            <button onclick="deleteEmployee(${employee.id})">Delete</button>
        `;
        employeeList.appendChild(employeeDiv);
    });
}

function deleteEmployee(id) {
    employees = employees.filter(employee => employee.id !== id);
    displayEmployees();
}
