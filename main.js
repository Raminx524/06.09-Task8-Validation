let employee = {
}
var counter = 0;
let seconds = 31;
let intervalID;
function validateForm() {
  var fNameUpper = fNameInput.value.toUpperCase();
  var fNameValid = fNameInput.value[0] == fNameUpper[0];
  var lNameValid = lNameInput.value.length <= 20;
  var dobValid = new Date().getFullYear() - +dobInput.value.substr(0, 4) > 16 && new Date().getFullYear() - +dobInput.value.substr(0, 4) < 65;
  var emailValid = (emailInput.value.lastIndexOf(".com") == emailInput.value.length - 4 && emailInput.value.length > 7) ||
    (emailInput.value.lastIndexOf(".co.il") == emailInput.value.length - 6 && emailInput.value.length > 7);
  var phoneValid = phoneInput.value.length == 10 && phoneInput.value[0] == "0";
  if (fNameValid && lNameValid && dobValid && emailValid && phoneValid) {
    employee.fName = fNameInput.value;
    employee.lName = lNameInput.value;
    employee.dob = dobInput.value;
    employee.email = emailInput.value;
    employee.phone = phoneInput.value;
    employee.role = roleInput.value;
    counter = 0;
    return true;
  }
  if (!fNameValid) {
    fNameLbl.innerHTML = `First Name: <span style="color: red">Name must start with capital letter!</span>`;
  }
  if (!lNameValid) {
    lNameLbl.innerHTML = `Last Name: <span style="color: red">Last name must be under 20 characters!</span>`;
  }
  if (!dobValid) {
    dobLbl.innerHTML = `Date of birth: <span style="color: red">User must be between 16 and 65!</span>`;
  }
  if (!emailValid) {
    emailLbl.innerHTML = `Email: <span style="color: red">Email must end with ".co.il" or ".com"!</span>`;
  }
  if (!phoneValid) {
    phoneLbl.innerHTML = `Phone number: <span style="color: red">Phone number must start with "0" and be 10 characters!</span>`;
  }
  counter ++;
  if(counter == 4){
    intervalID = setInterval(standByTimer, 1000);
  }
  return false;
}
function standByTimer(){
  fNameInput.disabled = true;
    lNameInput.disabled = true;
    dobInput.disabled = true;
    emailInput.disabled = true;
    phoneInput.disabled = true;
    roleInput.disabled = true;
    submitBtn.disabled = true;
    timerContainer.innerText = `Please wait ${--seconds} seconds before trying again!`
    if(seconds == 0){
      fNameInput.disabled = false;
    lNameInput.disabled = false;
    dobInput.disabled = false;
    emailInput.disabled = false;
    phoneInput.disabled = false;
    roleInput.disabled = false;
    submitBtn.disabled = false;
    timerContainer.innerText = ``;
    counter = 0;
    seconds = 31;
      clearInterval(intervalID);
    }
}
