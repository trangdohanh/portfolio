var currencySelector = document.getElementById('currencySelector');
var currencies = [];
var currency, rate, tax, category;
var provinceSelector = document.getElementById('provinceSelector');
var categorySelector = document.getElementById('categorySelector');

var item, product, price, quantity, subtotal, taxed, total, retrieved;

var foodTotal = 0;
var healthTotal = 0;
var clothesTotal = 0;
var houseTotal = 0;
var decorTotal = 0;
var otherTotal = 0;

var food = 0;
var health = 0;
var clothes = 0;
var house = 0;
var decor = 0;
var other = 0;

var tripSubtotal = 0;
var tripTaxed = 0;
var tripTotal = 0;

var listSections = document.querySelectorAll('.listSection');


//Start of code from https://www.w3schools.com/howto/howto_js_tabs.asp
function openPage(evt, pageName){
    var i, tabContent, tabLink;
    tabContent = document.getElementsByClassName("tabContent");
    for (i = 0; i < tabContent.length; i++) {
      tabContent[i].style.display = "none";
    }
    tabLink = document.getElementsByClassName("tabLink");
    for (i = 0; i < tabLink.length; i++) {
      tabLink[i].className = tabLink[i].className.replace(" active", "");
    }
    document.getElementById(pageName).style.display = "grid";
    evt.currentTarget.className += " active";
}
document.getElementById("defaultOpen").click();
//End of code from https://www.w3schools.com/howto/howto_js_tabs.asp


// Swipe summary section
// Start of code from https://codepen.io/jtangelder/pen/jOZezm
var mySummary = document.getElementById('summary');
var mc = new Hammer(mySummary);
mc.get('pan').set({ direction: Hammer.DIRECTION_ALL });
mc.on("panup tap", function() {
    mySummary.style.bottom = "5.5rem";
    document.getElementById('openForm').style.bottom = "20.5rem";
});
mc.on("pandown", function() {
    mySummary.style.bottom = "-3.5rem";
    document.getElementById('openForm').style.bottom = "11.5rem";
});
// End of code from https://codepen.io/jtangelder/pen/jOZezm


// Template for saved items
function retrieveSaved() {
    retrieved = JSON.parse(localStorage.getItem('savedItem'));

    let savedItem = document.createElement('div')
    savedItem.classList.add('savedItem')
    savedItem.classList.add('grid')
    savedItem.innerHTML = `<p class="savedDate">${retrieved.date}</p>
                            <p class="savedTotal">${retrieved.total}</p>
                            <div><h4 class="truncate">Food and beverages</h4><p class="truncate">${retrieved.food}</p></div>
                            <div><h4 class="truncate">Health and beauty</h4><p class="truncate">${retrieved.health}</p></div>
                            <div><h4 class="truncate">Clothing, footwear, and accessories</h4><p class="truncate">${retrieved.clothes}</p></div>
                            <div><h4 class="truncate">Household item</h4><p class="truncate">${retrieved.house}</p></div>
                            <div><h4 class="truncate">Furniture and household items</h4><p class="truncate">${retrieved.decor}</p></div>
                            <div><h4 class="truncate">Other</h4><p class="truncate">${retrieved.other}</p></div>`;
                      
    let values = [retrieved.food, retrieved.health, retrieved.clothes, retrieved.house, retrieved.decor, retrieved.other]
    for (let i = 0; i < 6; i++){
        if (values[i] == "") {
            savedItem.children[i+2].style.display = "none";
        }
    }

    document.getElementById("savedList").appendChild(savedItem)
    return retrieved
}


// Latest currency exchange rates from https://frankfurter.dev/
// Get available currencies
function getCurrencies() {
    const options = {method: 'GET'};
    let url = new URL('https://api.frankfurter.dev/v1/currencies');
    fetch(url.href, options)
      .then(response => response.json())
      .then(response => {      
        currencies = Object.entries(response).map(([key, value]) => {
          return {label: value, value: key}
        });
        currencies.forEach((currency) => { 
          if (currency.value !== 'CAD') {
            let currencyItem = document.createElement('option')
            currencyItem.setAttribute('value', currency.value)
            currencyItem.innerHTML = `${currency.label}`
            currencySelector.appendChild(currencyItem);
          }
        })
        currency = currencySelector.value;
        return currency;
      })
      .catch(err => console.error(err));
}
getCurrencies();


