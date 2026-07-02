// ----- Gestion Créateur -----
function createContent() {
    const title = document.getElementById("newContent").value.trim();
    if (!title) return;
  
    const existing = contents.find(c => c.title === title && c.creator === currentUser.username);
    if (existing) existing.title = title;
    else contents.push({ title, creator: currentUser.username, status: "En attente" });
  
    document.getElementById("newContent").value = '';
    renderContents();
  }
  
  function renderContents() {
    const tbody = document.getElementById("contentTableBody");
    tbody.innerHTML = '';
    contents.forEach(c => {
      const tr = document.createElement("tr");
      tr.innerHTML = `<td>${c.title}</td><td>${c.creator}</td><td>${c.status}</td>
        <td>
          <button onclick="editContent('${c.title}')">Modifier</button>
          <button onclick="archiveContent('${c.title}')">Archiver</button>
        </td>`;
      tbody.appendChild(tr);
    });
  }
  
  function editContent(title) {
    const c = contents.find(c => c.title === title);
    if (c) {
      const newTitle = prompt("Modifier le titre:", c.title);
      if (newTitle) c.title = newTitle;
      renderContents();
    }
  }
  
  function archiveContent(title) {
    if (confirm("Archiver ce contenu ?")) {
      contents = contents.filter(c => c.title !== title);
      renderContents();
    }
  }
  