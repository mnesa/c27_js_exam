document.getElementById('login-button').addEventListener('click', function () {
  const userEmailField = document.getElementById('user-email');
  const userEmail = userEmailField.value;
  const userPasswordField = document.getElementById('password');
  const userPassword = userPasswordField.value;
  const confirmPwField = document.getElementById('confirm-pw');
  const confirmPw = confirmPwField.value;


  
  if (userEmail !== 'admin@admin.com') {
    alert('This email is not valid.');
  } else if (userPassword !== '123456')
  {
    alert('Wrong password - try again');
  } else if (confirmPw !== userPassword)
  {
    alert('Wrong password - try again.');
  } else {
    window.location.href = "cart.html";
  }

})


