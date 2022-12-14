const getRankings = async () => {
  console.log("scraper");
  try {
    const res = await fetch('http://127.0.0.1:3000/mma-rankings')
    const data = await res.json();

    console.log(data);

    const fighterNames = document.querySelectorAll(".leaderboard__name");
    

    for (let i = 0; i < fighterNames.length; i++) {
        fighterNames[i].innerHTML = data[i];
    }
  } catch (error) {
    console.log("Can't connect to the API.");
  }
};

getRankings();
