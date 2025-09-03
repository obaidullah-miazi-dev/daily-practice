function calculateFare() {
  const ticketFare = 800;
  const age = parseInt(document.getElementById("age").value);
  const student = document.getElementById("student").checked;
  const name = document.getElementById("name").value.trim();
  const resultDiv = document.getElementById("result");

  if (!name || isNaN(age)) {
    resultDiv.innerHTML = "Please enter valid name and age.";
    return;
  }

  let finalFare;

  if (age < 10) {
    resultDiv.innerHTML = `Hi ${name}, your ticket is free! 🎉`;
    return;
  } else if (age >= 60) {
    finalFare = ticketFare - ticketFare * 15 / 100;
    resultDiv.innerHTML = `Hi ${name}, you get a 15% senior discount. Your fare is ${finalFare} tk.`;
  } else if (student) {
    finalFare = ticketFare - ticketFare * 50 / 100;
    resultDiv.innerHTML = `Hi ${name}, you get a 50% student discount. Your fare is ${finalFare} tk.`;
  } else {
    resultDiv.innerHTML = `Hi ${name}, your regular fare is ${ticketFare} tk.`;
  }
}