// Get exchange rates
function getRates() {
    const options = {method: 'GET'};
    let url = new URL('https://api.frankfurter.dev/v1/latest?base=CAD');
    fetch(url.href, options)
      .then(response => response.json())
      .then(response => {
        rate = response.rates[currency]
        return rate;
      })
      .catch(err => console.error(err));
}


currencySelector.addEventListener("change", () => {
    currency = currencySelector.value;
    getRates()
    onboard()
    return currency
})

provinceSelector.addEventListener("change", () => {
    tax = provinceSelector.value;
    document.querySelector('#tax').innerHTML = `HST ${tax*100}%`
    onboard()
    return tax;
})

categorySelector.addEventListener("change", () => {
    category = categorySelector.value;
    document.getElementById("resetBtn").disabled = false;
    return category;
})


// Calculate
function calculate() {
    subtotal = Math.round((price * quantity + Number.EPSILON) * 100) / 100;
    if (category === "food") {
      taxed = 0
    } else {
      taxed = Math.round((subtotal * tax + Number.EPSILON) * 100) / 100;
    }
    total = subtotal + taxed
    return subtotal, taxed, total;
}


// Format prices and totals
function formatCAD(e) {
    let formatted = new Intl.NumberFormat('en-CA',{style:'currency', currency:'CAD'}).format(e)
    return formatted;
}

function formatExch(e) {
    let formatted = new Intl.NumberFormat('en-CA',{style:'currency', currency: currency}).format(e)
    return formatted;
}


// Preview information
function previewInfo() {
    price = document.getElementById('price').value
    quantity = document.getElementById('quantity').value
    product = document.getElementById('product').value

    document.getElementById("resetBtn").disabled = false;

    if (price !== "" && quantity !== "") {
        document.getElementById("addBtn").disabled = false;

        calculate()

        if (category === "food") {
            document.getElementById("previewInfo").innerHTML = `For ${quantity} ${product}, you'll have to pay ${formatCAD(total)}, no sales tax, which totals around ${formatExch(Math.round((total * rate + Number.EPSILON) * 100) / 100)}.`;
        } else {
            document.getElementById("previewInfo").innerHTML = `For ${quantity} ${product}, you'll have to pay ${formatCAD(total)}, ${formatCAD(taxed)} sales tax included, which totals around ${formatExch(Math.round((total * rate + Number.EPSILON) * 100) / 100)}.`;
        }
    }
}


function addItem() {
    if (price !== undefined && quantity !== undefined) {
        item = document.createElement('div')
        item.classList.add('item')
        item.classList.add('grid')
        item.innerHTML = `<p class="itemProduct">${product}</p>
                            <p class="itemPrice">${formatCAD(price)}</p>
                            <p class="itemQuantity">x ${quantity}</p>
                            <p class="itemTaxed">HST ${formatCAD(taxed)}</p>
                            <button class="itemRemove btn btnSecondary smallBtn" onclick="removeItem(this)">Remove</button>
                            <p class="itemTotal">${formatCAD(total)} <span>(${formatExch(Math.round((total * rate + Number.EPSILON) * 100) / 100)})</span></p>
                            <p class="hidden">${category}</p>`

        for (i = 0; i < listSections.length; i++) {
            if (listSections[i].id == category) {
                document.getElementById(category).appendChild(item);
                showCategory()
            }
        }

        resetForm()
        closeForm()
        addCategory()
        calculateTrip()
        allowSave()
    }
}


