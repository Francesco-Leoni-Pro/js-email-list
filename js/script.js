const listaEmail = document.querySelector("ul");
const bottone = document.querySelector("button");
const numeroEmail = 10;

function ottieniEmail() {
  return axios.get("https://flynn.boolean.careers/exercises/api/random/mail")
    .then(function(resp) {
      return resp.data.response;
    });
}

function generaEmail() {
  listaEmail.innerHTML = "";
  for (let i = 0; i < numeroEmail; i++) {
    ottieniEmail().then(function(email) {
      const li = document.createElement("li");
      li.textContent = email;
      listaEmail.appendChild(li);
    });
  }
}

generaEmail();
bottone.addEventListener("click", generaEmail);