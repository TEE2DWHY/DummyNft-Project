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