console.log("Hello World")

document.getElementById('notifications').addEventListener("click", () => {
    Notification.requestPermission().then(result => {
        if (result == "granted") {
            console.log("Permiso otorgado")
            randomNotification();
        } else {
            console.log("No se otorgo el permiso")
        }
    })
})

function randomNotification() {
    let notifTitle = "Este es el titulo"
    let notifBody = "Contrenido de la notificación"
    let notifImg = "assets/img/favicon.png"
    let options = {
        body: notifBody,
        icon: notifImg,
    }

    var notif = new Notification(notifTitle, options)

    notif.onclick = () => {
        window.open("https://www.google.com/", "_blank")
    }
}