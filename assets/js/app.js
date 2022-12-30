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

function showNotification() {
    Notification.requestPermission((result) => {
        if (result === "granted") {
            navigator.serviceWorker.ready.then((registration) => {
                registration.showNotification("Vibration Sample", {
                    body: "Buzz! Buzz!",
                    image: "assets/img/favicon.png",
                    icon: "assets/img/favicon.png",
                    vibrate: [200, 100, 200, 100, 200, 100, 200],
                    tag: "vibration-sample",
                });
            });
        }
    });
}

const registerServiceWorker = async () => {
    const swRegistration = await navigator.serviceWorker.register('notifications-sw.js');
    return swRegistration;
}

const main = async () => {
    const swRegistration = await registerServiceWorker();
    console.log("notifications-sw.js Registered");
}

main()