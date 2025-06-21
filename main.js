const APIKey = "d3e4ec6d6e8544ce97785aff7e44b8f0";
const input = document.querySelector(".input");
const button = document.querySelector(".button");
const newsCard = document.querySelector(".news__card");
const news = document.querySelector(".cards");
button.addEventListener("click", () => {
    if(input.value == 0) {
        alert("u are an idiot")
    } else {
        fetch(
          `https://newsapi.org/v2/everything?q=${input.value}&sortBy=popularity&apiKey=${APIKey}`,
          {
            method: "GET",
          }
        )
          .then((Response) => {
            if (!Response.ok) {
              console.log("something is wrong");
            }
            return Response.json();
          })
          .then((data) => {
            console.log(data);
            while(news.firstChild) {
                news.removeChild(news.firstChild);
            }
            if (data.articles == "") {
                alert("No articles found")
            }
            data.articles.forEach(element => {
                const card = document.createElement("div");
                card.classList.add("news__card")
                card.innerHTML = `
                    <div class="news__text">
                        <a href="${element.url}" class="title">${element.description}</a> <br>
                        <a href="${element.url}" class="article">${element.content}</a>
                    </div>
                    <img src="${element.urlToImage}" alt="">
                `; 
                news.appendChild(card)
            }); 
          })
          .catch((error) => {
            console.log(error);
          });
    }
})
document.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
        if (input.value == 0) {
          alert("u are an idiot");
        } else {
          fetch(
            `https://newsapi.org/v2/everything?q=${input.value}&sortBy=popularity&apiKey=${APIKey}`,
            {
              method: "GET",
            }
          )
            .then((Response) => {
              if (!Response.ok) {
                console.log("something is wrong");
              }
              return Response.json();
            })
            .then((data) => {
              console.log(data);
              while (news.firstChild) {
                news.removeChild(news.firstChild);
              }
              if (data.articles == "") {
                alert("No articles found");
              }
              data.articles.forEach((element) => {
                const card = document.createElement("div");
                card.classList.add("news__card");
                card.innerHTML = `
                        <div class="news__text">
                            <a href="${element.url}" class="title">${element.description}</a> <br>
                            <a href="${element.url}" class="article">${element.content}</a>
                        </div>
                        <img src="${element.urlToImage}" alt="">
                    `;
                news.appendChild(card);
              });
            })
            .catch((error) => {
              console.log(error);
            });
        }
    }
})

// `https://newsapi.org/v2/everything?q=${input.value}&sortBy=popularity&apiKey=${APIKey}`;