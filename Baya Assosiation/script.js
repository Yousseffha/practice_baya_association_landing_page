let xMark = document.getElementById("xMark")
let Bars = document.getElementById("bars")
let Menu = document.getElementById("menu")
let logo = document.getElementById("logo")
let landing = document.getElementById("landing")
let about = document.getElementById("about")
let joinUs = document.getElementById("joinUs")
let contact = document.getElementById("contact")
let mobileAbout = document.getElementById("mobileAbout")
let mobileJoinUs = document.getElementById("mobileJoinUs")
let mobileContact = document.getElementById("mobileContact")
let don = document.getElementById("don")
let footer = document.getElementById("footer")

Bars.onclick = function() {
    Bars.style.display = "none"
    xMark.style.display = "block"
    Menu.style.display = "flex"
    logo.style.display = "none"
    landing.style.display = "none"
    about.style.display = "none"
    joinUs.style.display = "none"
    contact.style.display = "none"
    don.style.display = "none"
    footer.style.display = "none"
    document.body.style.background = "#d1ecf9"

    mobileAbout.onclick = function() {
        Bars.style.display = "block"
        xMark.style.display = "none"
        Menu.style.display = "none"
        logo.style.display = "block"
        landing.style.display = "block"
        about.style.display = "block"
        joinUs.style.display = "block"
        contact.style.display = "block"
        document.body.style.background = "transparent"
    }

    mobileJoinUs.onclick = function() {
        Bars.style.display = "block"
        xMark.style.display = "none"
        Menu.style.display = "none"
        logo.style.display = "block"
        landing.style.display = "block"
        about.style.display = "block"
        joinUs.style.display = "block"
        contact.style.display = "block"
        document.body.style.background = "transparent"
    }

    mobileContact.onclick = function() {
        Bars.style.display = "block"
        xMark.style.display = "none"
        Menu.style.display = "none"
        logo.style.display = "block"
        landing.style.display = "block"
        about.style.display = "block"
        joinUs.style.display = "block"
        contact.style.display = "block"
        document.body.style.background = "transparent"
    }
}

xMark.onclick = function() {
    xMark.style.display = "none"
    Bars.style.display = "block"
    Menu.style.display = "none"
    logo.style.display = "block"
    landing.style.display = "block"
    about.style.display = "block"
    joinUs.style.display = "block"
    contact.style.display = "block"
    don.style.display = "block"
    footer.style.display = "block"
    document.body.style.background = "transparent"
}