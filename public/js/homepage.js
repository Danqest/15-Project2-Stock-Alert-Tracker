const profileBtn = document.querySelector('#profile')
const loginBtn = document.querySelector('#login')
const logOutButton = document.querySelector('#log-out');
const signUpBtn = document.querySelector('#sign-up')

const user = JSON.parse(localStorage.getItem('user'))

// Get user's item from localstorage
// if(user) {
//     profileBtn.remove('hide');
//     logOutButton.remove('hide');
    
//     signUpBtn.add('hide')
//     loginBtn.add('hide')
  
//   } else {
//     profileBtn.add('hide');
//     logOutButton.add('hide');
    
//     signUpBtn.remove('hide')
//     loginBtn.remove('hide')
  
//   }


  ///get all the alert data to table
const getAllAlert = async () => {
  const response = await fetch("/api/alert");

  const data = await response.json();

  console.log(data);
}
getAllAlert();