let backgroundChoice = 0;
let today = new Date();
let time = parseInt(today.getHours());
let timeM = today.getMinutes();
const sideCardGreetingText = document.getElementById("sideCardGreetingSwitch");
let text;
let counter = 0;
let timeString;
let time1;
var timeMString;

function setup() {
    backgroundChoice = round(random(0, 11));
    document.getElementById("mainBackground").style.animation = "blurForwards 1.5s ease-in-out";
    document.getElementById("mainTitleSwitch").style.animation = "titleIntro 1.5s ease-in-out";
    document.getElementById("sideCardContainer").style.animation = "sideCardIntro 1.5s ease-in-out";
    document.getElementById("sideCardGreetingSwitch").style.animation = "sideCardTextIntro 1.5s ease-in-out";
    if (time < 12) {
        document.getElementById("sideCardGreetingSwitch").innerText = "Good morning, Jas.";
        document.getElementById("sideCardContainer").style.width = "11rem";
    }
    if (time < 16 && time >= 12) {
        document.getElementById("sideCardGreetingSwitch").innerText = "Good afternoon, Jas.";
        document.getElementById("sideCardContainer").style.width = "11.6rem";
    }
    if (time < 21 && time >= 16) {
        document.getElementById("sideCardGreetingSwitch").innerText = "Good evening, Jas.";
        document.getElementById("sideCardContainer").style.width = "10.7rem";
    }
    if (time < 24 && time >= 21) {
        document.getElementById("sideCardGreetingSwitch").innerText = "Good night, Jas.";
        document.getElementById("sideCardContainer").style.width = "9.5rem";
    } 


    if (backgroundChoice == 0) {
        document.getElementById("mainBackground").src = "webfolder/unblur_1.png";
        document.getElementById("mainTitleSwitch").textContent = "sage.";
    }
    if (backgroundChoice == 1) {
        document.getElementById("mainBackground").src = "webfolder/unblur_2.png";
        document.getElementById("mainTitleSwitch").textContent = "forest.";
    }
    if (backgroundChoice == 2) {
        document.getElementById("mainBackground").src = "webfolder/unblur_3.png";
        document.getElementById("mainTitleSwitch").textContent = "valley.";
    }
    if (backgroundChoice == 3) {
        document.getElementById("mainBackground").src = "webfolder/unblur_4.png";
        document.getElementById("mainTitleSwitch").textContent = "passage.";
    }
    if (backgroundChoice == 4) {
        document.getElementById("mainBackground").src = "webfolder/unblur_5.png";
        document.getElementById("mainTitleSwitch").textContent = "window.";
    }

    if (backgroundChoice == 5) {
        document.getElementById("mainBackground").src = "webfolder/unblur_6.png";
        document.getElementById("mainTitleSwitch").textContent = "ferns.";
    }
    if (backgroundChoice == 6) {
        document.getElementById("mainBackground").src = "webfolder/unblur_7.png";
        document.getElementById("mainTitleSwitch").textContent = "fuji.";
    }
    if (backgroundChoice == 7) {
        document.getElementById("mainBackground").src = "webfolder/unblur_8.png";
        document.getElementById("mainTitleSwitch").textContent = "temple.";
    }
    if (backgroundChoice == 8) {
        document.getElementById("mainBackground").src = "webfolder/unblur_9.png";
        document.getElementById("mainTitleSwitch").textContent = "hedges.";
    }
    if (backgroundChoice == 9) {
        document.getElementById("mainBackground").src = "webfolder/unblur_10.png";
        document.getElementById("mainTitleSwitch").textContent = "leaf.";
    }

    if (backgroundChoice == 10) {
        document.getElementById("mainBackground").src = "webfolder/unblur_11.png";
        document.getElementById("mainTitleSwitch").textContent = "order.";
    }
    if (backgroundChoice == 11) {
        document.getElementById("mainBackground").src = "webfolder/unblur_12.png";
        document.getElementById("mainTitleSwitch").textContent = "peak.";
    }

    
    document.getElementById("iconWeatherSwitch").style.opacity = "0%";
    document.getElementById("sideCardWeatherLocationSwitch").style.opacity = "0%";

}

function draw() {
    let today = new Date();
    let time = parseInt(today.getHours());
    let timeM = today.getMinutes();


}


