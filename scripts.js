const day = document.getElementById("day");
const month = document.getElementById("month");
const year = document.getElementById("year");
const error = document.querySelectorAll(".error");
const errorDay = document.querySelector(".error-day");
const errorMonth = document.querySelector(".error-month");
const errorYear = document.querySelector(".error-year");
const yearsR = document.querySelector(".years-r");
const monthsR = document.querySelector(".months-r");
const daysR = document.querySelector(".days-r");

const form = document.querySelector(".form");

form.addEventListener("submit", () => {
  // on gère d'abord les validations du formulaire
  const date = [day.value, month.value, year.value];
  for (let i = 0; i < date.length; i++) {
    // si le champ n'est pas rempli
    if (date[i] === "") {
      error[i].textContent = "This field is required";
      form.style.paddingBottom = "32px";
    }
  }
  // si la valeur saisie est fausse (ex: jour 32)
  if (day.value > 31) {
    errorDay.textContent = "Must be a valid day";
  }
  if (month.value > 12) {
    errorMonth.textContent = "Must be a valid month";
  }
  const today = new Date();
  if (year.value > today.getFullYear()) {
    errorYear.textContent = "Must be a valid year";
  }
  // si la date saisie n'existe pas (mois pairs et impairs)
  if (month.value % 2 == 0) {
    if (day.value > 30) {
      errorDay.textContent = "Must be a valid date";
    }
  }

  //   Si tout est Ok
  const currentYear = today.getFullYear();
  const currentMonth = today.getMonth() + 1;
  const currentDay = today.getDate();
  // affichage de l'age
  //   année
  yearsR.textContent = currentYear - year.value;
  //   mois
  monthsR.textContent = currentMonth - month.value;
  //   jours
  daysR.textContent = currentDay - day.value;

  //   corrections
  if (currentMonth - month.value < 0) {
    yearsR.textContent = currentYear - year.value - 1;
    monthsR.textContent = 12 + currentMonth - month.value;
  }
  if (currentDay - day.value < 0) {
    monthsR.textContent = currentMonth - month.value - 1;
    daysR.textContent = currentDay + currentDay - day.value;
  }
});