function addCategory() {
    if (category == "food") {
        foodTotal += total;
        food += subtotal;
        document.getElementById("foodTotal").innerHTML = `${formatCAD(foodTotal)} <span>(${formatExch(Math.round((foodTotal * rate + Number.EPSILON) * 100) / 100)})</span>`
    }
    if (category == "health") {
        healthTotal += total;
        health += subtotal;
        document.getElementById("healthTotal").innerHTML = `${formatCAD(healthTotal)} <span>(${formatExch(Math.round((healthTotal * rate + Number.EPSILON) * 100) / 100)})</span>`
    }
    if (category == "clothes") {
        clothesTotal += total;
        clothes += subtotal;
        document.getElementById("clothesTotal").innerHTML = `${formatCAD(clothesTotal)} <span>(${formatExch(Math.round((clothesTotal * rate + Number.EPSILON) * 100) / 100)})</span>`   
    }
    if (category == "house") {
        houseTotal += total;
        house += subtotal;
        document.getElementById("houseTotal").innerHTML = `${formatCAD(houseTotal)} <span>(${formatExch(Math.round((houseTotal * rate + Number.EPSILON) * 100) / 100)})</span>`
    }
    if (category == "decor") {
        decorTotal += total;
        decor += subtotal;
        document.getElementById("decorTotal").innerHTML = `${formatCAD(decorTotal)} <span>(${formatExch(Math.round((decorTotal * rate + Number.EPSILON) * 100) / 100)})</span>`
    }
    if (category == "other") {
        otherTotal += total;
        other += subtotal;
        document.getElementById("otherTotal").innerHTML = `${formatCAD(otherTotal)} <span>(${formatExch(Math.round((otherTotal * rate + Number.EPSILON) * 100) / 100)})</span>`
    }

    return foodTotal, healthTotal, clothesTotal, houseTotal, decorTotal, otherTotal, food, health, clothes, house, decor, other;
}


function subtractCategory() {
    if (category == "food") {
        foodTotal -= total;
        food -= subtotal;
        document.getElementById("foodTotal").innerHTML = `${formatCAD(foodTotal)} <span>(${formatExch(Math.round((foodTotal * rate + Number.EPSILON) * 100) / 100)})</span>`
    }
    if (category == "health") {
        healthTotal -= total;
        health -= subtotal;
        document.getElementById("healthTotal").innerHTML = `${formatCAD(healthTotal)} <span>(${formatExch(Math.round((healthTotal * rate + Number.EPSILON) * 100) / 100)})</span>`
    }
    if (category == "clothes") {
        clothesTotal -= total;
        clothes -= subtotal;
        document.getElementById("clothesTotal").innerHTML = `${formatCAD(clothesTotal)} <span>(${formatExch(Math.round((clothesTotal * rate + Number.EPSILON) * 100) / 100)})</span>`
        
    }
    if (category == "house") {
        houseTotal -= total;
        house -= subtotal;
        document.getElementById("houseTotal").innerHTML = `${formatCAD(houseTotal)} <span>(${formatExch(Math.round((houseTotal * rate + Number.EPSILON) * 100) / 100)})</span>`
    }
    if (category == "decor") {
        decorTotal -= total;
        decor -= subtotal;
        document.getElementById("decorTotal").innerHTML = `${formatCAD(decorTotal)} <span>(${formatExch(Math.round((decorTotal * rate + Number.EPSILON) * 100) / 100)})</span>`
    }
    if (category == "other") {
        otherTotal -= total;
        other -= subtotal;
        document.getElementById("otherTotal").innerHTML = `${formatCAD(otherTotal)} <span>(${formatExch(Math.round((otherTotal * rate + Number.EPSILON) * 100) / 100)})</span>`
    }

    return foodTotal, healthTotal, clothesTotal, houseTotal, decorTotal, otherTotal, food, health, clothes, house, decor, other;
}


// Calculate total
function calculateTrip() {
    tripSubtotal = Math.round((food + health + clothes + house + decor + other + Number.EPSILON) * 100) / 100
    tripTaxed = Math.round((health*tax + clothes*tax + house*tax + decor*tax + other*tax + Number.EPSILON) * 100) / 100;
    tripTotal = Math.round((foodTotal + healthTotal + clothesTotal + houseTotal + decorTotal + otherTotal + Number.EPSILON) * 100) / 100
    
    document.getElementById("tripSubtotal").innerHTML = `${formatCAD(tripSubtotal)} <span>(${formatExch(Math.round((tripSubtotal * rate + Number.EPSILON) * 100) / 100)})</span>`
    document.getElementById("tripTaxed").innerHTML = `${formatCAD(tripTaxed)} <span>(${formatExch(Math.round((tripTaxed * rate + Number.EPSILON) * 100) / 100)})</span>`
    document.getElementById("tripTotal").innerHTML = `${formatCAD(tripTotal)} <span>(${formatExch(Math.round((tripTotal * rate + Number.EPSILON) * 100) / 100)})</span>`

    return tripTotal;
}


