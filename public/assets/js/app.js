var capital = document.getElementById("capital");
var margin = document.getElementById("margin");

var customForm = document.querySelector("custom-form");

const database = firebase.database();

customForm.addEventListener("submit", (e) => {
  e.preventDefault();
  database.ref("/users/" + capital.value).set({
    capit_al: capital.value,
    marg_in: margin.value,
  });
});
