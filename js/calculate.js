function sell_submit() {
    let price = document.getElementById("price").value;
    price = price.toString().replaceAll(",", "");
    let city = document.getElementById("select-city").value;
    if (city === "انتخاب شهر") {
        alert("شهر مورد نظر خود را انتخاب کنید");
    } else if (!price) {
        alert("مبلغ مورد نظر خود را وارد کنید");
    } else if (isNaN(price)) {
        alert("مبلغ معتبر نیست");
    } else {
        cal_sell(parseInt(price), city);
    }
}

function cal_sell(price, city) {
    let c, nine_percent;
    if (city !== "تهران") {
        c = Math.ceil(price * 0.005);
        nine_percent = Math.ceil((c / 100) * 9);
    } else {
        c = Math.ceil(2 * (price * 0.005));
        nine_percent = Math.ceil((c / 100) * 9);
    }
    document.getElementById("price-Commission").innerHTML =
        Number(c)
            .toLocaleString("en-US", { style: "currency", currency: "USD" })
            .replace("$", "")
            .replace(".00", "") + " تومان";
    document.getElementById("price-tax").innerHTML =
        Number(nine_percent)
            .toLocaleString("en-US", { style: "currency", currency: "USD" })
            .replace("$", "")
            .replace(".00", "") + " تومان";
    document.getElementById("price-getBoth").innerHTML =
        Number(Math.ceil(c + nine_percent))
            .toLocaleString("en-US", { style: "currency", currency: "USD" })
            .replace("$", "")
            .replace(".00", "") + " تومان";

    myfadeIn("wrapper-price-boxs");
}

function rent_submit() {
    let rahn = document.getElementById("price_rahn").value;
    let ejare = document.getElementById("price_ejare").value;
    rahn = rahn.toString().replaceAll(",", "");
    ejare = ejare.toString().replaceAll(",", "");

    let city = document.getElementById("select-city").value;

    if (city === "انتخاب شهر") {
        alert("شهر مورد نظر خود را انتخاب کنید");
    } else if (!rahn || !ejare) {
        alert("مبلغ مورد نظر خود را وارد کنید");
    } else if (isNaN(ejare) || isNaN(rahn)) {
        alert("مبلغ معتبر نیست");
    } else {
        cal_rent(parseInt(rahn), parseInt(ejare), city);
    }
}

function cal_rent(rahn, ejare, city) {
    let c = (rahn / 1000000) * 6000;
    console.log(c);
    let nine_percent;
    if (city !== "تهران") {
        c += Math.ceil((ejare / 100) * 30);
        nine_percent = Math.ceil((c / 100) * 9);
    } else {
        c += Math.ceil((ejare / 100) * 30);
        c = Math.ceil(2 * c);
        nine_percent = Math.ceil((c / 100) * 9);
    }
    document.getElementById("price-Commission").innerHTML =
        Number(c)
            .toLocaleString("en-US", { style: "currency", currency: "USD" })
            .replace("$", "")
            .replace(".00", "") + " تومان";
    document.getElementById("price-tax").innerHTML =
        Number(nine_percent)
            .toLocaleString("en-US", { style: "currency", currency: "USD" })
            .replace("$", "")
            .replace(".00", "") + " تومان";
    document.getElementById("price-getBoth").innerHTML =
        Number(Math.ceil(c + nine_percent))
            .toLocaleString("en-US", { style: "currency", currency: "USD" })
            .replace("$", "")
            .replace(".00", "") + " تومان";

    myfadeIn("wrapper-price-boxs");
}

// add class
function addClass(ID, nameClass) {
    let arr;
    arr = document.getElementById(ID).className.split(" ");
    if (arr.indexOf(nameClass) == -1) {
        document.getElementById(ID).className += " " + nameClass;
    }
}

// end of add class

// remove class
function removeClass(ID, nameClass) {
    document.getElementById("myDIV");
    document.getElementById(ID).className = document
        .getElementById(ID)
        .className.replace(nameClass, "");
}

// end of remove calss

// fadeIn
function myfadeIn(ID) {
    let op = 0.1;
    let element = document.getElementById(ID);
    element.style.display = "flex";
    let timer = setInterval(function () {
        if (op >= 1) {
            clearInterval(timer);
        }
        element.style.opacity = op;
        element.style.filter = "alpha(opacity=" + op * 100 + ")";
        op += op * 0.1;
    }, 10);
}

// end of fadeIn

