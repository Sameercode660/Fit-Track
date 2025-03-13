document.addEventListener("DOMContentLoaded", function () {
    const userForm = document.getElementById("userForm");
    const userList = document.getElementById("userList");

    // Sample Data
    let users = [
        { name: "John Doe", email: "john@example.com", role: "Member" },
        { name: "Jane Smith", email: "jane@example.com", role: "Trainer" },
    ];

    // Function to Display Users
    function renderUsers() {
        userList.innerHTML = "";
        users.forEach((user, index) => {
            userList.innerHTML += `
                <tr>
                    <td>${user.name}</td>
                    <td>${user.email}</td>
                    <td>${user.role}</td>
                    <td>
                        <button class="edit-btn" onclick="editUser(${index})">✏️ Edit</button>
                        <button class="delete-btn" onclick="deleteUser(${index})">❌ Delete</button>
                    </td>
                </tr>
            `;
        });
    }

    // Add User
    userForm.addEventListener("submit", function (e) {
        e.preventDefault();
        let newUser = {
            name: userForm.userName.value,
            email: userForm.userEmail.value,
            role: userForm.userRole.value
        };
        users.push(newUser);
        renderUsers();
        userForm.reset();
    });

    // Delete User
    window.deleteUser = function (index) {
        users.splice(index, 1);
        renderUsers();
    };

    // Initial Load
    renderUsers();
});
