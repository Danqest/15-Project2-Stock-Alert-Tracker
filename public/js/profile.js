//get all the alert data to table
const getAllAlert = async () => {
  const response = await fetch("/api/alert");

  const data = await response.json();
  const userIdProfile = data.filter(e => e.userId === data.user_id)

  // console.log(data);

  userIdProfile.forEach(e => {
    // console.log(e.user_id)
    fetch(`/api/alert/${e.id}`)
        .then(response => response.json())
        .then(data => {
            console.log(data)
        })
})
}
getAllAlert();