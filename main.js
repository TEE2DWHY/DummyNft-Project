function add() {
    var price = document.getElementById("price");
    var value = price.innerText;
    if (value <= 1) {
        document.getElementById("price").innerText = Number(value) + 0.13
    }
    else {
        alert("maximum amount available for minting exceeded!")
    }
}

function subtract() {
    var price = document.getElementById("price");
    var value = price.innerText;
    if (value >= 0.13) {
        document.getElementById("price").innerText = Number(value) - 0.13
    }
    else {
        alert("quantity cannot be less than 0!")
    }
}

/* Moralis init code */
const serverUrl = "https://na9xpnhehmew.usemoralis.com:2053/server";
const appId = "RRA42KNb8t818QjsYE8qbnOgeeIEGeuSNEVLuUZg";
Moralis.start({ serverUrl, appId });

async function login() {
    let user = Moralis.User.current();
    if (!user) {
        user = await Moralis.authenticate({
            signinMessage: "Autheticate DummyNFT",
            provider: "walletconnect"
        })
            .then(function (user) {
                console.log("logged in user:", user);
                console.log(user.get("ethAddress"));
            })
            .catch(function (error) {
                console.log(error);
            });
    }
}

document.getElementById("btn-login").onclick = login;