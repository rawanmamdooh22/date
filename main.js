let mybtn = document.getElementById("birth_date");
mybtn.onclick = function () {
  var today = new Date();
  var birthDate = document.getElementById("birth_datee").value;
  var age = today.getFullYear() - parseInt(birthDate);
  return (document.getElementById(
    "calculate_age"
  ).innerHTML = `you age is ${age}`);
};
