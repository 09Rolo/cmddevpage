
/*--------------------------------------------betöltés--------------------------------------------*/
document.addEventListener("DOMContentLoaded", () => {
    document.documentElement.style.scrollBehavior = "auto"
    window.scrollTo(0,0)
    
    setTimeout(() => {
        document.documentElement.style.scrollBehavior = "smooth"
    }, 200)
})



function loaded() {
    window.scrollTo(0,0)
    let betolto = document.getElementById("betolto")
    betolto.remove()
    window.scrollTo(0,0)

    //többi cucc
    document.addEventListener("keydown", pressed);
    kezdes()
}



var introplayed = false
var elozocmd = ""

function pressed(event) {
    if (!introplayed) {
        document.getElementById("intro").play()
        introplayed = true
    }

    if (event.isComposing || event.keyCode === 229) {
        return;
    }  

    if (event.keyCode == 181) {
        document.location.reload(true);
    }


    window.scrollTo(0, document.body.offsetHeight);

    let tartalom = document.getElementById("command").innerText



    if (event.key == "Backspace" || event.keyCode == "8") {
        let curr_tart = tartalom

        if (curr_tart) {
            let tart_len = curr_tart.length
            let tart_split = curr_tart.split("")
            let tart_slice_that = tart_split[tart_split.length - 1]
            let tartslice = curr_tart.slice(0, tart_len - tart_slice_that.length)
            
            document.getElementById("command").innerText = tartslice
        }

    } else if (event.key == "Space" || event.keyCode == "32") {  

        document.getElementById("command").innerText = (tartalom += "\xa0")
        elozocmd = tartalom

    } else if (event.key == "Enter" || event.keyCode == "13") {

        submitcommand(tartalom)

    } else if (event.key == "ArrowUp" || event.keyCode == "38") {

        console.log(elozocmd)
        document.getElementById("command").innerText = elozocmd

    } else if (event.key.length == 1) {
        
        document.getElementById("command").innerText = (tartalom += event.key)
        elozocmd = tartalom

    }
}




