function calculate() {
    const totalAmount = document.getElementById("total-amount");
    const principalInput = document.getElementById("principal");
    const rateInput = document.getElementById("rate");
    const yearsInput = document.getElementById("years");
    // putting them inside the function so it refreshes every click, idk if it will work otherwise

    let principal = Number(principalInput.value);
    let rate = Number(rateInput.value / 100); // as input is in %
    let years = Number(yearsInput.value);
    let n = 1;

    if(principal<0 || isNaN(principal)) {
        principal = 0;
        principalInput.value = 0;
    }
    if(rate<0 || isNaN(rate)) {
        rate = 0;
        rateInput.value = 0;
    }
    if(years<0 || isNaN(years)) {   
        years = 0;
        yearsInput.value = 0;
    }

    const result = principal * Math.pow((1 + rate / n), n * years ); // n is the number of times interest is compounded per year

    totalAmount.textContent = `₹${result.toFixed(2)}`; // to fixed rounds result to 2 decimal places

}