var intervalId = setInterval(function () {
    fetch("https://api.open-meteo.com/v1/forecast?latitude=43.7001&longitude=-79.4163&hourly=temperature2m,precipitation_probability,precipitation,rain&current_weather=true")
        .then(response => response.json())
        .then(data => showInfo(data));

    function showInfo(data) {
        let today = new Date();
        let time = parseInt(today.getHours());
        let timeM = today.getMinutes();
        let time1;
        if (time > 12) {
            time1 = time - 12;
            timeString = "PM";
        } else {
            timeString = "AM";
            time1 = time;
        }
        if (timeM < 10) {
            timeMString = "0" + timeM;
        } else {
            timeMString = timeM;
        }
        if (time < 12) {
            if (counter == 0) {
                unfade(sideCardTimeSwitch);
                document.getElementById("sideCardWeatherLocationSwitch").style.opacity = "0%";
                document.getElementById("iconWeatherSwitch").style.opacity = "0%";
                document.getElementById("sideCardWeatherSwitch").style.animation = "sideCardExtendWeatherBackwardsGE 200ms ease-in-out";
                document.getElementById("sideCardWeatherSwitch").style.opacity = "0%";
                document.getElementById("sideCardGreetingSwitch").style.opacity = "0%";
                document.getElementById("sideCardContainer").style.animation = "sideCardExtendTimeForwardsGE 200ms ease-in-out";
                document.getElementById("sideCardContainer").style.width = "7rem";
                document.getElementById("sideCardContainer").style.height = "2rem";
                document.getElementById("sideCardContainer").style.top = "93%";
                document.getElementById("sideCardTimeSwitch").innerText = "It's " + time1 + ":" + timeMString + " " + timeString;
            }
            if (counter == 1) {
                document.getElementById("sideCardTimeSwitch").style.opacity = "0%";
                unfade(sideCardGreetingSwitch);
                document.getElementById("sideCardContainer").style.animation = "sideCardExtendTimeBackwardsGM 200ms ease-in-out";
                document.getElementById("sideCardContainer").style.width = "11rem";
                document.getElementById("sideCardContainer").style.height = "2rem";
                document.getElementById("sideCardContainer").style.top = "93%";
                document.getElementById("sideCardGreetingSwitch").style.animation = "sideCardTextSwitchFadeIn 2000ms ease-in-out";
                document.getElementById("sideCardGreetingSwitch").innerText = "Good morning, Jas.";
            }
            if (counter == 2) {
                //Day conditions*******
                //clear (0)
                //partly cloudy (1,2,3)
                //fog (45, 48)
                //rain (61 (slight), 63(moderate), 65(heavy))
                //freezing rain (66, 67)
                //snow fall (71(slight), 73, 75(heavy))
                //Night conditions*******
                //clear (0)
                //partly cloudy (1,2,3)
                //rain drizzle (61)
                document.getElementById("iconWeatherSwitch").style.opacity = "100%";
                document.getElementById("sideCardGreetingSwitch").style.opacity = "0%";
                document.getElementById("sideCardContainer").style.animation = "sideCardExtendWeatherForwardsGE 200ms ease-in-out";
                document.getElementById("sideCardContainer").style.width = "7rem";

                document.getElementById("sideCardWeatherSwitch").innerText = data.current_weather.temperature + "°C";
                document.getElementById("sideCardWeatherLocationSwitch").style.opacity = "0%";
                if (data.current_weather.is_day == 1) {//day
                    switch (data.current_weather.weathercode) {
                        case 0://clear
                            unfade(sideCardWeatherSwitch);
                            unfade(iconWeatherSwitch);
                            unfade(sideCardWeatherLocationSwitch);
                            document.getElementById("iconWeatherSwitch").src = "icons/clearwhite.png";
                            break;
                        case 1: case 2: case 3: //partly cloudy
                            unfade(sideCardWeatherSwitch);
                            unfade(iconWeatherSwitch);
                            unfade(sideCardWeatherLocationSwitch);
                            document.getElementById("iconWeatherSwitch").src = "icons/partlycloudywhite.png";
                            break;
                        case 45: case 48: //fog
                            unfade(sideCardWeatherSwitch);
                            unfade(iconWeatherSwitch);
                            unfade(sideCardWeatherLocationSwitch);
                            document.getElementById("iconWeatherSwitch").src = "icons/fogwhite.png";
                            break;
                        case 61://slight rain
                            unfade(sideCardWeatherSwitch);
                            unfade(iconWeatherSwitch);
                            unfade(sideCardWeatherLocationSwitch);
                            document.getElementById("iconWeatherSwitch").src = "icons/rainwhite.png";
                            break;
                        case 65://heavy rain
                            unfade(sideCardWeatherSwitch);
                            unfade(iconWeatherSwitch);
                            unfade(sideCardWeatherLocationSwitch);
                            document.getElementById("iconWeatherSwitch").src = "icons/heavyrainwhite.png";
                            break;
                        case 66: case 67://freezing rain
                            unfade(sideCardWeatherSwitch);
                            unfade(iconWeatherSwitch);
                            unfade(sideCardWeatherLocationSwitch);
                            document.getElementById("iconWeatherSwitch").src = "icons/freezingrainwhite.png";
                            break;
                        case 71://slight snowfall
                            unfade(sideCardWeatherSwitch);
                            unfade(iconWeatherSwitch);
                            unfade(sideCardWeatherLocationSwitch);
                            document.getElementById("iconWeatherSwitch").src = "icons/snowwhite.png";
                            break;
                        case 75://heavy snowfall
                            unfade(sideCardWeatherSwitch);
                            unfade(iconWeatherSwitch);
                            unfade(sideCardWeatherLocationSwitch);
                            document.getElementById("iconWeatherSwitch").src = "icons/heavysnowwhite.png";
                            break;
                    }
                }
                if (data.current_weather.is_day == 0) {//night
                    switch (data.current_weather.weathercode) {
                        case 0://clear 
                            unfade(sideCardWeatherSwitch);
                            unfade(iconWeatherSwitch);
                            unfade(sideCardWeatherLocationSwitch);
                            document.getElementById("iconWeatherSwitch").src = "icons/clearnightwhite.png";
                            break;
                        case 1: case 2: case 3: //partly cloudy\
                            unfade(sideCardWeatherSwitch);
                            unfade(iconWeatherSwitch);
                            unfade(sideCardWeatherLocationSwitch);
                            document.getElementById("iconWeatherSwitch").src = "icons/partlycloudynightwhite.png";
                            break;
                        case 61: //rain drizzle
                            unfade(sideCardWeatherSwitch);
                            unfade(iconWeatherSwitch);
                            unfade(sideCardWeatherLocationSwitch);
                            document.getElementById("iconWeatherSwitch").src = "icons/drizzlenightwhite.png";
                            break;
                    }
                }
            }
            counter++;
            if (counter == 3) {
                counter = 0;
            }
            console.log(counter);

        }
        if (time < 16 && time >= 12) {
            if (counter == 0) {
                unfade(sideCardTimeSwitch);
                document.getElementById("sideCardWeatherLocationSwitch").style.opacity = "0%";
                document.getElementById("iconWeatherSwitch").style.opacity = "0%";
                document.getElementById("sideCardWeatherSwitch").style.animation = "sideCardExtendWeatherBackwardsGE 200ms ease-in-out";
                document.getElementById("sideCardWeatherSwitch").style.opacity = "0%";
                document.getElementById("sideCardGreetingSwitch").style.opacity = "0%";
                document.getElementById("sideCardContainer").style.animation = "sideCardExtendTimeForwardsGE 200ms ease-in-out";
                document.getElementById("sideCardContainer").style.width = "7rem";
                document.getElementById("sideCardContainer").style.height = "2rem";
                document.getElementById("sideCardContainer").style.top = "93%";
                document.getElementById("sideCardTimeSwitch").innerText = "It's " + time1 + ":" + timeMString + " " + timeString;
            }
            if (counter == 1) {
                document.getElementById("sideCardTimeSwitch").style.opacity = "0%";
                unfade(sideCardGreetingSwitch);
                document.getElementById("sideCardContainer").style.animation = "sideCardExtendTimeBackwardsGA 200ms ease-in-out";
                document.getElementById("sideCardContainer").style.width = "11.6rem";
                document.getElementById("sideCardContainer").style.height = "2rem";
                document.getElementById("sideCardContainer").style.top = "93%";
                document.getElementById("sideCardGreetingSwitch").style.animation = "sideCardTextSwitchFadeIn 2000ms ease-in-out";
                document.getElementById("sideCardGreetingSwitch").innerText = "Good afternoon, Jas.";
            }
            if (counter == 2) {
                //Day conditions*******
                //clear (0)
                //partly cloudy (1,2,3)
                //fog (45, 48)
                //rain (61 (slight), 63(moderate), 65(heavy))
                //freezing rain (66, 67)
                //snow fall (71(slight), 73, 75(heavy))
                //Night conditions*******
                //clear (0)
                //partly cloudy (1,2,3)
                //rain drizzle (61)
                document.getElementById("iconWeatherSwitch").style.opacity = "100%";
                document.getElementById("sideCardGreetingSwitch").style.opacity = "0%";
                document.getElementById("sideCardContainer").style.animation = "sideCardExtendWeatherForwardsGE 200ms ease-in-out";
                document.getElementById("sideCardContainer").style.width = "7rem";

                document.getElementById("sideCardWeatherSwitch").innerText = data.current_weather.temperature + "°C";
                document.getElementById("sideCardWeatherLocationSwitch").style.opacity = "0%";
                if (data.current_weather.is_day == 1) {//day
                    switch (data.current_weather.weathercode) {
                        case 0://clear
                            unfade(sideCardWeatherSwitch);
                            unfade(iconWeatherSwitch);
                            unfade(sideCardWeatherLocationSwitch);
                            document.getElementById("iconWeatherSwitch").src = "icons/clearwhite.png";
                            break;
                        case 1: case 2: case 3: //partly cloudy
                            unfade(sideCardWeatherSwitch);
                            unfade(iconWeatherSwitch);
                            unfade(sideCardWeatherLocationSwitch);
                            document.getElementById("iconWeatherSwitch").src = "icons/partlycloudywhite.png";
                            break;
                        case 45: case 48: //fog
                            unfade(sideCardWeatherSwitch);
                            unfade(iconWeatherSwitch);
                            unfade(sideCardWeatherLocationSwitch);
                            document.getElementById("iconWeatherSwitch").src = "icons/fogwhite.png";
                            break;
                        case 61://slight rain
                            unfade(sideCardWeatherSwitch);
                            unfade(iconWeatherSwitch);
                            unfade(sideCardWeatherLocationSwitch);
                            document.getElementById("iconWeatherSwitch").src = "icons/rainwhite.png";
                            break;
                        case 65://heavy rain
                            unfade(sideCardWeatherSwitch);
                            unfade(iconWeatherSwitch);
                            unfade(sideCardWeatherLocationSwitch);
                            document.getElementById("iconWeatherSwitch").src = "icons/heavyrainwhite.png";
                            break;
                        case 66: case 67://freezing rain
                            unfade(sideCardWeatherSwitch);
                            unfade(iconWeatherSwitch);
                            unfade(sideCardWeatherLocationSwitch);
                            document.getElementById("iconWeatherSwitch").src = "icons/freezingrainwhite.png";
                            break;
                        case 71://slight snowfall
                            unfade(sideCardWeatherSwitch);
                            unfade(iconWeatherSwitch);
                            unfade(sideCardWeatherLocationSwitch);
                            document.getElementById("iconWeatherSwitch").src = "icons/snowwhite.png";
                            break;
                        case 75://heavy snowfall
                            unfade(sideCardWeatherSwitch);
                            unfade(iconWeatherSwitch);
                            unfade(sideCardWeatherLocationSwitch);
                            document.getElementById("iconWeatherSwitch").src = "icons/heavysnowwhite.png";
                            break;
                    }
                }
                if (data.current_weather.is_day == 0) {//night
                    switch (data.current_weather.weathercode) {
                        case 0://clear 
                            unfade(sideCardWeatherSwitch);
                            unfade(iconWeatherSwitch);
                            unfade(sideCardWeatherLocationSwitch);
                            document.getElementById("iconWeatherSwitch").src = "icons/clearnightwhite.png";
                            break;
                        case 1: case 2: case 3: //partly cloudy\
                            unfade(sideCardWeatherSwitch);
                            unfade(iconWeatherSwitch);
                            unfade(sideCardWeatherLocationSwitch);
                            document.getElementById("iconWeatherSwitch").src = "icons/partlycloudynightwhite.png";
                            break;
                        case 61: //rain drizzle
                            unfade(sideCardWeatherSwitch);
                            unfade(iconWeatherSwitch);
                            unfade(sideCardWeatherLocationSwitch);
                            document.getElementById("iconWeatherSwitch").src = "icons/drizzlenightwhite.png";
                            break;
                    }
                }
            }
            counter++;
            if (counter == 3) {
                counter = 0;
            }
            console.log(counter);
        }
        if (time < 21 && time >= 16) {
            if (counter == 0) {
                unfade(sideCardTimeSwitch);
                document.getElementById("sideCardWeatherLocationSwitch").style.opacity = "0%";
                document.getElementById("iconWeatherSwitch").style.opacity = "0%";
                document.getElementById("sideCardWeatherSwitch").style.animation = "sideCardExtendWeatherBackwardsGE 200ms ease-in-out";
                document.getElementById("sideCardWeatherSwitch").style.opacity = "0%";
                document.getElementById("sideCardGreetingSwitch").style.opacity = "0%";
                document.getElementById("sideCardContainer").style.animation = "sideCardExtendTimeForwardsGE 200ms ease-in-out";
                document.getElementById("sideCardContainer").style.width = "7rem";
                document.getElementById("sideCardContainer").style.height = "2rem";
                document.getElementById("sideCardContainer").style.top = "93%";
                document.getElementById("sideCardTimeSwitch").innerText = "It's " + time1 + ":" + timeMString + " " + timeString;
            }
            if (counter == 1) {
                document.getElementById("sideCardTimeSwitch").style.opacity = "0%";
                unfade(sideCardGreetingSwitch);
                document.getElementById("sideCardContainer").style.animation = "sideCardExtendTimeBackwardsGE 200ms ease-in-out";
                document.getElementById("sideCardContainer").style.width = "10.7rem";
                document.getElementById("sideCardContainer").style.height = "2rem";
                document.getElementById("sideCardContainer").style.top = "93%";
                document.getElementById("sideCardGreetingSwitch").style.animation = "sideCardTextSwitchFadeIn 2000ms ease-in-out";
                document.getElementById("sideCardGreetingSwitch").innerText = "Good evening, Jas.";
            }
            if (counter == 2) {
                //Day conditions*******
                //clear (0)
                //partly cloudy (1,2,3)
                //fog (45, 48)
                //rain (61 (slight), 63(moderate), 65(heavy))
                //freezing rain (66, 67)
                //snow fall (71(slight), 73, 75(heavy))
                //Night conditions*******
                //clear (0)
                //partly cloudy (1,2,3)
                //rain drizzle (61)
                document.getElementById("iconWeatherSwitch").style.opacity = "100%";
                document.getElementById("sideCardGreetingSwitch").style.opacity = "0%";
                document.getElementById("sideCardContainer").style.animation = "sideCardExtendWeatherForwardsGE 200ms ease-in-out";
                document.getElementById("sideCardContainer").style.width = "7rem";

                document.getElementById("sideCardWeatherSwitch").innerText = data.current_weather.temperature + "°C";
                document.getElementById("sideCardWeatherLocationSwitch").style.opacity = "0%";
                if (data.current_weather.is_day == 1) {//day
                    switch (data.current_weather.weathercode) {
                        case 0://clear
                            unfade(sideCardWeatherSwitch);
                            unfade(iconWeatherSwitch);
                            unfade(sideCardWeatherLocationSwitch);
                            document.getElementById("iconWeatherSwitch").src = "icons/clearwhite.png";
                            break;
                        case 1: case 2: case 3: //partly cloudy
                            unfade(sideCardWeatherSwitch);
                            unfade(iconWeatherSwitch);
                            unfade(sideCardWeatherLocationSwitch);
                            document.getElementById("iconWeatherSwitch").src = "icons/partlycloudywhite.png";
                            break;
                        case 45: case 48: //fog
                            unfade(sideCardWeatherSwitch);
                            unfade(iconWeatherSwitch);
                            unfade(sideCardWeatherLocationSwitch);
                            document.getElementById("iconWeatherSwitch").src = "icons/fogwhite.png";
                            break;
                        case 61://slight rain
                            unfade(sideCardWeatherSwitch);
                            unfade(iconWeatherSwitch);
                            unfade(sideCardWeatherLocationSwitch);
                            document.getElementById("iconWeatherSwitch").src = "icons/rainwhite.png";
                            break;
                        case 65://heavy rain
                            unfade(sideCardWeatherSwitch);
                            unfade(iconWeatherSwitch);
                            unfade(sideCardWeatherLocationSwitch);
                            document.getElementById("iconWeatherSwitch").src = "icons/heavyrainwhite.png";
                            break;
                        case 66: case 67://freezing rain
                            unfade(sideCardWeatherSwitch);
                            unfade(iconWeatherSwitch);
                            unfade(sideCardWeatherLocationSwitch);
                            document.getElementById("iconWeatherSwitch").src = "icons/freezingrainwhite.png";
                            break;
                        case 71://slight snowfall
                            unfade(sideCardWeatherSwitch);
                            unfade(iconWeatherSwitch);
                            unfade(sideCardWeatherLocationSwitch);
                            document.getElementById("iconWeatherSwitch").src = "icons/snowwhite.png";
                            break;
                        case 75://heavy snowfall
                            unfade(sideCardWeatherSwitch);
                            unfade(iconWeatherSwitch);
                            unfade(sideCardWeatherLocationSwitch);
                            document.getElementById("iconWeatherSwitch").src = "icons/heavysnowwhite.png";
                            break;
                    }
                }
                if (data.current_weather.is_day == 0) {//night
                    switch (data.current_weather.weathercode) {
                        case 0://clear 
                            unfade(sideCardWeatherSwitch);
                            unfade(iconWeatherSwitch);
                            unfade(sideCardWeatherLocationSwitch);
                            document.getElementById("iconWeatherSwitch").src = "icons/clearnightwhite.png";
                            break;
                        case 1: case 2: case 3: //partly cloudy\
                            unfade(sideCardWeatherSwitch);
                            unfade(iconWeatherSwitch);
                            unfade(sideCardWeatherLocationSwitch);
                            document.getElementById("iconWeatherSwitch").src = "icons/partlycloudynightwhite.png";
                            break;
                        case 61: //rain drizzle
                            unfade(sideCardWeatherSwitch);
                            unfade(iconWeatherSwitch);
                            unfade(sideCardWeatherLocationSwitch);
                            document.getElementById("iconWeatherSwitch").src = "icons/drizzlenightwhite.png";
                            break;
                    }
                }
            }
            counter++;
            if (counter == 3) {
                counter = 0;
            }
            console.log(counter);
        }
        if (time < 24 && time >= 21) {
            if (counter == 0) {
                unfade(sideCardTimeSwitch);
                document.getElementById("sideCardWeatherLocationSwitch").style.opacity = "0%";
                document.getElementById("iconWeatherSwitch").style.opacity = "0%";
                document.getElementById("sideCardWeatherSwitch").style.animation = "sideCardExtendWeatherBackwardsGE 200ms ease-in-out";
                document.getElementById("sideCardWeatherSwitch").style.opacity = "0%";
                document.getElementById("sideCardGreetingSwitch").style.opacity = "0%";
                document.getElementById("sideCardContainer").style.animation = "sideCardExtendTimeForwardsGE 200ms ease-in-out";
                document.getElementById("sideCardContainer").style.width = "7rem";
                document.getElementById("sideCardContainer").style.height = "2rem";
                document.getElementById("sideCardContainer").style.top = "93%";
                document.getElementById("sideCardTimeSwitch").innerText = "It's " + time1 + ":" + timeMString + " " + timeString;
            }
            if (counter == 1) {
                document.getElementById("sideCardTimeSwitch").style.opacity = "0%";
                unfade(sideCardGreetingSwitch);
                document.getElementById("sideCardContainer").style.animation = "sideCardExtendTimeBackwardsGN 200ms ease-in-out";
                document.getElementById("sideCardContainer").style.width = "9.5rem";
                document.getElementById("sideCardContainer").style.height = "2rem";
                document.getElementById("sideCardContainer").style.top = "93%";
                document.getElementById("sideCardGreetingSwitch").style.animation = "sideCardTextSwitchFadeIn 2000ms ease-in-out";
                document.getElementById("sideCardGreetingSwitch").innerText = "Good night, Jas.";
            }
            if (counter == 2) {
                //Day conditions*******
                //clear (0)
                //partly cloudy (1,2,3)
                //fog (45, 48)
                //rain (61 (slight), 63(moderate), 65(heavy))
                //freezing rain (66, 67)
                //snow fall (71(slight), 73, 75(heavy))
                //Night conditions*******
                //clear (0)
                //partly cloudy (1,2,3)
                //rain drizzle (61)
                document.getElementById("iconWeatherSwitch").style.opacity = "100%";
                document.getElementById("sideCardGreetingSwitch").style.opacity = "0%";
                document.getElementById("sideCardContainer").style.animation = "sideCardExtendWeatherForwardsGE 200ms ease-in-out";
                document.getElementById("sideCardContainer").style.width = "7rem";

                document.getElementById("sideCardWeatherSwitch").innerText = data.current_weather.temperature + "°C";
                document.getElementById("sideCardWeatherLocationSwitch").style.opacity = "0%";
                if (data.current_weather.is_day == 1) {//day
                    switch (data.current_weather.weathercode) {
                        case 0://clear
                            unfade(sideCardWeatherSwitch);
                            unfade(iconWeatherSwitch);
                            unfade(sideCardWeatherLocationSwitch);
                            document.getElementById("iconWeatherSwitch").src = "icons/clearwhite.png";
                            break;
                        case 1: case 2: case 3: //partly cloudy
                            unfade(sideCardWeatherSwitch);
                            unfade(iconWeatherSwitch);
                            unfade(sideCardWeatherLocationSwitch);
                            document.getElementById("iconWeatherSwitch").src = "icons/partlycloudywhite.png";
                            break;
                        case 45: case 48: //fog
                            unfade(sideCardWeatherSwitch);
                            unfade(iconWeatherSwitch);
                            unfade(sideCardWeatherLocationSwitch);
                            document.getElementById("iconWeatherSwitch").src = "icons/fogwhite.png";
                            break;
                        case 61://slight rain
                            unfade(sideCardWeatherSwitch);
                            unfade(iconWeatherSwitch);
                            unfade(sideCardWeatherLocationSwitch);
                            document.getElementById("iconWeatherSwitch").src = "icons/rainwhite.png";
                            break;
                        case 65://heavy rain
                            unfade(sideCardWeatherSwitch);
                            unfade(iconWeatherSwitch);
                            unfade(sideCardWeatherLocationSwitch);
                            document.getElementById("iconWeatherSwitch").src = "icons/heavyrainwhite.png";
                            break;
                        case 66: case 67://freezing rain
                            unfade(sideCardWeatherSwitch);
                            unfade(iconWeatherSwitch);
                            unfade(sideCardWeatherLocationSwitch);
                            document.getElementById("iconWeatherSwitch").src = "icons/freezingrainwhite.png";
                            break;
                        case 71://slight snowfall
                            unfade(sideCardWeatherSwitch);
                            unfade(iconWeatherSwitch);
                            unfade(sideCardWeatherLocationSwitch);
                            document.getElementById("iconWeatherSwitch").src = "icons/snowwhite.png";
                            break;
                        case 75://heavy snowfall
                            unfade(sideCardWeatherSwitch);
                            unfade(iconWeatherSwitch);
                            unfade(sideCardWeatherLocationSwitch);
                            document.getElementById("iconWeatherSwitch").src = "icons/heavysnowwhite.png";
                            break;
                    }
                }
                if (data.current_weather.is_day == 0) {//night
                    switch (data.current_weather.weathercode) {
                        case 0://clear 
                            unfade(sideCardWeatherSwitch);
                            unfade(iconWeatherSwitch);
                            unfade(sideCardWeatherLocationSwitch);
                            document.getElementById("iconWeatherSwitch").src = "icons/clearnightwhite.png";
                            break;
                        case 1: case 2: case 3: //partly cloudy\
                            unfade(sideCardWeatherSwitch);
                            unfade(iconWeatherSwitch);
                            unfade(sideCardWeatherLocationSwitch);
                            document.getElementById("iconWeatherSwitch").src = "icons/partlycloudynightwhite.png";
                            break;
                        case 61: //rain drizzle
                            unfade(sideCardWeatherSwitch);
                            unfade(iconWeatherSwitch);
                            unfade(sideCardWeatherLocationSwitch);
                            document.getElementById("iconWeatherSwitch").src = "icons/drizzlenightwhite.png";
                            break;
                    }
                }
            }
            counter++;
            if (counter == 3) {
                counter = 0;
            }
            console.log(counter);
        }
    }
}, 21000);




function unfade(element) {
    var op = 0.1;  // initial opacity
    element.style.display = 'block';
    var timer = setInterval(function () {
        if (op >= 1) {
            clearInterval(timer);
        }
        element.style.opacity = op;
        element.style.filter = 'alpha(opacity=' + op * 100 + ")";
        op += op * 0.2;
    }, 10);
}

function getWeatherData() {

}