function fixNumbers(str) {
    const persianNumbers = ["۰", "۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹"];
    if (typeof str === "string") {
        for (let i = 0; i < 10; i++) {
            str = str.replaceAll(persianNumbers[i], i);
        }
    }
    return str;
}
function number_change_handler(e) {
    let element = document.getElementById(e);
    let val = fixNumbers(element.value);
    val = val.toString().replaceAll(",", "");
    if (isNaN(val)) {
        val = "";
    } else {
        val = Number(val).toLocaleString("en-US", { style: "currency", currency: "USD" });
        val = val.toString().replace("$", "");
        val = val.toString().replace(".00", "");
    }

    element.value = val;
}

function full_rent(value) {
    const out = Number(value)
        .toLocaleString("en-US", { style: "currency", currency: "USD" })
        .toString()
        .replace("$", "")
        .replace(".00", "");
    document.getElementById("full_ejare").innerHTML = out;
}

function full_rahn(value) {
    const out = Number(value)
        .toLocaleString("en-US", { style: "currency", currency: "USD" })
        .toString()
        .replace("$", "")
        .replace(".00", "");
    document.getElementById("full_rahn").innerHTML = out;
}

function col_one(rahn, ejare) {
    const e_rahn = document.getElementById("col_one_rahn");
    const e_ejare = document.getElementById("col_one_ejare");
    const r = Math.ceil(rahn / 100) * 80;
    const e = Math.ceil(ejare / 100) * 20;
    console.log("HI");
    e_rahn.innerHTML = Number(r)
        .toLocaleString("en-US", { style: "currency", currency: "USD" })
        .toString()
        .replace("$", "")
        .replace(".00", "");
    e_ejare.innerHTML = Number(e)
        .toLocaleString("en-US", { style: "currency", currency: "USD" })
        .toString()
        .replace("$", "")
        .replace(".00", "");
}

function col_two(rahn, ejare) {
    const e_rahn = document.getElementById("col_two_rahn");
    const e_ejare = document.getElementById("col_two_ejare");
    const r = Math.ceil(rahn / 100) * 60;
    const e = Math.ceil(ejare / 100) * 40;
    console.log("HI");
    e_rahn.innerHTML = Number(r)
        .toLocaleString("en-US", { style: "currency", currency: "USD" })
        .toString()
        .replace("$", "")
        .replace(".00", "");
    e_ejare.innerHTML = Number(e)
        .toLocaleString("en-US", { style: "currency", currency: "USD" })
        .toString()
        .replace("$", "")
        .replace(".00", "");
}
function col_three(rahn, ejare) {
    const e_rahn = document.getElementById("col_three_rahn");
    const e_ejare = document.getElementById("col_three_ejare");
    const r = Math.ceil(rahn / 100) * 40;
    const e = Math.ceil(ejare / 100) * 60;
    console.log("HI");
    e_rahn.innerHTML = Number(r)
        .toLocaleString("en-US", { style: "currency", currency: "USD" })
        .toString()
        .replace("$", "")
        .replace(".00", "");
    e_ejare.innerHTML = Number(e)
        .toLocaleString("en-US", { style: "currency", currency: "USD" })
        .toString()
        .replace("$", "")
        .replace(".00", "");
}
function col_four(rahn, ejare) {
    const e_rahn = document.getElementById("col_four_rahn");
    const e_ejare = document.getElementById("col_four_ejare");
    const r = Math.ceil(rahn / 100) * 20;
    const e = Math.ceil(ejare / 100) * 80;
    console.log("HI");
    e_rahn.innerHTML = Number(r)
        .toLocaleString("en-US", { style: "currency", currency: "USD" })
        .toString()
        .replace("$", "")
        .replace(".00", "");
    e_ejare.innerHTML = Number(e)
        .toLocaleString("en-US", { style: "currency", currency: "USD" })
        .toString()
        .replace("$", "")
        .replace(".00", "");
}

function change_submit() {
    const rahn = parseInt(document.getElementById("in_rahn").value.toString().replaceAll(",", ""));
    const ejare = parseInt(
        document.getElementById("in_ejare").value.toString().replaceAll(",", "")
    );

    if (!rahn || !ejare) {
        alert("مبلغ مورد نظر خود را وارد کنید");
    } else if (isNaN(ejare) || isNaN(rahn)) {
        alert("مبلغ معتبر نیست");
    }
    const mortgage_full = Math.round(ejare / 30000) * 1000000 + rahn;
    const rent_full = Math.ceil(rahn / 1000000) * 30000 + ejare;
    full_rahn(mortgage_full);
    col_one(mortgage_full, rent_full);
    col_two(mortgage_full, rent_full);
    col_three(mortgage_full, rent_full);
    col_four(mortgage_full, rent_full);
    // col_five(mortgage_full, rent_full);
    full_rent(rent_full);
    show_result_table();
}

function show_result_table() {
    document.getElementById("result_table").classList.remove("d-none");
}
