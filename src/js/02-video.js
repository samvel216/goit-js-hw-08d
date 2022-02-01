const iframe = document.querySelector('iframe');
console.log('dsdsd');
const player = new Vimeo.Player(iframe);
var throttle = require('lodash.throttle');
const localfunk = (data) => {
  localStorage.setItem("videoplayer-current-time", `"${data.seconds}"`);
  console.log(data);
}
let throttleLocalfunk = throttle(localfunk, 1000);
player.on("timeupdate", throttleLocalfunk);
let videoplayerCurrentTime = localStorage.getItem("videoplayer-current-time");
let parceVideoplayerCurrentTime = JSON.parse(videoplayerCurrentTime);
let numberVideoplayerCurrentTime = Number(parceVideoplayerCurrentTime);
player.setCurrentTime(numberVideoplayerCurrentTime).then(function (seconds) {
  console.log(seconds);
})

