// ----- Données simulées -----
let users = [
    { username: "admin", email: "admin@habous.ma", password: "admin123", role: "admin" },
    { username: "creator", email: "creator1@habous.ma", password: "creator123", role: "creator" },
    { username: "validator", email: "validator@habous.ma", password: "validator123", role: "validator" }
  ];
  
  let contents = [
    { title: "Le Saint Coran - Français", creator: "creator1", status: "Validé" },
    { title: "Hadith Collection", creator: "creator1", status: "En attente" }
  ];
  
  let currentUser = null;
  