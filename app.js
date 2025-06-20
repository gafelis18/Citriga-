if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}
const db = firebase.firestore();
function guardarDatoColeccion(nombreColeccion, dato) {
  db.collection(nombreColeccion).add(dato)
    .then(() => alert("Guardado correctamente"))
    .catch((error) => {
      console.error("Error al guardar:", error);
      alert("Error al guardar");
    });
}