function performSearch() {
  const searchInput = document.getElementById("searchInput").value;

  const apiEndpoint = `https://api.tenor.com/v1/search?q=${searchInput}&key=LIVDSRZULELA&limit=4`;

  const xhr = new XMLHttpRequest();

  xhr.open("GET", apiEndpoint, true);

  xhr.send();

  xhr.onload = function () {
    const response = JSON.parse(xhr.responseText);
    displayResults(response.results);
  };
}

function displayResults(results) {
  const image1 = document.getElementById("image-1");
  const image2 = document.getElementById("image-2");
  const image3 = document.getElementById("image-3");
  const image4 = document.getElementById("image-4");

  image1.setAttribute("src", results[0].media[0].webm.preview);
  image2.setAttribute("src", results[1].media[0].webm.preview);
  image3.setAttribute("src", results[2].media[0].webm.preview);
  image4.setAttribute("src", results[3].media[0].webm.preview);
}
