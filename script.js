/* increments phn handler */
document.getElementById('increaseBtn').addEventListener('click', function () {

    const pnhText = document.getElementById('pnhText').value;
    const numberOfPhn = parseFloat(pnhText);
    const currentNoPhn = numberOfPhn + 1;
    document.getElementById('pnhText').value = currentNoPhn;

    // const phnAmount = document.getElementById('phnAmount').innerText;
    // const newPhnAmount = parseFloat(phnAmount);
    // const totalPhnAmount = newPhnAmount + 1200;
    // document.getElementById('phnAmount').innerText = totalPhnAmount;
    changeText('phnAmount');
    // const subAmount = document.getElementById('subtotalAmount').innerText;
    // const totalSubtotal = parseFloat(subAmount);
    // const totalSubAmount = totalSubtotal + 1200;
    // document.getElementById('subtotalAmount').innerText = totalSubAmount;
    changeText('subtotalAmount');
    // const totalAmount = document.getElementById('totalAmount').innerText;
    // const total = parseFloat(totalAmount);
    // const totalDolar = total + 1200;
    // document.getElementById('totalAmount').innerText = totalDolar;
    changeText('totalAmount');
});

function changeText(id){
    const Amount = document.getElementById(id).innerText;
    const newAmount = parseFloat(Amount);
    const totalAmount = newAmount + 1200;
    document.getElementById(id).innerText = totalAmount;
}

/* decrements phn handler */
document.getElementById('decrementBtn').addEventListener('click', function () {

    const pnhText = document.getElementById('pnhText').value;
    const numberOfPhn = parseFloat(pnhText);
    if (numberOfPhn > 0) {
        const currentNoPhn = numberOfPhn - 1;
        document.getElementById('pnhText').value = currentNoPhn;
    }
    

    const phnAmount = document.getElementById('phnAmount').innerText;
    const newPhnAmount = parseFloat(phnAmount);
    if (newPhnAmount > 0) {
        const totalPhnAmount = newPhnAmount - 1200;
        document.getElementById('phnAmount').innerText = totalPhnAmount;
    }

    const subAmount = document.getElementById('subtotalAmount').innerText;
    const totalSubtotal = parseFloat(subAmount);
    if (newPhnAmount != 0) {
        const totalSubAmount = totalSubtotal - 1200;
        document.getElementById('subtotalAmount').innerText = totalSubAmount;
    }

    const totalAmount = document.getElementById('totalAmount').innerText;
    const total = parseFloat(totalAmount);
    if (newPhnAmount != 0) {
        const totalDolar = total - 1200;
        document.getElementById('totalAmount').innerText = totalDolar;
    }
    
});


/* case handler area */

document.getElementById('caseIncreaseBtn').addEventListener('click', function () {

    const caseText = document.getElementById('caseText').value;
    const numberOfCase = parseFloat(caseText);
    const currentNoCase = numberOfCase + 1;
    document.getElementById('caseText').value = currentNoCase;

    const caseAmount = document.getElementById('caseAmount').innerText;
    const newCaseAmount = parseFloat(caseAmount);
    const totalCaseAmount = newCaseAmount + 60;
    document.getElementById('caseAmount').innerText = totalCaseAmount;

    const subAmount = document.getElementById('subtotalAmount').innerText;
    const totalSubtotal = parseFloat(subAmount);
    const totalSubAmount = totalSubtotal + 60;
    document.getElementById('subtotalAmount').innerText = totalSubAmount;

    const totalAmount = document.getElementById('totalAmount').innerText;
    const total = parseFloat(totalAmount);
    const totalDolar = total + 60;
    document.getElementById('totalAmount').innerText = totalDolar;
});

/* decrements case handler */
document.getElementById('caseDecrementBtn').addEventListener('click', function () {

    const caseText = document.getElementById('caseText').value;
    const numberOfCase = parseFloat(caseText);
    if (numberOfCase > 0) {
        const currentNoCase = numberOfCase - 1;
        document.getElementById('caseText').value = currentNoCase;
    }


    const caseAmount = document.getElementById('caseAmount').innerText;
    const newCaseAmount = parseFloat(caseAmount);
    if (newCaseAmount > 0) {
        const totalCaseAmount = newCaseAmount - 60;
        document.getElementById('caseAmount').innerText = totalCaseAmount;
    }

    const subAmount = document.getElementById('subtotalAmount').innerText;
    const totalSubtotal = parseFloat(subAmount);
    if (newCaseAmount != 0) {
        const totalSubAmount = totalSubtotal - 60;
        document.getElementById('subtotalAmount').innerText = totalSubAmount;
    }


    const totalAmount = document.getElementById('totalAmount').innerText;
    const total = parseFloat(totalAmount);
    if (newCaseAmount != 0) {
        const totalDolar = total - 60;
        document.getElementById('totalAmount').innerText = totalDolar;
    }

});