const fruits = ['<img src="img/banana.svg" width="128px" height="128" alt="">', '<img src="img/cherry.svg" width="128px" height="128" alt="">', '<img src="img/grape.svg" width="128px" height="128" alt="">', '<img src="img/orange.svg" width="128px" height="128" alt="">', '<img src="img/pear.svg" width="128px" height="128" alt="">', '<img src="img/watermelon.svg" width="128px" height="128" alt="">', '<img src="img/star.svg" width="128px" height="128" alt="">']
    //Banana 0, Cherry 1, Grape 2, Orange 3, Pear 4, Watermelon 5
var winAmount = [1, 3, 5, 10, 15, 25, 50]
var coins = [0, 10]
var betAmount = 1
var betMultiplyer = 1
    //lock 1, lock 2, lock 3
var buttons = [false, false, false]
var lastWasWin = false
    //coins index 0 = latest win, 1 = coin amount for the player
var rolls = [getRandomInt(fruits.length), getRandomInt(fruits.length), getRandomInt(fruits.length)]
document.getElementById('betAmountplayer').innerHTML = betAmount.toFixed(2)
document.getElementById('coins').innerHTML = coins[1].toFixed(2)
document.getElementById('roll1').innerHTML = fruits[rolls[0]]
document.getElementById('roll2').innerHTML = fruits[rolls[1]]
document.getElementById('roll3').innerHTML = fruits[rolls[2]]
document.getElementById('winMultiplyer1').innerHTML = winAmount[0].toFixed(2)
document.getElementById('winMultiplyer2').innerHTML = winAmount[1].toFixed(2)
document.getElementById('winMultiplyer3').innerHTML = winAmount[2].toFixed(2)
document.getElementById('winMultiplyer4').innerHTML = winAmount[3].toFixed(2)
document.getElementById('winMultiplyer5').innerHTML = winAmount[4].toFixed(2)
document.getElementById('winMultiplyer6').innerHTML = winAmount[5].toFixed(2)
document.getElementById('winMultiplyer7').innerHTML = winAmount[6].toFixed(2)




