const apiKey = '542874d5409b4319b1ce42f403391d08';
const apiUrl = `https://newsapi.org/v2/top-headlines?country=id&category=health&apiKey=${apiKey}`;

fetch(apiUrl)
  .then((response) => response.json())
  .then((data) => {
    const newsContainer = document.getElementById('news');
    data.articles.forEach((article) => {
      const newsElement = document.createElement('div');
      newsElement.innerHTML = `
        <h2>${article.title}</h2>
        <p>${article.description}</p>
        <a href="${article.url}" target="_blank">Read more</a>
      `;
      newsContainer.appendChild(newsElement);
    });
  })
  .catch((error) => console.error(error));