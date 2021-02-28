const botonSwitch = document.querySelector("#switch");

botonSwitch.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  botonSwitch.classList.toggle("active");

  //Guardar el modo el localstorage
  if (document.body.classList.contains("dark")) {
    localStorage.setItem("dark-mode", "true");
  } else {
    localStorage.setItem("dark-mode", "false");
  }
});

//Obtener el modo actual
if (localStorage.getItem("dark-mode") === "true") {
  document.body.classList.add("dark");
  botonSwitch.classList.add("active");
} else {
  document.body.classList.remove("dark");
  botonSwitch.classList.remove("active");
}