// Remove items
function removeItem(e) {
    price = e.parentElement.children[1].innerHTML.replace(/\D+/, '')
    quantity = e.parentElement.children[2].innerHTML.replace(/\D+/, '')
    taxed = e.parentElement.children[3].innerHTML.replace(/\D+/, '')
    category = e.parentElement.children[6].innerHTML

    subtotal = Number(price) * Number(quantity);
    total = Number(subtotal) + Number(taxed);

    subtractCategory()
    calculateTrip()
    e.parentElement.remove()
    showCategory()
    allowSave()
}


// Only show categories with children items
function showCategory() {
    for (i = 0; i < listSections.length; i++) {
        if (listSections[i].children[2]) {
        listSections[i].style.display = "grid";
        } else {
        listSections[i].style.display = "none";
        }
    }
}
showCategory()


function openForm() {
    document.getElementById("overlay").style.display = "block";
    document.getElementById("openForm").style.display = "none";
    document.getElementById("closeForm").style.display = "flex";
}

function closeForm() {
    document.getElementById("overlay").style.display = "none";
    document.getElementById("openForm").style.display = "flex";
    document.getElementById("closeForm").style.display = "none";
    document.getElementById("resetBtn").disabled = true;
    document.getElementById("addBtn").disabled = true;
}

function resetForm() {
    document.querySelector('form').reset();
    document.getElementById('previewInfo').innerHTML = ""
    document.getElementById("resetBtn").disabled = true;
    document.getElementById("addBtn").disabled = true;
}


// Save current trip
function save() {
    const d = new Date();
    let today = d.toLocaleDateString();
  
    const trip = {
      date: today,
      currency: currencySelector.selectedIndex,
      province: provinceSelector.selectedIndex,
      total: document.getElementById("tripTotal").innerHTML,
      food: document.getElementById("foodTotal").innerHTML,
      health: document.getElementById("healthTotal").innerHTML,
      clothes: document.getElementById("clothesTotal").innerHTML,
      house: document.getElementById("houseTotal").innerHTML,
      decor: document.getElementById("decorTotal").innerHTML,
      other: document.getElementById("otherTotal").innerHTML,
    }

    localStorage.setItem('savedItem', JSON.stringify(trip));
  
    retrieveSaved()
    document.getElementById("open").click();
}


// Enable save button
function allowSave() {
    if (tripTotal !== 0) {
        document.getElementById("saveTrip").disabled = false;
        document.getElementById("newTrip").disabled = false;
    } else{
        document.getElementById("saveTrip").disabled = true;
        document.getElementById("newTrip").disabled = true;
    }
}
allowSave()


// Load information from previous trip
function loadSaved() {
    if(typeof(Storage)!=="undefined"){
        if(localStorage.hasOwnProperty("savedItem")){
            retrieveSaved()

            currencySelector.selectedIndex = retrieved.currency;
            currency = currencySelector.value;
            getRates()

            provinceSelector.selectedIndex = retrieved.province;
            tax = provinceSelector.value;

            return currency, tax;
        }
    } else{ 
        console.log("nothing stored");
    }
}


// Check if the currency and province are saved
function checkSaved() {
    if(typeof(Storage)!=="undefined"){
        if(localStorage.hasOwnProperty("savedItem")){
            retrieved = JSON.parse(localStorage.getItem('savedItem'));
            if (provinceSelector.selectedIndex == retrieved.province && currencySelector.selectedIndex == retrieved.currency){
                document.getElementById("onboard").classList.remove("start");
                document.getElementById("list").children[0].classList.remove("startHide")
                document.getElementById("openForm").disabled = false;
            }
        }
    } else{ 
        console.log("nothing stored");
    }
}


// Turn onboarding form to the header
function onboard() {
    if (currencySelector.value !== " " && provinceSelector.value !== " ") {
        document.getElementById("onboard").classList.remove("start");
        document.getElementById("list").children[0].classList.remove("startHide")
        document.getElementById("openForm").disabled = false;
    } 
}


document.querySelector('body').onload = function(){
    loadSaved()
    checkSaved()
}