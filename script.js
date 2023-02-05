let btn = document.getElementById("btn")

btn.addEventListener("click", () => {
    Notification.requestPermission().then(perm => {
        if(perm === "granted"){
            new Notification("Hello world", {
                body: "Hey, it's more text",
                image: "ford-mustang.jpg",
                icon: "logo-ford-mustang.png",
                vibrate: [100, 200, 100]
            });
        }
    })
})
