let sound = $("audio");
$("body").on("keypress", function (ev){
    switch (ev.key){
        case "a":
            sound[0].play()
            break;
        case "s":
            sound[1].play()
            break;
        case "d":
            sound[2].play()
            break;
        case "f":
            sound[3].play()
            break;
        case "g":
            sound[4].play()
            break;
        case "h":
            sound[5].play()
            break;
        case "j":
            sound[6].play()
            break;
        case "k":
            sound[7].play()
            break;
        case "l":
            sound[8].play()
            break;
        default :
            alert("error");
    }
});

/* concert musicien*/
