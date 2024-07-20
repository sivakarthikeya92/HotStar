import navbar from "./navbar.js";

let navbar_div = document.getElementById("navbar_div");
navbar_div.innerHTML=navbar();

const movies = [
    {
      name: "RRR",
      rating: 8,
      img: "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/7642/1307642-v-3d3b6c61f97e",
    },
    {
      name: "Goodluck Jerry	",
      rating: 7,
      img: "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/901/1310901-v-e9763c24f44d",
    },
    {
      name: "MSD",
      rating: 8.5,
      img: "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/old_images/vertical/MOVIE/3314/1770003314/1770003314-v",
    },
    {
      name: "Doctor Strange",
      rating: 9,
      img: "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/9948/1279948-v-cc9471178e40",
    },
    {
      name: "Ford vs Ferrari",
      rating: 8.7,
      img: "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/3150/813150-v",
    },
    {
      name: "Masaan",
      rating: 8.8,
      img: "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/old_images/vertical/MOVIE/7441/1000087441/1000087441-v",
    },
    {
      name: "The lion king",
      rating: 8.4,
      img: "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/5242/875242-v",
    },
    {
      name: "Guardians of the Galaxy Vol. 2",
      rating: 7.6,
      img: "https://m.media-amazon.com/images/M/MV5BNjM0NTc0NzItM2FlYS00YzEwLWE0YmUtNTA2ZWIzODc2OTgxXkEyXkFqcGdeQXVyNTgwNzIyNzg@._V1_SX300.jpg",
    },
  ];


  function SliderShow() {
    const arr = [
      {
        img: "https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1_5x/sources/r1/cms/prod/9119/1329119-h-ef64fcf3d1f9",
        url: "https://youtu.be/OTibJ9k1nEk?si=KQA4-6FzwdzdYaZR"
      },
      {
        img: "https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1_5x/sources/r1/cms/prod/7976/1317976-h-e672d8d911fe",
        url: "https://youtu.be/u7JsKhI2An0?si=36t8ibnzEizpYu-u"
      },
      {
        img: "https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1_5x/sources/r1/cms/prod/3064/1323064-h-dcaae091e676",
        url: "https://youtu.be/b6F7G104_ec?si=kInmYIX8R7pe_jjP"
      }
    ];
  
    let div = document.getElementById("carousel");
    let link = document.createElement("a");
    let img = document.createElement("img");
  
    link.href = arr[0].url;
    img.src = arr[0].img;
    link.appendChild(img);
    div.appendChild(link);
  
    let i = 0;
    setInterval(function () {
      if (i == 3) {
        i = 0;
      }
      img.src = arr[i].img;
      link.href = arr[i].url;
      i = i + 1;
    }, 3000);
  }
  

  SliderShow();

  setTimeout(function(){
    AppendMovies(movies)
  }, 500);

  function AppendMovies(movies){

    let loader_div = document.getElementById("loader_div");
    loader_div.innerHTML = "";

    let data_div = document.getElementById("movies");

    movies.forEach(function(element){
        const {name, img, rating } = element;

        let div = document.createElement("div");

        let p_name = document.createElement("p");
        p_name.innerText = name

        let p_rating = document.createElement("p");
        p_rating.innerText = rating

        let image = document.createElement("img");
        image.src = img

        div.append(image,p_name,p_rating);
        data_div.append(div);


    })

  }