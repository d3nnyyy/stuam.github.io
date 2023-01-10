//  HEADER BUTTONS


const store = document.getElementById('store')
const storeList = document.getElementById('storeList')


function enter() {
    storeList.style.display = 'block'
}

function leave() {
    storeList.style.display = 'none'
}

store.addEventListener('mouseenter', enter)
storeList.addEventListener('mouseleave', leave)



// GAMES IMAGES !!! GAMES IMAGES !!! GAMES IMAGES



function csmove1() {
    document.getElementById('cscurrent').src = "imgs/csgo/cs1.jpg"}
function csmove2() {
    document.getElementById('cscurrent').src = "imgs/csgo/cs2.jpg"}
function csmove3() {
    document.getElementById('cscurrent').src = "imgs/csgo/cs3.jpg"}
function csmove4() {
    document.getElementById('cscurrent').src = "imgs/csgo/cs4.jpg"}
function csout() {
    document.getElementById('cscurrent').src = "imgs/csgo/csmain.jpg"}

document.getElementById('cs1').addEventListener('mousemove', csmove1)
document.getElementById('cs2').addEventListener('mousemove', csmove2)
document.getElementById('cs3').addEventListener('mousemove', csmove3)
document.getElementById('cs4').addEventListener('mousemove', csmove4)
document.getElementById('cs1').addEventListener('mouseout', csout)
document.getElementById('cs2').addEventListener('mouseout', csout)
document.getElementById('cs3').addEventListener('mouseout', csout)
document.getElementById('cs4').addEventListener('mouseout', csout)


function nbamove1() {
    document.getElementById('nbacurrent').src = "imgs/nba/nba1.jpg"
}
function nbamove2() {
    document.getElementById('nbacurrent').src = "imgs/nba/nba2.jpg"
}
function nbamove3() {
    document.getElementById('nbacurrent').src = "imgs/nba/nba3.jpg"
}
function nbamove4() {
    document.getElementById('nbacurrent').src = "imgs/nba/nba4.jpg"
}
function nbaout() {
    document.getElementById('nbacurrent').src = "imgs/nba/nbamain.jpg"
}

document.getElementById('nba1').addEventListener('mousemove', nbamove1)
document.getElementById('nba2').addEventListener('mousemove', nbamove2)
document.getElementById('nba3').addEventListener('mousemove', nbamove3)
document.getElementById('nba4').addEventListener('mousemove', nbamove4)
document.getElementById('nba1').addEventListener('mouseout', nbaout)
document.getElementById('nba2').addEventListener('mouseout', nbaout)
document.getElementById('nba3').addEventListener('mouseout', nbaout)
document.getElementById('nba4').addEventListener('mouseout', nbaout)

function f1move1() {
    document.getElementById('f1current').src = "imgs/form/form1.jpg"
}
function f1move2() {
    document.getElementById('f1current').src = "imgs/form/form2.jpg"
}
function f1move3() {
    document.getElementById('f1current').src = "imgs/form/form3.jpg"
}
function f1move4() {
    document.getElementById('f1current').src = "imgs/form/form4.jpg"
}
function f1out() {
    document.getElementById('f1current').src = "imgs/form/formmain.jpg"
}

document.getElementById('form1').addEventListener('mousemove', f1move1)
document.getElementById('form2').addEventListener('mousemove', f1move2)
document.getElementById('form3').addEventListener('mousemove', f1move3)
document.getElementById('form4').addEventListener('mousemove', f1move4)
document.getElementById('form1').addEventListener('mouseout', f1out)
document.getElementById('form2').addEventListener('mouseout', f1out)
document.getElementById('form3').addEventListener('mouseout', f1out)
document.getElementById('form4').addEventListener('mouseout', f1out)






const csgoInfo = document.getElementById('csgo')
const nbaInfo = document.getElementById('nba')
const addInfo = document.getElementById('addcsgoInfo')
const addnbaInfo = document.getElementById('addnbaInfo')
const f1Info = document.getElementById('f1')
const addf1Info = document.getElementById('addf1Info')

function onInfo() {
    addInfo.style.display = 'block'
    addnbaInfo.style.display = 'block'
    addf1Info.style.display = 'block'

}

