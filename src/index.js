import "./styles.css";

const inputToFindShow = document.querySelector("#input-show");
const buttonToSubmitSearch = document.querySelector("#submit-data");
const containerForShows = document.querySelector("#container");

buttonToSubmitSearch.addEventListener("click", async (e) => {
  e.preventDefault();

  const baseUrl = "https://api.tvmaze.com/search/shows?q=";
  const searchTerm = inputToFindShow.value;

  const findShowPromise = await fetch(`${baseUrl}${searchTerm}`);
  const shows = await findShowPromise.json();


  containerForShows.innerHTML = ""

  //console.log(`${baseUrl}${searchTerm}`);
  console.log(shows);

  shows.forEach( show => {
    show = show.show
    
    const container = document.createElement("div")
    container.classList.add("show-data")

    if (show.image != null) {
      let img = document.createElement("img")
      img.src = show.image.medium
      container.appendChild(img)
    }

    let showInfoDataSectionDiv = document.createElement("div")
    showInfoDataSectionDiv.classList.add("show-info")
    let title = document.createElement("h1")
    title.innerText = show.name
    showInfoDataSectionDiv.appendChild(title)
    let summary = document.createElement("p")
    summary.innerHTML = show.summary
    showInfoDataSectionDiv.appendChild(summary)
    container.appendChild(showInfoDataSectionDiv)

    containerForShows.appendChild(container)
  })
});

/*
<div class="show-data"> 
    <img src="[show image medium]"> show.image.medium
    <div class="show-info"> 
        <h1>[Show title]</h1>     show.name
        <p>[Show summary]</p>     show.summary
    </div> 
</div> 
*/