var header = document.querySelector('header')
var images = [
    "url('https://c.pxhere.com/photos/d8/27/huangshan_winter_a_surname_mist_foggy_road_mountain-1170697.jpg!d')",
    "url('https://papers.co/wallpaper/papers.co-mo14-mountain-peace-white-sky-nature-29-wallpaper.jpg')",
    "url('https://papers.co/wallpaper/papers.co-nb14-snow-ski-winter-play-mountain-sunny-bokeh-flare-dark-bw-29-wallpaper.jpg')",
    "url('https://papers.co/wallpaper/papers.co-mt75-city-in-fog-cloud-nature-sky-flare-dark-bw-29-wallpaper.jpg')",
    "url('https://papers.co/wallpaper/papers.co-mx52-iceland-white-nature-snow-winter-mountain-29-wallpaper.jpg')",
    "url('https://c0.wallpaperflare.com/preview/801/76/882/mountains-mountain-sky-cloud.jpg')",
]



setInterval( function () {
    var bg = images[Math.floor(Math.random() * images.length)];

    header.style.backgroundImage= bg;

},3000)