function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function getRandomInt2(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

function spin() {

    if (coins[1] >= betAmount) {
        lastWasWin = false
        coins[1] -= betAmount
        document.getElementById('coins').innerHTML = coins[1]
        document.getElementById('winAmount').innerHTML = ''
        document.getElementById('playbutton').innerHTML = '<button type="checkbox" class="btn-game" onclick="spin()" disabled>Pelaa</button>'
        var spin1 = 0
        var spinning1 = setInterval(function() {


                console.log(rolls)
                if (buttons[0] == false) {
                    rolls[0] = getRandomInt(fruits.length)
                    document.getElementById('roll1').innerHTML = fruits[rolls[0]]
                }
                if (buttons[1] == false) {
                    rolls[1] = getRandomInt(fruits.length)
                    document.getElementById('roll2').innerHTML = fruits[rolls[1]]
                }
                if (buttons[2] == false) {
                    rolls[2] = getRandomInt(fruits.length)
                    document.getElementById('roll3').innerHTML = fruits[rolls[2]]
                }
                if (spin1 > getRandomInt2(15, 30)) {
                    clearInterval(spinning1)
                    spin2()
                }
                spin1++

            },
            100)
    } else {
        document.getElementById('winAmount').innerHTML = 'Panos isompi kuin kolikkomääräsi!'
    }
}

function spin2() {
    var spin2 = 0
    var spinning2 = setInterval(function() {
            console.log(rolls)
            if (buttons[0] == false) {
                rolls[0] = getRandomInt(fruits.length)
                document.getElementById('roll1').innerHTML = fruits[rolls[0]]
            }
            if (buttons[1] == false) {
                rolls[1] = getRandomInt(fruits.length)
                document.getElementById('roll2').innerHTML = fruits[rolls[1]]
            }
            if (buttons[2] == false) {
                rolls[2] = getRandomInt(fruits.length)
                document.getElementById('roll3').innerHTML = fruits[rolls[2]]
            }
            if (spin2 > getRandomInt2(3, 20)) {

                clearInterval(spinning2)
                checkWins()
                if (lastWasWin == false) {
                    clearLocks(false)
                }
                document.getElementById('playbutton').innerHTML = '<button class="btn-game" onclick="spin()">Pelaa</button>'
            }
            spin2++
        },
        300)

}

function lockButton(button) {

    console.log(button)
    var buttonPressed = 0

    if (button == "lock1") {
        buttonPressed = 1
    } else if (button == "lock2") {
        buttonPressed = 2
    } else {
        buttonPressed = 3
    }


    if (buttonPressed == 1) {
        if (buttons[0] == false) {
            document.getElementById('lock1').innerHTML = '<button class="btn-game-active" onclick="lockButton(\'lock1\')">Lukitse</button>'
            buttons[0] = true

        } else {
            document.getElementById('lock1').innerHTML = '<button class="btn-game" onclick="lockButton(\'lock1\')">Lukitse</button>'
            buttons[0] = false

        }
    }
    if (buttonPressed == 2) {
        if (buttons[1] == false) {
            document.getElementById('lock2').innerHTML = '<button class="btn-game-active" onclick="lockButton(\'lock2\')">Lukitse</button>'
            buttons[1] = true

        } else {
            document.getElementById('lock2').innerHTML = '<button class="btn-game" onclick="lockButton(\'lock2\')">Lukitse</button>'
            buttons[1] = false

        }
    }
    if (buttonPressed == 3) {
        if (buttons[2] == false) {
            document.getElementById('lock3').innerHTML = '<button class="btn-game-active" onclick="lockButton(\'lock3\')">Lukitse</button>'
            buttons[2] = true

        } else {
            document.getElementById('lock3').innerHTML = '<button class="btn-game" onclick="lockButton(\'lock3\')">Lukitse</button>'
            buttons[2] = false

        }
    }





}

function checkWins() {

    if (rolls[0] == rolls[1] && rolls[0] == rolls[2]) {
        document.getElementById('winAmount').innerHTML = 'Voitit '
        switch (rolls[0]) {
            case 0:
                coins[1] += winAmount[0]
                document.getElementById('coins').innerHTML = coins[1]
                document.getElementById('winAmount').innerHTML += winAmount[0] + ' Kolikkoa!'
                lastWasWin = true
                break;
            case 1:
                coins[1] += winAmount[1]
                document.getElementById('coins').innerHTML = coins[1]
                document.getElementById('winAmount').innerHTML += winAmount[1] + ' Kolikkoa!'
                lastWasWin = true
                break;

            case 2:
                coins[1] += winAmount[2]
                document.getElementById('coins').innerHTML = coins[1]
                document.getElementById('winAmount').innerHTML += winAmount[2] + ' Kolikkoa!'
                lastWasWin = true
                break;

            case 3:
                coins[1] += winAmount[3]
                document.getElementById('coins').innerHTML = coins[1]
                document.getElementById('winAmount').innerHTML += winAmount[3] + ' Kolikkoa!'
                break;

            case 4:
                coins[1] += winAmount[4]
                document.getElementById('coins').innerHTML = coins[1]
                document.getElementById('winAmount').innerHTML += winAmount[4] + ' Kolikkoa!'
                lastWasWin = true
                break;

            case 5:
                coins[1] += winAmount[5]
                document.getElementById('coins').innerHTML = coins[1]
                document.getElementById('winAmount').innerHTML += winAmount[5] + ' Kolikkoa!'
                lastWasWin = true
                break;
            case 6:
                coins[1] += winAmount[6]
                document.getElementById('coins').innerHTML = coins[1]
                document.getElementById('winAmount').innerHTML += winAmount[6] + ' Kolikkoa!'
                lastWasWin = true
                break;



            default:
                break;
        }
        if (lastWasWin == true) {
            clearLocks(true);
        }
    }


}

function clearLocks(arg) {
    if (arg == true) {
        document.getElementById('lock1').innerHTML = '<button class="btn-game" onclick="lockButton(\'lock1\')" disabled>Lukitse</button></td>'
        document.getElementById('lock2').innerHTML = '<button class="btn-game" onclick="lockButton(\'lock2\')" disabled>Lukitse</button></td>'
        document.getElementById('lock3').innerHTML = '<button class="btn-game" onclick="lockButton(\'lock3\')" disabled>Lukitse</button></td>'
        buttons = [false, false, false]
    } else {
        document.getElementById('lock1').innerHTML = '<button class="btn-game" onclick="lockButton(\'lock1\')">Lukitse</button></td>'
        document.getElementById('lock2').innerHTML = '<button class="btn-game" onclick="lockButton(\'lock2\')">Lukitse</button></td>'
        document.getElementById('lock3').innerHTML = '<button class="btn-game" onclick="lockButton(\'lock3\')">Lukitse</button></td>'
        buttons = [false, false, false]
    }
}

function betAmountAdd() {
    if (betAmount < 20) {
        betAmount = betAmount + 1
        betMultiplyer += .5
        document.getElementById('betAmountplayer').innerHTML = betAmount
        document.getElementById('betAmountMinus').innerHTML = '<button class="btn-game" onclick="betAmountRemove()">Vähennä</button>'

    }
    if (betAmount == 20) {
        document.getElementById('betAmountPlus').innerHTML = '<button class="btn-game" onclick="betAmountAdd()" disabled>Lisää</button>'
    }
    for (let i = 0; i < winAmount.length; i++) {
        winAmount[i] = (winAmount[i] * 1.25).toFixed(2)


    }
    document.getElementById('winMultiplyer1').innerHTML = winAmount[0]
    document.getElementById('winMultiplyer2').innerHTML = winAmount[1]
    document.getElementById('winMultiplyer3').innerHTML = winAmount[2]
    document.getElementById('winMultiplyer4').innerHTML = winAmount[3]
    document.getElementById('winMultiplyer5').innerHTML = winAmount[4]
    document.getElementById('winMultiplyer6').innerHTML = winAmount[5]
    document.getElementById('winMultiplyer7').innerHTML = winAmount[6]

}

function betAmountRemove() {
    if (betAmount > 1) {
        betAmount = betAmount - 1
        betMultiplyer -= .5
        document.getElementById('betAmountplayer').innerHTML = betAmount
        document.getElementById('betAmountPlus').innerHTML = '<button class="btn-game" onclick="betAmountAdd()">Lisää</button>'
    }
    if (betAmount == 1) {
        document.getElementById('betAmountMinus').innerHTML = '<button class="btn-game" onclick="betAmountRemove()" disabled>Vähennä</button>'

    }
    for (let i = 0; i < winAmount.length; i++) {
        winAmount[i] = (winAmount[i] / 1.25).toFixed(2)

    }
    document.getElementById('winMultiplyer1').innerHTML = winAmount[0]
    document.getElementById('winMultiplyer2').innerHTML = winAmount[1]
    document.getElementById('winMultiplyer3').innerHTML = winAmount[2]
    document.getElementById('winMultiplyer4').innerHTML = winAmount[3]
    document.getElementById('winMultiplyer5').innerHTML = winAmount[4]
    document.getElementById('winMultiplyer6').innerHTML = winAmount[5]
    document.getElementById('winMultiplyer7').innerHTML = winAmount[6]

}