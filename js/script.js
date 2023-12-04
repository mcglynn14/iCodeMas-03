document.addEventListener("DOMContentLoaded", function () {
    const emailInput = document.getElementById("emailInput");
    const placeorder = document.getElementById("place-order");
    const confirmHeading = document.getElementById("confirm-heading");
    const confirmMessage = document.getElementById("confirm-message");

    const regExpression = /^([a-zA-Z0-9\._-]+)@([a-zA-Z0-9])+.(.[a-z]+)+.(.[a-z]+)?$/;

    if (emailInput && regExpression.test(emailInput.value)) {
      confirm();
    } else {
      
    }

    function confirm() {
      placeorder.addEventListener("click", function (e) {
        e.preventDefault();

        emailInput.classList.add("hidden");
        placeorder.classList.add("hidden");
        document.getElementById("decline").classList.add("hidden");

        confirmHeading.classList.remove("hidden");
        confirmMessage.classList.remove("hidden");
      });
    }
  });