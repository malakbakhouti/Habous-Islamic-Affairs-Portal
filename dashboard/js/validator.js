// ----- Gestion Validateur -----
function approveContent() {
    if (currentUser.role !== "validator") return;
    contents.forEach(c => {
      if (c.status === "En attente") c.status = "Validé";
    });
    renderContents();
  }
  