function submitcommand(tartalom) {
    if (tartalom) {
        //console.log(tartalom.split("\xa0"))

        tartalom = tartalom.toLowerCase()
        document.getElementById("command").innerText = ""

        let typeszoveg = ""
        typeszoveg += `
            <br>
            <p class="gray cant_select">X:\\Users\\vendeg>${tartalom}</p>
        `



        if (tartalom == "help") {

            typeszoveg += `
                <p class="orange">Parancsok:</p>
                <p class="orange inner">yt / youtube - <span class="green">Youtube</span></p>
                <p class="orange inner">ttv / twitch - <span class="green">Twitch</span></p>
                <p class="orange inner">insta / instagram - <span class="green">Instagram</span></p>
                <p class="orange inner">x / twitter - <span class="green">X</span></p>
                <p class="orange inner">transl / fordító - <span class="green">Google Fordító</span></p>
                <p class="orange inner">plist - <span class="green">Youtube playlistek megnyitása</span></p>
                <p class="orange inner">g [src(keresés) VAGY lnk(link megnyitása)] [keresendő szöveg vagy link] - <span class="green">Google</span></p>
                <p class="orange inner">gmail [fiók száma(0 - valameddig)] - <span class="green">Gmail fiók megnyitása</span></p>
                <p class="orange inner">film [film címe] - <span class="green">Film keresése</span></p>
                <p class="orange inner">sorozat [sorozat címe(rickandmorty , familyguy / fmguy)] [nyelv] - <span class="green">Sorozat megnyitása</span></p>

                <p class="orange inner">cls / clr / clear - <span class="green">Console törlése</span></p>
            `

        } 
        else if (tartalom == "yt" || tartalom == "youtube") {

            typeszoveg += `<p class="orange inner">Youtube megnyitása...</p>`
            opentab("https://www.youtube.com/")

        } else if (tartalom == "ttv" || tartalom == "twitch") {

            typeszoveg += `<p class="orange inner">Twitch megnyitása...</p>`
            opentab("https://www.twitch.tv/")

        } else if (tartalom == "insta" || tartalom == "instagram") {

            typeszoveg += `<p class="orange inner">Instagram megnyitása...</p>`
            opentab("https://www.instagram.com/")
            
        } else if (tartalom == "x" || tartalom == "twitter") {

            typeszoveg += `<p class="orange inner">X megnyitása...</p>`
            opentab("https://www.x.com/")
            
        } else if (tartalom == "transl" || tartalom == "fordító") {

            typeszoveg += `<p class="orange inner">X megnyitása...</p>`
            opentab("https://www.google.com/search?q=Google+ford%C3%ADt%C3%B3")
            
        } else if (tartalom == "plist") {

            typeszoveg += `<p class="orange inner">Youtube playlistek megnyitása</p>`
            opentab("https://www.youtube.com/@rolandkiss1370/playlists")

        }




        else if (tartalom.split("\xa0")[0] == "g") {
            if (tartalom.split("\xa0")[1]) {
                if (tartalom.split("\xa0")[1] == "src") {
                    let search = ""

                    for(let i = 2; i < tartalom.split("\xa0").length; i++) {
                        search += " " + tartalom.split("\xa0")[i]
                    }

                    typeszoveg += `<p class="orange inner">Keresés a következőre: <span class="blue">${search}</span></p>`
                    opentab("https://www.google.com/search?q=" + search)
                } else if (tartalom.split("\xa0")[1] == "lnk") {
                    typeszoveg += `<p class="orange inner">A <span class="blue">${tartalom.split("\xa0")[2]}</span> link megnyitása</p>`
                    opentab("http://" + tartalom.split("\xa0")[2])
                }
            } else {

                typeszoveg = `<p class="gray cant_select">X:\\Users\\vendeg>${tartalom}</p><p class="red inner">Helytelen használat. Írd be, hogy <span class="blue">'help'</span> a segítséghez!</>`

            }
        }



        else if (tartalom.split("\xa0")[0] == "gmail") {
            if (tartalom.split("\xa0")[1]) {
                typeszoveg += `<p class="orange inner">A <span class="blue">${tartalom.split("\xa0")[1]}</span>. gmail fiók megnyitása</p>`
                opentab("https://mail.google.com/mail/u/" + tartalom.split("\xa0")[1] + "/")
            } else {
                typeszoveg += `<p class="orange inner">Elsődleges gmail fiók megnyitása</p>`
                opentab("https://mail.google.com/mail/u/0/")
            }
        }


        else if (tartalom.split("\xa0")[0] == "film") {
            if (tartalom.split("\xa0")[1]) {

                let search = ""

                for(let i = 1; i < tartalom.split("\xa0").length; i++) {
                    search += " " + tartalom.split("\xa0")[i]
                }

                typeszoveg += `<p class="orange inner">A <span class="blue">${search}</span> film keresése</p>`
                opentab("https://www.google.com/search?q=" + search + "+teljes+film+magyarul+hd")
                
            } else {
                typeszoveg += `<p class="orange inner">Legjobb filmek megnyitása</p>`
                opentab("https://www.google.com/search?q=Legjobb+filmek")
            }
        }





        else if (tartalom.split("\xa0")[0] == "sorozat") {
            if (tartalom.split("\xa0")[1]) {

                if (tartalom.split("\xa0")[1] == "rickandmorty") {
                    if (tartalom.split("\xa0")[2] == "en") {
                        
                        typeszoveg += `<p class="orange inner">Rick és morty megnyitása angolul, magyarhoz <span class="blue">'sorozar rickandmorty hu'</span></p>`
                        opentab("https://ww.yesmovies.ag/search.html?q=rick+and+morty")

                    } else if (tartalom.split("\xa0")[2] == "hu") {

                        typeszoveg += `<p class="orange inner">Rick és morty megnyitása magyarul, angolhoz <span class="blue">'sorozar rickandmorty en'</span></p>`
                        opentab("https://moviedrive.hu/sorozat/?id=651")
                        
                    } else {

                        typeszoveg += `<p class="orange inner">Rick és morty megnyitása angolul, magyarhoz <span class="blue">'sorozar rickandmorty hu'</span></p>`
                        opentab("https://ww.yesmovies.ag/search.html?q=rick+and+morty")

                    }

                } 
                
                else if (tartalom.split("\xa0")[1] == "familyguy" || tartalom.split("\xa0")[1] == "fmguy") {

                    typeszoveg += `<p class="orange inner">Family Guy megnyitása</p>`
                    opentab("")

                } 

                //

            } else {

                typeszoveg = `<p class="gray cant_select">X:\\Users\\vendeg>${tartalom}</p><p class="red inner">Helytelen használat. Írd be, hogy <span class="blue">'help'</span> a segítséghez!</>`

            }
        }



        


        else if (tartalom == "cls" || tartalom == "clear" || tartalom == "clr") {
            clearconsole()
        }
        

        
        else {
            typeszoveg = `<p class="gray cant_select">X:\\Users\\vendeg>${tartalom}</p><p class="red inner">Nincs ilyen parancs. Írd be, hogy <span class="blue">'help'</span> a parancsokhoz!</>`
        }




        //document.getElementById("console").innerHTML += typeszoveg
        if (!(tartalom === "cls" || tartalom === "clr" || tartalom === "clear")) {
            type(typeszoveg)
        }
    }
}



