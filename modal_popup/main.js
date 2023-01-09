const openButton = document.querySelector("#ouverture");
const cancelButton = document.querySelector("#fermeture");
const dialog = document.querySelector("#modale");
let timer = 0;
let setid;

// Update button opens a modal dialog
openButton.addEventListener("click", () => {
  dialog.showModal();
  setid = setInterval(time, 1000);
});

// Form cancel button closes the dialog box
cancelButton.addEventListener("click", () => {
  dialog.close();
  clearInterval(setid);
  setid = null;
  alert("La modale est ouverte depuis " + timer + " sec.");
  timer = 0;
});
function time() {
    timer++;
}