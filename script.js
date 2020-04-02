var keyCodes = {
    81: ['1up.wav', '#1-up'],
    87: ['jump-1.wav', '#jump-1'],
    69: ['jump-2.wav', '#jump-2'],
    65: ['bowser.wav', '#bowser'],
    83: ['power-up.wav', '#power-up'],
    68: ['power-up-2.wav', '#power-up-2'],
    90: ['pipe.wav', '#pipe'],
    88: ['fireball.wav', '#fireball'],
    67: ['coin.wav', '#coin']
}
var powerOn = true;
var vol = document.querySelector('input');

document.addEventListener('keydown', function(event) {
    keyWasPressed(event.which);
})

vol.addEventListener('input', function() {
    if (powerOn) {
        $("#display").html('Volume: ' + vol.value);
            setTimeout(function(){
                $("#display").html('');
            }, 2500)
    } else {
        $("#display").html('');
    }
    
});

function playSound(sound, key) {
    if (powerOn) {
        var music = new Audio("./sounds/" + sound)
        music.play();
        music.volume = vol.value / 100;

        var soundName = keyCodes[key][1].substring(1, ).replace(/-/g, ' ');
        $("#display").html(soundName.charAt(0).toUpperCase() + soundName.slice(1));
    } else {
        $("#display").html('');
    }
}

function togglePower() {
    if (powerOn) {
        $("#power-button").children().css('float', 'left');
        powerOn = false;
    } else {
        $("#power-button").children().css('float', 'right');
        powerOn = true;
    }
}

function keyWasPressed(key) {
    playSound(keyCodes[key][0], key)
    event.preventDefault();
    $(keyCodes[key][1]).addClass('animateKeypress');
            setTimeout(function(){
                $(keyCodes[key][1]).removeClass('animateKeypress');
            }, 150);
}

