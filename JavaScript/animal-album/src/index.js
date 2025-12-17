const API_URL = "https://animal-api-two.vercel.app/";

const $content = document.querySelector("div.content");
let template = [];

const getData = async () => {
  let res = await fetch(API_URL);
  try {
    if (res) {
      let data = await res.json();
      data.photos.forEach((elm) => {
        template.push(`<img src="${elm.url}" alt="${elm.title}">`);
      });
      $content.innerHTML = template.join(" ");
    }
  } catch (err) {
    console.log(err);
  }
};

getData();
