import Player from '@vimeo/player';
const throttle = require('lodash.throttle');

const iframe = document.querySelector('iframe');

    const player = new Player(iframe);
    
let currentTime = 3;
    const onPlay = function(data) {
    // data is an object containing properties specific to that event
        // console.log(data.seconds);
        // throttleTime = throttle(data.seconds, 1000);
        
        localStorage.setItem("videoplayer-current-time", data.seconds);
        const currentTime = localStorage.getItem("videoplayer-current-time");
        // console.log(currentTime);
        // console.log(throttleTime);
       
        return currentTime;
    };


player.on('timeupdate', onPlay);



console.log(currentTime);
 player.setCurrentTime(currentTime);