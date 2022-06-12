//get all form data through submission
const tickerEl = document.querySelector('#ticker');
const entryEl = document.querySelector('#entry');
const entryPriceEl = document.querySelector('#entry-price');
const targetEl = document.querySelector('#target');
const stoplossEl = document.querySelector('#stoploss');
const currentPriceEl = document.querySelector('#current-price');
const alertSubmitButton = document.querySelector('#alert-submit')


 ///get all the alert data to table
 const getOnlineAPI  = async () => {
    const response = await fetch(`https://financialmodelingprep.com/api/v3/quote-short/AAPL?apikey=${apiKey}`);
  
    const data = await response.json();
  
    console.log(data);
  }
  getOnlineAPI();

// Get user's item from localstorage
// const user = JSON.parse(localStorage.getItem('user'));
// if(!user) {
//     alert('please login')
// // if user not logged in, redierect then to the logIn page
//     window.location.pathname = '/login'
// }

//function for submission 
const createAlert = async (e) =>{
    e.preventDefault();
    const alertBody = {
        user_id: 1,
        ticker: tickerEl.value.trim(),
        entry: entryEl.value,
        entry_price: entryPriceEl.value,
        target: targetEl.value,
        stoploss: stoplossEl.value,
        current_price: entryPriceEl.value,
        status: "OPEN",
        // profit_or_loss: eventDescription.value,
    };

    console.log(alertBody)

    // sending event details to the server using POST request
    const fetchNewEvent = await fetch('/api/alert', {
        method: 'POST',
        headers:{
            'content-type': 'application/json',
        },
        body: JSON.stringify(alertBody),
    });

    //if the submission is successful then go to the users personal page
    if(fetchNewEvent.ok){
        document.location.replace('/');
    }
    //otherwise if it doesn't work then send text notification of error
    else{
        alert(fetchNewEvent.statusText);
    }
}

//on submit button being clicked then add the details.
alertSubmitButton.addEventListener('click', createAlert);