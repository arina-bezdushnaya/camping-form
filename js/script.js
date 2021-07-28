const form = document.querySelector("form");
const profile = document.querySelector(".user-profile");

const userName = document.getElementById("username");
const userPassword = document.getElementById("userpassword");
const userPasswordConfirm = document.getElementById("userpasswordconfirm");
const userEmail = document.getElementById("useremail");
const passwordError = document.getElementById("passworderror");
const passwordErrorConfirm = document.getElementById("passworderrorconfirm");
const checkboxes = document.getElementsByName("lodging[]");

const profileUserName = document.getElementById("profileusername");
const profileUserEmail = document.getElementById("profileuseremail");
const profileUserLodgings = document.getElementById("profileuserlodgings");


const person = class User {
  constructor(userName, userPassword, userEmail, userPreferredLodgings) {
    this.userName = userName;
    this.userPassword = userPassword;
    this.userEmail = userEmail;
    this.userPreferredLodgings = userPreferredLodgings;
  }
}


function confirmPassword(password1, password2) {

  if(!password1) {  
    passwordError.innerHTML = "**Fill the password please!";  
    return false; 
  }

  if(password1.value.length < 8) {  
    passwordError.innerHTML = "**Password length must be atleast 8 characters";  
    return false; 
  } 

  if(password1.value.length > 15) {  
    passwordError.innerHTML = "**Password length must not exceed 15 characters";  
    return false;  
  } 

  if (password1.value.match(password2.value) != password1.value)  {
    passwordErrorConfirm.innerHTML = "**Password mismatch";
    return false;  
  }

  return true;
}


function showProfile(user) {
  profile.style.display = "block";

  const profileUserNameValue = profileUserName.appendChild(document.createElement("div"));
  profileUserNameValue.innerHTML = user.userName;
  profileUserNameValue.className = "user-profile__item";

  const profileUserEmailValue = profileUserEmail.appendChild(document.createElement("div"));
  profileUserEmailValue.innerHTML = user.userEmail;
  profileUserEmailValue.className = "user-profile__item";

  user.userPreferredLodgings.forEach(lodging => {
    const profileUserLodging = profileUserLodgings.appendChild(document.createElement("div"));
    profileUserLodging.innerHTML = lodging;
    profileUserLodging.className = "user-profile__item";
  })   
}


let newUser;
let userPreferredLodgings = [];

form.addEventListener('submit', function(event){
  event.preventDefault();

  checkboxes.forEach(checkbox => {
    if (checkbox.checked) {
      userPreferredLodgings.push(checkbox.value); 
    }
  })

  if (confirmPassword(userPassword, userPasswordConfirm)) {
    newUser = new person (userName.value, userPassword.value, userEmail.value, userPreferredLodgings);
  }

  showProfile(newUser);
  console.log(newUser);

});
