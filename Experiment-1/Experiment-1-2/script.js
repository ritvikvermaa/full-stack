let balance = 5000;

function deposit() {
    let amount = document.getElementById("amount").value;

    if (amount <= 0) {
        alert("Enter a valid amount");
        return;
    }

    balance = balance + Number(amount);
    document.getElementById("balance").innerText = balance;
    document.getElementById("message").innerText = "Deposit successful";
    document.getElementById("amount").value = "";
}

function withdraw() {
    let amount = document.getElementById("amount").value;

    if (amount <= 0) {
        alert("Enter a valid amount");
        return;
    }

    if (Number(amount) > balance) {
        alert("Insufficient balance");
        return;
    }

    balance = balance - Number(amount);
    document.getElementById("balance").innerText = balance;
    document.getElementById("message").innerText = "Withdrawal successful";
    document.getElementById("amount").value = "";
}
