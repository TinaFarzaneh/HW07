const form = document.getElementById("form");
const emailInput = document.getElementById("email");
// const contactName = document.getElementById("contact-name");

form.addEventListener("submit", checkform);
function checkform(e) {
  e.preventDefault();

  if (emailInput.value.includes("@")) {
    creatToastiFy("successfull👍", "lightgreen");
  } else {
    creatToastiFy("not successfull👎", "red");
  }
}

function creatToastiFy(text, color) {
  Toastify({
    text: text,
    duration: 3000,
    close: true,
    gravity: "top", // `top` or `bottom`
    position: "right", // `left`, `center` or `right`
    stopOnFocus: true, // Prevents dismissing of toast on hover
    style: {
      background: color,
    },
    onClick: function () {}, // Callback after click
  }).showToast();
}

function validateForm() {
  let postcode = document.forms["myForm"]["postcode"].value;
  if (postcode == null || postcode == "") {
    creatToastiFy("postcode must be filled out", "orange");
    return false;
  } else if (postcode.length < 6) {
    creatToastiFy("postcode is must be more than 6 character", "lightorange");
    return false;
  } else {
    creatToastiFy("successfull", "green");
  }
}

// function validate() {
//   let regName = /^[a-zA-Z]+ [a-zA-Z]+$/;
//   let contactName = document.getElementById("contactName").value;
//   if (!regName.test(contactName)) {
//     alert("Please enter your full name (first & last name).");
//     document.getElementById("contactName").focus();
//     return false;
//   } else {
//     alert("Valid name given.");
//     return true;
//   }
// }
