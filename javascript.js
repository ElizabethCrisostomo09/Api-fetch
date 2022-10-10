

const contenidoElement = document.getElementById('contenido');

function callApi() {
  fetch("https://reqres.in/api/users?delay=2")
    .then(response => response.json())
    .then(response => {
      tabla(response.data);
      saveLocalStorage(response.data);
    })
  
}

function tabla(users) {
  let tableRowsString = "";

  users.forEach(user => {
    tableRowsString = `${tableRowsString}
      <tr class="border-dark">
        <th scope="row">${user.id}</th>
        <td><a href="${user.email}">${user.email}</a></td>
        <td>${user.first_name}</td>
        <td>${user.last_name}</td>
        <td><img src="${user.avatar}" class="figure-img img-fluid rounded-circle"/></td>
      </tr>
    `;
  });
  contenidoElement.innerHTML = `${tableRowsString}`;
}

const saveLocalStorage = data => {
  const users = {
    content: [...data],
    time: Date.now() + 60000
  }
  localStorage.setItem('content', JSON.stringify(users))
}
