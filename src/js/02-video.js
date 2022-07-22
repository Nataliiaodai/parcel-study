// import Player from '@vimeo/player';
// import throttle from "lodash.throttle";
//
// //const throttle = require("lodash.throttle")
// //const Vimeo = require("@vimeo/player")
//
// const SAVE_TIME_VIDEO = "videoplayer-current-time";
// //console.log(SAVE_TIME_VIDEO)
// const videoPlayer = localStorage.getItem(SAVE_TIME_VIDEO);
// //console.log(videoPlayerCurrentTime)
// const iframe = document.querySelector("#vimeo-player");
// //console.log(iframe)
//
// const player = new Player(iframe);
//
// if (videoPlayer) {
//     player.setCurrentTime(videoPlayer);
// };
// //timeupdate = event.time
// player.on("timeupdate", throttle(onTime, 1000))
//
// function onTime(event) {
//     const time = event.seconds;
//     localStorage.setItem(SAVE_TIME_VIDEO, time);
// };
//



import Player from '@vimeo/player';
import throttle from 'lodash.throttle';
import '../css/common.css';

const iframe = document.querySelector('#vimeo-player');
const player = new Player(iframe);

let saveTimeFromLocalStorage = localStorage.getItem('videoplayer-current-time');

player.on('timeupdate', throttle(setItemFromLocalStorage, 1000));

function setItemFromLocalStorage({seconds}) {
    localStorage.setItem('videoplayer-current-time', seconds);
}
player.setCurrentTime(saveTimeFromLocalStorage);




//
// const player = new Player('#vimeo-player');
// const LOCALSTORAGE_KEY = 'videoplayer-current-time';
//
// player.on('play', function() {
//     console.log('played the video!');
// });
//
// player.getVideoTitle().then(function(title) {
//     console.log('title:', title);
// });
// // player.on('timeupdate', function() {
// //     localStorage.setItem('LOCALSTORAGE_KEY', 'player.currentTime()');
// // });
//
//
//
// setCurrentTime();
// player.addEventListener('timeupdate', saveTime);
// function saveTime(evt) {
//     evt.preventDefault();
//     localStorage.setItem('LOCALSTORAGE_KEY', 'player.currentTime()');
//     setCurrentTime();
// }
//
//
// function setCurrentTime() {
//     player.value = localStorage.getItem('LOCALSTORAGE_KEY') || "";
// }
//

