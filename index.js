fetch("https://games.roproxy.com/v1/games?universeIds=2711375305").then(data => {
    data.json().then(j => {
        // console.log(`Now playing: ${j.data[0].playing}`)
        // console.log(`Visits: ${j.data[0].visits}`);
        // console.log(`Favorites: ${j.data[0].favoritedCount}`);
        let nowPlaying = j.data[0].playing;
        nowPlaying /= 1_000;
        nowPlaying = nowPlaying.toFixed(1);
        let visits = j.data[0].visits;
        visits /= 1_000_000_000
        visits = visits.toFixed(2);
        let favs = j.data[0].favoritedCount;
        favs /= 1_000_000;
        favs = favs.toFixed(2);
        document.getElementById("currentPlayerCount").innerText = nowPlaying + "K";
        document.getElementById("totalVisits").innerText = visits + "B";
        document.getElementById("totalFavorites").innerText = favs + "M";
    })
})