function offInfo() {
    addInfo.style.display = 'none'
    addnbaInfo.style.display = 'none'
    addf1Info.style.display = 'none'
}

csgoInfo.addEventListener('mousemove', onInfo)
csgoInfo.addEventListener('mouseout', offInfo)

nbaInfo.addEventListener('mousemove', onInfo)
nbaInfo.addEventListener('mouseout', offInfo)

f1Info.addEventListener('mousemove', onInfo)
f1Info.addEventListener('mouseout', offInfo)



let csimage = document.getElementById('ff1')
let csimages = ['imgs/csgo/cs1.jpg','imgs/csgo/cs2.jpg','imgs/csgo/cs3.jpg','imgs/csgo/cs4.jpg'] 
var csindex = 0
setInterval (function(){
    if (csindex === csimages.length) {
        csindex = 0
    }
    csimage.src = csimages[csindex]
    csindex ++
}, 1500)

let nbaimage = document.getElementById('nnba1')
let nbaimages = ['imgs/nba/nba1.jpg','imgs/nba/nba2.jpg','imgs/nba/nba3.jpg','imgs/nba/nba4.jpg'] 
var nbaindex = 0
setInterval( function(){
    if (nbaindex === nbaimages.length) {
        nbaindex = 0
    }
    nbaimage.src = nbaimages[nbaindex]
    nbaindex ++
}, 1500);

let f1image = document.getElementById('fform1')
let f1images = ['imgs/form/form1.jpg','imgs/form/form2.jpg','imgs/form/form3.jpg','imgs/form/form4.jpg'] 
var f1index = 0
setInterval( function(){
    if (f1index === f1images.length) {
        f1index = 0
    }
    f1image.src = f1images[f1index]
    f1index ++
}, 1500);



// GAME CHANGE !!! GAME CHANGE !!! GAME CHANGE
let a = 0

let gameid = document.getElementById('csgo')
let gamesid = ['csgo', 'nba', 'f1'] 
var gameindex = 0

setInterval( function(){
    // if (gameindex === gamesid.length) {
    //     gameindex = 0
    // }
    // gameid = document.getElementById(gamesid[gameid])
    // gameid ++

    if (!(addInfo.style.display === 'block' || addnbaInfo.style.display === 'block' || addf1Info.style.display === 'block') && (arrBoolen === false))  {
        if (a === 0) {
            document.getElementById('nba').style.display = 'block'
            document.getElementById('f1').style.display = 'none'
            document.getElementById('csgo').style.display = 'none'
            a ++
            return
            
        }
    
        else if (a === 1) {
            document.getElementById('f1').style.display = 'block'
            document.getElementById('nba').style.display = 'none'
            document.getElementById('csgo').style.display = 'none'
            a ++
            return
        }
        else if (a === 2) {
            document.getElementById('f1').style.display = 'none'
            document.getElementById('nba').style.display = 'none'
            document.getElementById('csgo').style.display = 'block'
            a = 0
            return
            }
    }
}, 4000);





const leftarrow = document.getElementById('arrow-left')
const rightarrow = document.getElementById('arrow-right')





function left() {
    if (a === 0) {
        document.getElementById('f1').style.display = 'block'
        document.getElementById('nba').style.display = 'none'
        document.getElementById('csgo').style.display = 'none'
        a ++
        return
    }

    else if (a === 1) {
        document.getElementById('f1').style.display = 'none'
        document.getElementById('nba').style.display = 'none'
        document.getElementById('csgo').style.display = 'block'
        a ++
        return
    }
    else if (a === 2) {
        document.getElementById('f1').style.display = 'none'
        document.getElementById('nba').style.display = 'block'
        document.getElementById('csgo').style.display = 'none'
        a = 0
        return
    }

}

function right() {
    if (a === 0) {
        document.getElementById('nba').style.display = 'block'
        document.getElementById('f1').style.display = 'none'
        document.getElementById('csgo').style.display = 'none'
        a ++
        return
        
    }

    else if (a === 1) {
        document.getElementById('f1').style.display = 'block'
        document.getElementById('nba').style.display = 'none'
        document.getElementById('csgo').style.display = 'none'
        a ++
        return
    }
    else if (a === 2) {
        document.getElementById('f1').style.display = 'none'
        document.getElementById('nba').style.display = 'none'
        document.getElementById('csgo').style.display = 'block'
        a = 0
        return
        }
}

