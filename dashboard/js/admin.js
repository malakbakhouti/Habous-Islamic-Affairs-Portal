// ----- Gestion Admin -----
function createUser() {
    const name = document.getElementById("newUserName").value.trim();
    const email = document.getElementById("newUserEmail").value.trim();
    const role = document.getElementById("newUserRole").value;
  
    if (!name || !email) return;
  
    users.push({ username: name, email, password: "123456", role });
    document.getElementById("newUserName").value = '';
    document.getElementById("newUserEmail").value = '';
    renderUsers();
  }
  
  function renderUsers() {
    const tbody = document.getElementById("userTableBody");
    tbody.innerHTML = '';
    users.filter(u => u.role !== "admin").forEach(u => {
      const tr = document.createElement("tr");
      tr.innerHTML = `<td>${u.username}</td><td>${u.email}</td><td>${u.role}</td>
        <td>
          <button onclick="editUser('${u.username}')">Modifier</button>
          <button onclick="deleteUser('${u.username}')">Désactiver</button>
        </td>`;
      tbody.appendChild(tr);
    });
  }
  
  function editUser(username) {
    const user = users.find(u => u.username === username);
    if (user) {
      const newName = prompt("Nouveau nom utilisateur:", user.username);
      if (newName) user.username = newName;
      renderUsers();
    }
  }
  
  function deleteUser(username) {
    if (confirm("Voulez-vous désactiver cet utilisateur ?")) {
      users = users.filter(u => u.username !== username);
      renderUsers();
    }
  }
  