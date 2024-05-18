
const getBody = document.querySelector("body")


function submitData(name, email){
const user = {
    name: name,
    email: email
}


return fetch("http://localhost:3000/users", {
    method: "POST",
    headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
      },
    body: JSON.stringify(user)
})
.then(response => response.json())
.then(data => {
    getBody.append(data.id)
    console.log(data.id)
})
.catch(error => {
    getBody.append(error.message)
    console.log(error.message)
})
}



