function opentab(what) {
    if (what) {
        setTimeout(() => {
            window.open(what, "_blank");
        }, 500);
    }
}



function clearconsole() {
    let console = document.getElementById("console")
    console.innerHTML = `<a id="before"></a>`

    type('<br><p class="green">Console törölve</p>')
    kezdes()
}











function type(what, mastime) {
    var time = mastime || 10

    var before = document.getElementById("before")

    var text = ""


    var sor = document.createElement("div")
    before.parentNode.insertBefore(sor, before);
    

    for (let i = 0; i < what.length; i++) {
        setTimeout(() => {
            text += what.charAt(i)

            if (what.charAt(i) != "<" || !what.charAt(i) != ">") {
                sor.innerHTML = text
            }
            
        }, 10 + i*time)
    }


    window.scrollTo(0, document.body.offsetHeight);

    setTimeout(() => {
        window.scrollTo(0, document.body.offsetHeight);
    }, 500);
}





function kezdes() {

    let a = " _  __  _               _____            _                       _       _             "
    let b = "| |/ / (_)             |  __ \\          | |                     | |     | |            "
    let c = "| ' /   _   ___   ___  | |__) |   ___   | |   __ _   _ __     __| |     | |__    _   _ "
    let d = "|  <   | | / __| / __| |  _  /   / _ \\  | |  / _` | | '_ \\   / _` |     | '_ \\  | | | |"
    let e = "| . \\  | | \\__ \\ \\__ \\ | | \\ \\  | (_) | | | | (_| | | | | | | (_| |  _  | | | | | |_| |"
    let f = "|_|\\_\\ |_| |___/ |___/ |_|  \\_\\  \\___/  |_|  \\__,_| |_| |_|  \\__,_| (_) |_| |_|  \\__,_|"
    let g = "                                                                                       "
    

    type(`
            <p class="green cant_select">Copyright © 2024 kissroland.hu | Minden jog fenntartva. All rights reserved.</p>
            
            <pre class="cant_select">
                ${a} 
                ${b}
                ${c}
                ${d}
                ${e}
                ${f}
                ${g}
            </pre>

            <br>
            <p class="blue">Üdvözöllek a weboldalon!</p>
            <p class="orange">A parancsok listájához írd be, hogy <span class="blue">'help'</span></p>
            <br><br>
    `, 1.5)
}