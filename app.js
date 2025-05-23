// Redirige al login si no hay usuario autenticado
firebase.auth().onAuthStateChanged((user) => {
  if (!user) {
    window.location.href = "index.html";
  }
});
