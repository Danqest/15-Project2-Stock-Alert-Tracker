const closeAlert = async (e) =>{
    e.preventDefault();
    const alertBody = {
        user_id: 1,
        closed_price: entryPriceEl.value,
        status: "CLOSED",
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

alertSubmitButton.addEventListener('click', closeAlert);