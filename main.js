function add() {
    var price = document.getElementById("price");
    var value = price.innerText;
    if (value <= 1) {
        document.getElementById("price").innerText = Number(value) + 0.001
    }
    else {
        alert("maximum amount available for minting exceeded!")
    }
}

function subtract() {
    var price = document.getElementById("price");
    var value = price.innerText;
    if (value >= 0.001) {
        document.getElementById("price").innerText = Number(value) - 0.001
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
            provider: "walletconnect",
            signingMessage: "Authenticate DummyNFT",
        })
            .then(function (user) {
                console.log("logged in user:", user);
                console.log(user.get("ethAddress"));
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    // get ETH native balance for a given address
    const balance = await Moralis.Web3API.account.getNativeBalance();
    document.getElementById('balance').innerHTML = balance['balance'] / 10 ** 18;
}

async function send() {
    const options = {
        type: "native",
        amount: Moralis.Units.ETH(document.getElementById("price").innerHTML),
        receiver: "0x3422AcC76ea4cBc519411AabBB89d40fad4B917d",
    };
    const transaction = await Moralis.transfer(options);
    const result = await transaction.wait();

}

async function logOut() {
    await Moralis.User.logOut();
    console.log("logged out");
}

document.getElementById("btn-login").onclick = login;
document.getElementById("btn-logout").onclick = logOut;


/* Footer */
const year = new Date().getFullYear()

document.getElementById("year").innerHTML = year