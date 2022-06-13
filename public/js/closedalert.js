const closedButton = document.querySelector('#close-alert-submit')
const closedPriceEl = document.querySelector('#closed-price')
const closedEntryEl = document.querySelector('#closed-entry');

const closeAlert = async (e) =>{
    e.preventDefault();
    if (e.target.hasAttribute('data-id')) {
        const id = e.target.getAttribute('data-id')
    
    const alertBody = {
        // user_id: 1,
        close_entry: closedEntryEl.value,
        closed_price: closedPriceEl.value,
        status: "CLOSED",
        // profit_or_loss: eventDescription.value,
    };
    console.log(alertBody)

    // sending event details to the server using POST request
    const fetchNewEvent = await fetch(`/api/alert/${id}`, {
        method: 'PUT',
        headers:{
            'content-type': 'application/json',
        },
        body: JSON.stringify(alertBody),
    });
    document.location.replace('/');
}
}

closedButton.addEventListener('click', closeAlert);