let arrBoolen = false

function arrOn() {
    arrBoolen = true
}
function arrOut() {
    arrBoolen = false
}

leftarrow.addEventListener('mousemove', arrOn)
rightarrow.addEventListener('mousemove', arrOn)

leftarrow.addEventListener('mouseout', arrOut)
rightarrow.addEventListener('mouseout', arrOut)


function bgoff() {
    document.getElementById('arrow-leftbg').style.background = 'hsla(221, 45%, 73%, 1)'
    document.getElementById('arrow-leftbg').style.background = 'linear-gradient(270deg, hsla(221, 45%, 73%, 0.3) 0%, hsla(220, 78%, 29%, 0.3) 100%)'
    document.getElementById('arrow-rightbg').style.background = 'hsla(221, 45%, 73%, 1)'
    document.getElementById('arrow-rightbg').style.background = 'linear-gradient(90deg, hsla(221, 45%, 73%, 0.3) 0%, hsla(220, 78%, 29%, 0.3) 100%)'
}



function bgleft() {
    document.getElementById('arrow-leftbg').style.background = 'hsla(221, 45%, 73%, 1)'
    document.getElementById('arrow-leftbg').style.background = 'linear-gradient(270deg, hsla(221, 45%, 73%, 0.9) 0%, hsla(220, 78%, 29%, 0.3) 100%)'
}

function bgright() {
    document.getElementById('arrow-rightbg').style.background = 'hsla(221, 45%, 73%, 1)'
    document.getElementById('arrow-rightbg').style.background = 'linear-gradient(90deg, hsla(221, 45%, 73%, 0.9) 0%, hsla(220, 78%, 29%, 0.3) 100%)'
}

leftarrow.addEventListener('mousemove', bgleft)
leftarrow.addEventListener('mouseout', bgoff)
rightarrow.addEventListener('mousemove', bgright)
rightarrow.addEventListener('mouseout', bgoff)

leftarrow.addEventListener('click', left)
rightarrow.addEventListener('click', right)

function th1() {
    document.getElementById('f1').style.display = 'none'
    document.getElementById('nba').style.display = 'none'
    document.getElementById('csgo').style.display = 'block'
}

function th2() {
    document.getElementById('f1').style.display = 'none'
    document.getElementById('nba').style.display = 'block'
    document.getElementById('csgo').style.display = 'none'
}

function th3() {
    document.getElementById('f1').style.display = 'block'
    document.getElementById('nba').style.display = 'none'
    document.getElementById('csgo').style.display = 'none'
}

function th1bg() {
    document.getElementById('thumb1').style.background = 'hsla(221, 45%, 73%, 0.5)'
}

function th2bg() {
    document.getElementById('thumb2').style.background = 'hsla(221, 45%, 73%, 0.5)'
}

function th3bg() {
    document.getElementById('thumb3').style.background = 'hsla(221, 45%, 73%, 0.5)'
}

function thbgout() {
    document.getElementById('thumb1').style.background = 'hsla(221, 45%, 73%, 1)'
    document.getElementById('thumb2').style.background = 'hsla(221, 45%, 73%, 1)'
    document.getElementById('thumb3').style.background = 'hsla(221, 45%, 73%, 1)'
}


document.getElementById('thumb1').addEventListener('click', th1)
document.getElementById('thumb2').addEventListener('click', th2)
document.getElementById('thumb3').addEventListener('click', th3)

document.getElementById('thumb1').addEventListener('mousemove', th1bg)
document.getElementById('thumb2').addEventListener('mousemove', th2bg)
document.getElementById('thumb3').addEventListener('mousemove', th3bg)

document.getElementById('thumb1').addEventListener('mouseout', thbgout)
document.getElementById('thumb2').addEventListener('mouseout', thbgout)
document.getElementById('thumb3').addEventListener('mouseout', thbgout)