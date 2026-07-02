// ----- Fonctions communes -----
function showHome() {
    document.getElementById("homePage").classList.remove("hidden");
    document.getElementById("loginPage").classList.add("hidden");
    document.getElementById("adminDashboard").classList.add("hidden");
    document.getElementById("creatorDashboard").classList.add("hidden");
    document.getElementById("validatorDashboard").classList.add("hidden");
  }
  
  function showLogin() {
    document.getElementById("loginPage").classList.remove("hidden");
    document.getElementById("homePage").classList.add("hidden");
  }
  
  function login() {
    const username = document.getElementById("username").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();
  
    const user = users.find(u => u.username === username && u.email === email && u.password === password);
    const msgDiv = document.getElementById("loginMessage");
  
    if (!user) {
      msgDiv.textContent = "Utilisateur ou mot de passe incorrect";
      msgDiv.style.color = "red";
      return;
    }
  
    currentUser = user;
    msgDiv.textContent = `Bienvenue ${user.username} (${user.role})`;
    msgDiv.style.color = "green";
    document.getElementById("loginPage").classList.add("hidden");
  
    // Afficher le dashboard selon le rôle
    switch(user.role) {
      case "admin":
        document.getElementById("adminDashboard").classList.remove("hidden");
        renderUsers();
        break;
      case "creator":
        document.getElementById("creatorDashboard").classList.remove("hidden");
        renderContents();
        break;
      case "validator":
        document.getElementById("validatorDashboard").classList.remove("hidden");
        renderContents();
        break;
    }
  }
  
  function logout() {
    currentUser = null;
    showHome();
  }
  