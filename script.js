const teamMembers = [
  {
    name: "Marco Bianchi",
    role: "Designer",
    email: "marcobianchi@team.com",
    img: "img/male1.png"
  },
  {
    name: "Laura Rossi",
    role: "Front-end Developer",
    email: "laurarossi@team.com",
    img: "img/female1.png"
  },
  {
    name: "Giorgio Verdi",
    role: "Back-end Developer",
    email: "giorgioverdi@team.com",
    img: "img/male2.png"
  },
  {
    name: "Marta Ipsum",
    role: "SEO Specialist",
    email: "martarossi@team.com",
    img: "img/female2.png"
  },
  {
    name: "Roberto Lorem",
    role: "SEO Specialist",
    email: "robertolorem@team.com",
    img: "img/male3.png"
  },
  {
    name: "Daniela Amet",
    role: "Analyst",
    email: "danielaamet@team.com",
    img: "img/female3.png"
  }
];

const containerTeamElem = document.querySelector(".row");
console.log(containerTeamElem);

//Funzione per inserimento

const renderTeam = () => {
  let items = "";
  for (let i = 0; i < teamMembers.length; i++) {
    const { name, role, email, img } = teamMembers[i];
    const card = `
    <div class="col">
                <div class="card">
                    <img src="./${img}" alt="">
                    <div class="card-text">
                        <h4>${name}</h4>
                        <p>${role}</p>
                        <a href="mailto:"">${email}</a>
                    </div>
                </div>
            </div>
    `;
    items += card;
  }
  containerTeamElem.innerHTML = items;
}

renderTeam();