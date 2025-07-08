let exch = 0;
let hst = 0;

let foodC = 0;
let foodE = 0;
let healthC = 0;
let healthCT = 0;
let healthE = 0;
let healthET = 0;
let clothesC = 0;
let clothesCT = 0;
let clothesE = 0;
let clothesET = 0;
let houseC = 0;
let houseCT = 0;
let houseE = 0;
let houseET = 0;
let otherC = 0;
let otherCT = 0;
let otherE = 0;
let otherET = 0;
let subC = 0;
let subE = 0;
let taxC = 0;
let taxE = 0;
let totalC = 0;
let totalE = 0;

let fCAD = document.getElementById("fCAD");
let fExch = document.getElementById("fExch");
let hCAD = document.getElementById("hCAD");
let hExch = document.getElementById("hExch");
let cCAD = document.getElementById("cCAD");
let cExch = document.getElementById("cExch");
let iCAD = document.getElementById("iCAD");
let iExch = document.getElementById("iExch");
let oCAD = document.getElementById("oCAD");
let oExch = document.getElementById("oExch");
let subCAD = document.getElementById("subCAD");    
let subExch = document.getElementById("subExch");
let taxCAD = document.getElementById("taxCAD");
let taxExch = document.getElementById("taxExch");
let totalCAD = document.getElementById("totalCAD"); 
let totalExch = document.getElementById("totalExch");

var currencies = [];
var currencySelector = document.getElementById('dropCurrency');
var rate;

let unit = document.getElementById("dropCurrency").value;
let prov = document.getElementById("dropProvince").value;


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
      selected = currencySelector.value;
      return selected;
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
      exch = response.rates[selected]
      return exch;
    })
    .catch(err => console.error(err));
}

currencySelector.addEventListener("change", () => {
  selected = currencySelector.value;
  getRates()
  return selected
})


//Open and close sections
let openForm = () => {
  document.getElementById("myInput").style.display = "grid";
}
let closeForm = () => {
  document.getElementById("myInput").style.display = "none";
}

//Start of code from https://codepen.io/jtangelder/pen/jOZezm
var mySummary = document.getElementById('summary');
var mc = new Hammer(mySummary);
mc.get('pan').set({ direction: Hammer.DIRECTION_ALL });
mc.on("panup tap", function() {
    mySummary.style.bottom = "3.5rem";
});
mc.on("pandown", function() {
    mySummary.style.bottom = "-12.5rem";
});
//End of code from https://codepen.io/jtangelder/pen/jOZezm

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

let updateCurrency = () => {
  let unit = document.getElementById("dropCurrency").value;

  let text = "For nothing, you have to pay 0 CAD, which is 0 " + unit; 
  conversion.innerHTML = text;

  subCAD.innerHTML = subC + " CAD";
  subE = Math.round((subC * exch + Number.EPSILON) * 100) / 100;
  subExch.innerHTML = subE + " " + unit;
  
  taxCAD.innerHTML = taxC + " CAD";
  taxE = Math.round((taxC * exch + Number.EPSILON) * 100) / 100;
  taxExch.innerHTML = taxE + " " + unit;

  totalCAD.innerHTML = totalC + " CAD";
  totalE = Math.round((totalC * exch + Number.EPSILON) * 100) / 100;
  totalExch.innerHTML = totalE + " " + unit;
}

let updateProvince = () => {
  let prov = document.getElementById("dropProvince").value;
  let tax = document.getElementById("taxRate");
  if(prov == "five"){
    tax.innerHTML = "5%";
  }
  if(prov == "eleven"){
    tax.innerHTML = "11%";
  }
  if(prov == "twelve"){
    tax.innerHTML = "12%";
  }
  if(prov == "thirteen"){
    tax.innerHTML = "13%";
  }
  if(prov == "fourteen"){
    tax.innerHTML = "14.975%";
  }
  if(prov == "fifteen"){
    tax.innerHTML = "15%";
  }
}

let previewInput = () => {
  let product = document.getElementById("product").value;
  let price = document.getElementById("price").value;
  let quantity = document.getElementById("quantity").value;
  
  let unit = document.getElementById("dropCurrency").value;

  let cat = document.getElementById("dropCategory").value;
  let prov = document.getElementById("dropProvince").value;

  if(prov == "five"){
    hst = 0.05;
    if(cat == "food"){
      let text = "For " + quantity + " " + product + ", you have to pay " + Math.round((price * quantity + Number.EPSILON) * 100) / 100 + " CAD, which is around " + Math.round((price * quantity * exch + Number.EPSILON) * 100) / 100 + " " + unit;
      conversion.innerHTML = text;
    } else{
      let text = "For " + quantity + " " + product + ", you have to pay " + Math.round((price * quantity + Number.EPSILON) * 100) / 100 + " CAD, which is around " + Math.round((price * quantity * exch + Number.EPSILON) * 100) / 100 + " " + unit + ", plus " + Math.round((price * quantity * hst + Number.EPSILON) * 100) / 100 + " CAD in tax";
      conversion.innerHTML = text;
    }
  }
  if(prov == "eleven"){
    hst = 0.11;
    if(cat == "food"){
      let text = "For " + quantity + " " + product + ", you have to pay " + Math.round((price * quantity + Number.EPSILON) * 100) / 100 + " CAD, which is around " + Math.round((price * quantity * exch + Number.EPSILON) * 100) / 100 + " " + unit;
      conversion.innerHTML = text;
    } else{
      let text = "For " + quantity + " " + product + ", you have to pay " + Math.round((price * quantity + Number.EPSILON) * 100) / 100 + " CAD, which is around " + Math.round((price * quantity * exch + Number.EPSILON) * 100) / 100 + " " + unit + ", plus " + Math.round((price * quantity * hst + Number.EPSILON) * 100) / 100 + " CAD in tax";
      conversion.innerHTML = text;
    }
  }
  if(prov == "twelve"){
    hst = 0.12;
    if(cat == "food"){
      let text = "For " + quantity + " " + product + ", you have to pay " + Math.round((price * quantity + Number.EPSILON) * 100) / 100 + " CAD, which is around " + Math.round((price * quantity * exch + Number.EPSILON) * 100) / 100 + " " + unit;
      conversion.innerHTML = text;
    } else{
      let text = "For " + quantity + " " + product + ", you have to pay " + Math.round((price * quantity + Number.EPSILON) * 100) / 100 + " CAD, which is around " + Math.round((price * quantity * exch + Number.EPSILON) * 100) / 100 + " " + unit + ", plus " + Math.round((price * quantity * hst + Number.EPSILON) * 100) / 100 + " CAD in tax";
      conversion.innerHTML = text;
    }
  }
  if(prov == "thirteen"){
    hst = 0.13;
    if(cat == "food"){
      let text = "For " + quantity + " " + product + ", you have to pay " + Math.round((price * quantity + Number.EPSILON) * 100) / 100 + " CAD, which is around " + Math.round((price * quantity * exch + Number.EPSILON) * 100) / 100 + " " + unit;
      conversion.innerHTML = text;
    } else{
      let text = "For " + quantity + " " + product + ", you have to pay " + Math.round((price * quantity + Number.EPSILON) * 100) / 100 + " CAD, which is around " + Math.round((price * quantity * exch + Number.EPSILON) * 100) / 100 + " " + unit + ", plus " + Math.round((price * quantity * hst + Number.EPSILON) * 100) / 100 + " CAD in tax";
      conversion.innerHTML = text;
    }
  }
  if(prov == "fifteen"){
    hst = 0.15;
    if(cat == "food"){
      let text = "For " + quantity + " " + product + ", you have to pay " + Math.round((price * quantity + Number.EPSILON) * 100) / 100 + " CAD, which is around " + Math.round((price * quantity * exch + Number.EPSILON) * 100) / 100 + " " + unit;
      conversion.innerHTML = text;
    } else{
      let text = "For " + quantity + " " + product + ", you have to pay " + Math.round((price * quantity + Number.EPSILON) * 100) / 100 + " CAD, which is around " + Math.round((price * quantity * exch + Number.EPSILON) * 100) / 100 + " " + unit + ", plus " + Math.round((price * quantity * hst + Number.EPSILON) * 100) / 100 + " CAD in tax";
      conversion.innerHTML = text;
    }
  }
}

//Reset input
let clearInput = () => {
  let unit = document.getElementById("dropCurrency").value;
  let text = "For nothing, you have to pay 0 CAD, which is 0 " + unit; 
  conversion.innerHTML = text;
}

//Add an item
let checkForm = () => {
  let product = document.getElementById("product").value;
  let price = document.getElementById("price").value;
  let quantity = document.getElementById("quantity").value;
  let unit = document.getElementById("dropCurrency").value;

  document.getElementById("myInput").style.display = "none";

  let cat = document.getElementById("dropCategory").value;
  let prov = document.getElementById("dropProvince").value;

  if(prov == "five"){
    hst = 0.05;
    if(cat == "food"){
      document.getElementById("listFood").style.display = "grid";
      let fpd = product; 
      let fp = "$" + price + "/item"; 
      let ft = "HST $0";
      let fq = quantity; 
      let fC = Math.round((price * quantity + Number.EPSILON) * 100) / 100; 
      let fE = Math.round((price * quantity * exch + Number.EPSILON) * 100) / 100; 
      let addFood = document.getElementById("addFood");
      addFood.insertAdjacentHTML('afterend', '<div class="itemFood"><p class="foodProduct">'+fpd+'</p><p class="foodPrice">'+fp+'</p><p class="foodQuan">'+"x" +fq+'</p><p class="foodTax">'+ft+'</p><p class="foodCAD">'+fC + " CAD"+'</p><p class="foodExch">'+fE+ " " + unit+'</p></div>');
      foodC = Math.round((foodC + fC + Number.EPSILON) * 100) / 100;
      fCAD.innerHTML = foodC + " CAD";
      foodE = Math.round((foodC * exch + Number.EPSILON) * 100) / 100;
      fExch.innerHTML = foodE + " " + unit;
    }
    if(cat == "health"){
      document.getElementById("listHealth").style.display = "grid";
      let hpd = product; 
      let hp = "$" + price + "/item"; 
      let ht = "HST $" + Math.round((price * quantity * hst + Number.EPSILON) * 100) / 100;
      let hq = quantity; 
      let hC = Math.round((price * quantity + Number.EPSILON) * 100) / 100; 
      let hE = Math.round((hC * exch + Number.EPSILON) * 100) / 100; 
      let hct = Math.round((price * quantity + price * quantity * hst + Number.EPSILON) * 100) / 100;
      let het = Math.round((hct * exch + Number.EPSILON) * 100) / 100;
      let addHealth = document.getElementById("addHealth");
      addHealth.insertAdjacentHTML('afterend', '<div class="itemHealth"><p class="healthProduct">'+hpd+'</p><p class="healthPrice">'+hp+'</p><p class="healthQuan">'+"x" +hq+'</p><p class="healthTax">'+ht+'</p><p class="healthCAD">'+hct + " CAD"+'</p><p class="healthExch">'+het+ " " + unit+'</p></div>');
      healthC = Math.round((healthC + hC + Number.EPSILON) * 100) / 100;
      healthCT = Math.round((healthCT + hct + Number.EPSILON) * 100) / 100;      
      hCAD.innerHTML = healthCT + " CAD";
      healthE = Math.round((healthE + hE + Number.EPSILON) * 100) / 100;
      healthET = Math.round((healthET + het + Number.EPSILON) * 100) / 100;   
      hExch.innerHTML = healthET + " " + unit;
    }
    if(cat == "clothes"){
      document.getElementById("listClothes").style.display = "grid";
      let cpd = product; 
      let cp = "$" + price + "/item"; 
      let ct = "HST $" + Math.round((price * quantity * hst + Number.EPSILON) * 100) / 100;
      let cq = quantity; 
      let cC = Math.round((price * quantity + Number.EPSILON) * 100) / 100; 
      let cE = Math.round((cC * exch + Number.EPSILON) * 100) / 100; 
      let cct = Math.round((price * quantity + price * quantity * hst + Number.EPSILON) * 100) / 100;
      let cet = Math.round((cct * exch + Number.EPSILON) * 100) / 100;
      let addClothes = document.getElementById("addClothes");
      addClothes.insertAdjacentHTML('afterend', '<div class="itemClothes"><p class="clothesProduct">'+cpd+'</p><p class="clothesPrice">'+cp+'</p><p class="clothesQuan">'+"x" +cq+'</p><p class="clothesTax">'+ct+'</p><p class="clothesCAD">'+cct + " CAD"+'</p><p class="clothesExch">'+cet+ " " + unit+'</p></div>');      
      clothesC = Math.round((clothesC + cC + Number.EPSILON) * 100) / 100;
      clothesCT = Math.round((clothesCT + cct + Number.EPSILON) * 100) / 100;      
      cCAD.innerHTML = clothesCT + " CAD";      
      clothesE = Math.round((clothesE + cE + Number.EPSILON) * 100) / 100;
      clothesET = Math.round((clothesET + cet + Number.EPSILON) * 100) / 100;   
      cExch.innerHTML = clothesET + " " + unit;
    }
    if(cat == "house"){
      document.getElementById("listHouse").style.display = "grid";
      let ipd = product; 
      let ip = "$" + price + "/item"; 
      let it = "HST $" + Math.round((price * quantity * hst + Number.EPSILON) * 100) / 100;
      let iq = quantity; 
      let iC = Math.round((price * quantity + Number.EPSILON) * 100) / 100; 
      let iE = Math.round((iC * exch + Number.EPSILON) * 100) / 100; 
      let ict = Math.round((price * quantity + price * quantity * hst + Number.EPSILON) * 100) / 100;
      let iet = Math.round((ict * exch + Number.EPSILON) * 100) / 100;
      let addHouse = document.getElementById("addHouse");
      addHouse.insertAdjacentHTML('afterend', '<div class="itemHouse"><p class="houseProduct">'+ipd+'</p><p class="housePrice">'+ip+'</p><p class="houseQuan">'+"x" +iq+'</p><p class="houseTax">'+it+'</p><p class="houseCAD">'+ict + " CAD"+'</p><p class="houseExch">'+iet+ " " + unit+'</p></div>');      
      houseC = Math.round((houseC + iC + Number.EPSILON) * 100) / 100;
      houseCT = Math.round((houseCT + ict + Number.EPSILON) * 100) / 100;      
      iCAD.innerHTML = houseCT + " CAD";      
      houseE = Math.round((houseE + iE + Number.EPSILON) * 100) / 100;
      houseET = Math.round((houseET + iet + Number.EPSILON) * 100) / 100;   
      iExch.innerHTML = houseET + " " + unit;
    }
    if(cat == "other"){
      document.getElementById("listOther").style.display = "grid";
      let opd = product; 
      let op = "$" + price + "/item"; 
      let ot = "HST $" + Math.round((price * quantity * hst + Number.EPSILON) * 100) / 100;
      let oq = quantity; 
      let oC = Math.round((price * quantity + Number.EPSILON) * 100) / 100; 
      let oE = Math.round((oC * exch + Number.EPSILON) * 100) / 100; 
      let oct = Math.round((price * quantity + price * quantity * hst + Number.EPSILON) * 100) / 100;
      let oet = Math.round((oct * exch + Number.EPSILON) * 100) / 100;
      let addOther = document.getElementById("addOther");
      addOther.insertAdjacentHTML('afterend', '<div class="itemOther"><p class="otherProduct">'+opd+'</p><p class="otherPrice">'+op+'</p><p class="otherQuan">'+"x" +oq+'</p><p class="otherTax">'+ot+'</p><p class="otherCAD">'+oct + " CAD"+'</p><p class="otherExch">'+oet+ " " + unit+'</p></div>');      
      otherC = Math.round((otherC + oC + Number.EPSILON) * 100) / 100;
      otherCT = Math.round((otherCT + oct + Number.EPSILON) * 100) / 100;      
      oCAD.innerHTML = otherCT + " CAD";
      otherE = Math.round((otherE + oE + Number.EPSILON) * 100) / 100;
      otherET = Math.round((otherET + oet + Number.EPSILON) * 100) / 100;   
      oExch.innerHTML = otherET + " " + unit;
    }
    
      subC = Math.round((foodC + healthC + clothesC + houseC + otherC + Number.EPSILON) * 100) / 100;
      subCAD.innerHTML = subC + " CAD";
      subE = Math.round((subC * exch + Number.EPSILON) * 100) / 100;
      subExch.innerHTML = subE + " " + unit;  
      taxC = Math.round((healthC*hst + clothesC*hst + houseC*hst + otherC*hst + Number.EPSILON) * 100) / 100;
      taxCAD.innerHTML = taxC + " CAD";
      taxE = Math.round((taxC * exch + Number.EPSILON) * 100) / 100;
      taxExch.innerHTML = taxE + " " + unit;
      totalC = Math.round((subC + taxC + Number.EPSILON) * 100) / 100;
      totalCAD.innerHTML = totalC + " CAD";
      totalE = Math.round((totalC * exch + Number.EPSILON) * 100) / 100;
      totalExch.innerHTML = totalE + " " + unit;
  }

  if(prov == "eleven"){
    hst = 0.11;
    if(cat == "food"){
      document.getElementById("listFood").style.display = "grid";
      let fpd = product; 
      let fp = "$" + price + "/item"; 
      let ft = "HST $0";
      let fq = quantity; 
      let fC = Math.round((price * quantity + Number.EPSILON) * 100) / 100; 
      let fE = Math.round((price * quantity * exch + Number.EPSILON) * 100) / 100; 
      let addFood = document.getElementById("addFood");
      addFood.insertAdjacentHTML('afterend', '<div class="itemFood"><p class="foodProduct">'+fpd+'</p><p class="foodPrice">'+fp+'</p><p class="foodQuan">'+"x" +fq+'</p><p class="foodTax">'+ft+'</p><p class="foodCAD">'+fC + " CAD"+'</p><p class="foodExch">'+fE+ " " + unit+'</p></div>');
      foodC = Math.round((foodC + fC + Number.EPSILON) * 100) / 100;
      fCAD.innerHTML = foodC + " CAD";
      foodE = Math.round((foodC * exch + Number.EPSILON) * 100) / 100;
      fExch.innerHTML = foodE + " " + unit;
    }
    if(cat == "health"){
      document.getElementById("listHealth").style.display = "grid";
      let hpd = product; 
      let hp = "$" + price + "/item"; 
      let ht = "HST $" + Math.round((price * quantity * hst + Number.EPSILON) * 100) / 100;
      let hq = quantity; 
      let hC = Math.round((price * quantity + Number.EPSILON) * 100) / 100; 
      let hE = Math.round((hC * exch + Number.EPSILON) * 100) / 100; 
      let hct = Math.round((price * quantity + price * quantity * hst + Number.EPSILON) * 100) / 100;
      let het = Math.round((hct * exch + Number.EPSILON) * 100) / 100;
      let addHealth = document.getElementById("addHealth");
      addHealth.insertAdjacentHTML('afterend', '<div class="itemHealth"><p class="healthProduct">'+hpd+'</p><p class="healthPrice">'+hp+'</p><p class="healthQuan">'+"x" +hq+'</p><p class="healthTax">'+ht+'</p><p class="healthCAD">'+hct + " CAD"+'</p><p class="healthExch">'+het+ " " + unit+'</p></div>');
      healthC = Math.round((healthC + hC + Number.EPSILON) * 100) / 100;
      healthCT = Math.round((healthCT + hct + Number.EPSILON) * 100) / 100;      
      hCAD.innerHTML = healthCT + " CAD";
      healthE = Math.round((healthE + hE + Number.EPSILON) * 100) / 100;
      healthET = Math.round((healthET + het + Number.EPSILON) * 100) / 100;   
      hExch.innerHTML = healthET + " " + unit;
    }
    if(cat == "clothes"){
      document.getElementById("listClothes").style.display = "grid";
      let cpd = product; 
      let cp = "$" + price + "/item"; 
      let ct = "HST $" + Math.round((price * quantity * hst + Number.EPSILON) * 100) / 100;
      let cq = quantity; 
      let cC = Math.round((price * quantity + Number.EPSILON) * 100) / 100; 
      let cE = Math.round((cC * exch + Number.EPSILON) * 100) / 100; 
      let cct = Math.round((price * quantity + price * quantity * hst + Number.EPSILON) * 100) / 100;
      let cet = Math.round((cct * exch + Number.EPSILON) * 100) / 100;
      let addClothes = document.getElementById("addClothes");
      addClothes.insertAdjacentHTML('afterend', '<div class="itemClothes"><p class="clothesProduct">'+cpd+'</p><p class="clothesPrice">'+cp+'</p><p class="clothesQuan">'+"x" +cq+'</p><p class="clothesTax">'+ct+'</p><p class="clothesCAD">'+cct + " CAD"+'</p><p class="clothesExch">'+cet+ " " + unit+'</p></div>');      
      clothesC = Math.round((clothesC + cC + Number.EPSILON) * 100) / 100;
      clothesCT = Math.round((clothesCT + cct + Number.EPSILON) * 100) / 100;      
      cCAD.innerHTML = clothesCT + " CAD";      
      clothesE = Math.round((clothesE + cE + Number.EPSILON) * 100) / 100;
      clothesET = Math.round((clothesET + cet + Number.EPSILON) * 100) / 100;   
      cExch.innerHTML = clothesET + " " + unit;
    }
    if(cat == "house"){
      document.getElementById("listHouse").style.display = "grid";
      let ipd = product; 
      let ip = "$" + price + "/item"; 
      let it = "HST $" + Math.round((price * quantity * hst + Number.EPSILON) * 100) / 100;
      let iq = quantity; 
      let iC = Math.round((price * quantity + Number.EPSILON) * 100) / 100; 
      let iE = Math.round((iC * exch + Number.EPSILON) * 100) / 100; 
      let ict = Math.round((price * quantity + price * quantity * hst + Number.EPSILON) * 100) / 100;
      let iet = Math.round((ict * exch + Number.EPSILON) * 100) / 100;
      let addHouse = document.getElementById("addHouse");
      addHouse.insertAdjacentHTML('afterend', '<div class="itemHouse"><p class="houseProduct">'+ipd+'</p><p class="housePrice">'+ip+'</p><p class="houseQuan">'+"x" +iq+'</p><p class="houseTax">'+it+'</p><p class="houseCAD">'+ict + " CAD"+'</p><p class="houseExch">'+iet+ " " + unit+'</p></div>');      
      houseC = Math.round((houseC + iC + Number.EPSILON) * 100) / 100;
      houseCT = Math.round((houseCT + ict + Number.EPSILON) * 100) / 100;      
      iCAD.innerHTML = houseCT + " CAD";      
      houseE = Math.round((houseE + iE + Number.EPSILON) * 100) / 100;
      houseET = Math.round((houseET + iet + Number.EPSILON) * 100) / 100;   
      iExch.innerHTML = houseET + " " + unit;
    }
    if(cat == "other"){
      document.getElementById("listOther").style.display = "grid";
      let opd = product; 
      let op = "$" + price + "/item"; 
      let ot = "HST $" + Math.round((price * quantity * hst + Number.EPSILON) * 100) / 100;
      let oq = quantity; 
      let oC = Math.round((price * quantity + Number.EPSILON) * 100) / 100; 
      let oE = Math.round((oC * exch + Number.EPSILON) * 100) / 100; 
      let oct = Math.round((price * quantity + price * quantity * hst + Number.EPSILON) * 100) / 100;
      let oet = Math.round((oct * exch + Number.EPSILON) * 100) / 100;
      let addOther = document.getElementById("addOther");
      addOther.insertAdjacentHTML('afterend', '<div class="itemOther"><p class="otherProduct">'+opd+'</p><p class="otherPrice">'+op+'</p><p class="otherQuan">'+"x" +oq+'</p><p class="otherTax">'+ot+'</p><p class="otherCAD">'+oct + " CAD"+'</p><p class="otherExch">'+oet+ " " + unit+'</p></div>');      
      otherC = Math.round((otherC + oC + Number.EPSILON) * 100) / 100;
      otherCT = Math.round((otherCT + oct + Number.EPSILON) * 100) / 100;      
      oCAD.innerHTML = otherCT + " CAD";
      otherE = Math.round((otherE + oE + Number.EPSILON) * 100) / 100;
      otherET = Math.round((otherET + oet + Number.EPSILON) * 100) / 100;   
      oExch.innerHTML = otherET + " " + unit;
    }
    
      subC = Math.round((foodC + healthC + clothesC + houseC + otherC + Number.EPSILON) * 100) / 100;
      subCAD.innerHTML = subC + " CAD";
      subE = Math.round((subC * exch + Number.EPSILON) * 100) / 100;
      subExch.innerHTML = subE + " " + unit;  
      taxC = Math.round((healthC*hst + clothesC*hst + houseC*hst + otherC*hst + Number.EPSILON) * 100) / 100;
      taxCAD.innerHTML = taxC + " CAD";
      taxE = Math.round((taxC * exch + Number.EPSILON) * 100) / 100;
      taxExch.innerHTML = taxE + " " + unit;
      totalC = Math.round((subC + taxC + Number.EPSILON) * 100) / 100;
      totalCAD.innerHTML = totalC + " CAD";
      totalE = Math.round((totalC * exch + Number.EPSILON) * 100) / 100;
      totalExch.innerHTML = totalE + " " + unit;
  }

  if(prov == "twelve"){
    hst = 0.12;
    if(cat == "food"){
      document.getElementById("listFood").style.display = "grid";
      let fpd = product; 
      let fp = "$" + price + "/item"; 
      let ft = "HST $0";
      let fq = quantity; 
      let fC = Math.round((price * quantity + Number.EPSILON) * 100) / 100; 
      let fE = Math.round((price * quantity * exch + Number.EPSILON) * 100) / 100; 
      let addFood = document.getElementById("addFood");
      addFood.insertAdjacentHTML('afterend', '<div class="itemFood"><p class="foodProduct">'+fpd+'</p><p class="foodPrice">'+fp+'</p><p class="foodQuan">'+"x" +fq+'</p><p class="foodTax">'+ft+'</p><p class="foodCAD">'+fC + " CAD"+'</p><p class="foodExch">'+fE+ " " + unit+'</p></div>');
      foodC = Math.round((foodC + fC + Number.EPSILON) * 100) / 100;
      fCAD.innerHTML = foodC + " CAD";
      foodE = Math.round((foodC * exch + Number.EPSILON) * 100) / 100;
      fExch.innerHTML = foodE + " " + unit;
    }
    if(cat == "health"){
      document.getElementById("listHealth").style.display = "grid";
      let hpd = product; 
      let hp = "$" + price + "/item"; 
      let ht = "HST $" + Math.round((price * quantity * hst + Number.EPSILON) * 100) / 100;
      let hq = quantity; 
      let hC = Math.round((price * quantity + Number.EPSILON) * 100) / 100; 
      let hE = Math.round((hC * exch + Number.EPSILON) * 100) / 100; 
      let hct = Math.round((price * quantity + price * quantity * hst + Number.EPSILON) * 100) / 100;
      let het = Math.round((hct * exch + Number.EPSILON) * 100) / 100;
      let addHealth = document.getElementById("addHealth");
      addHealth.insertAdjacentHTML('afterend', '<div class="itemHealth"><p class="healthProduct">'+hpd+'</p><p class="healthPrice">'+hp+'</p><p class="healthQuan">'+"x" +hq+'</p><p class="healthTax">'+ht+'</p><p class="healthCAD">'+hct + " CAD"+'</p><p class="healthExch">'+het+ " " + unit+'</p></div>');
      healthC = Math.round((healthC + hC + Number.EPSILON) * 100) / 100;
      healthCT = Math.round((healthCT + hct + Number.EPSILON) * 100) / 100;      
      hCAD.innerHTML = healthCT + " CAD";
      healthE = Math.round((healthE + hE + Number.EPSILON) * 100) / 100;
      healthET = Math.round((healthET + het + Number.EPSILON) * 100) / 100;   
      hExch.innerHTML = healthET + " " + unit;
    }
    if(cat == "clothes"){
      document.getElementById("listClothes").style.display = "grid";
      let cpd = product; 
      let cp = "$" + price + "/item"; 
      let ct = "HST $" + Math.round((price * quantity * hst + Number.EPSILON) * 100) / 100;
      let cq = quantity; 
      let cC = Math.round((price * quantity + Number.EPSILON) * 100) / 100; 
      let cE = Math.round((cC * exch + Number.EPSILON) * 100) / 100; 
      let cct = Math.round((price * quantity + price * quantity * hst + Number.EPSILON) * 100) / 100;
      let cet = Math.round((cct * exch + Number.EPSILON) * 100) / 100;
      let addClothes = document.getElementById("addClothes");
      addClothes.insertAdjacentHTML('afterend', '<div class="itemClothes"><p class="clothesProduct">'+cpd+'</p><p class="clothesPrice">'+cp+'</p><p class="clothesQuan">'+"x" +cq+'</p><p class="clothesTax">'+ct+'</p><p class="clothesCAD">'+cct + " CAD"+'</p><p class="clothesExch">'+cet+ " " + unit+'</p></div>');      
      clothesC = Math.round((clothesC + cC + Number.EPSILON) * 100) / 100;
      clothesCT = Math.round((clothesCT + cct + Number.EPSILON) * 100) / 100;      
      cCAD.innerHTML = clothesCT + " CAD";      
      clothesE = Math.round((clothesE + cE + Number.EPSILON) * 100) / 100;
      clothesET = Math.round((clothesET + cet + Number.EPSILON) * 100) / 100;   
      cExch.innerHTML = clothesET + " " + unit;
    }
    if(cat == "house"){
      document.getElementById("listHouse").style.display = "grid";
      let ipd = product; 
      let ip = "$" + price + "/item"; 
      let it = "HST $" + Math.round((price * quantity * hst + Number.EPSILON) * 100) / 100;
      let iq = quantity; 
      let iC = Math.round((price * quantity + Number.EPSILON) * 100) / 100; 
      let iE = Math.round((iC * exch + Number.EPSILON) * 100) / 100; 
      let ict = Math.round((price * quantity + price * quantity * hst + Number.EPSILON) * 100) / 100;
      let iet = Math.round((ict * exch + Number.EPSILON) * 100) / 100;
      let addHouse = document.getElementById("addHouse");
      addHouse.insertAdjacentHTML('afterend', '<div class="itemHouse"><p class="houseProduct">'+ipd+'</p><p class="housePrice">'+ip+'</p><p class="houseQuan">'+"x" +iq+'</p><p class="houseTax">'+it+'</p><p class="houseCAD">'+ict + " CAD"+'</p><p class="houseExch">'+iet+ " " + unit+'</p></div>');      
      houseC = Math.round((houseC + iC + Number.EPSILON) * 100) / 100;
      houseCT = Math.round((houseCT + ict + Number.EPSILON) * 100) / 100;      
      iCAD.innerHTML = houseCT + " CAD";      
      houseE = Math.round((houseE + iE + Number.EPSILON) * 100) / 100;
      houseET = Math.round((houseET + iet + Number.EPSILON) * 100) / 100;   
      iExch.innerHTML = houseET + " " + unit;
    }
    if(cat == "other"){
      document.getElementById("listOther").style.display = "grid";
      let opd = product; 
      let op = "$" + price + "/item"; 
      let ot = "HST $" + Math.round((price * quantity * hst + Number.EPSILON) * 100) / 100;
      let oq = quantity; 
      let oC = Math.round((price * quantity + Number.EPSILON) * 100) / 100; 
      let oE = Math.round((oC * exch + Number.EPSILON) * 100) / 100; 
      let oct = Math.round((price * quantity + price * quantity * hst + Number.EPSILON) * 100) / 100;
      let oet = Math.round((oct * exch + Number.EPSILON) * 100) / 100;
      let addOther = document.getElementById("addOther");
      addOther.insertAdjacentHTML('afterend', '<div class="itemOther"><p class="otherProduct">'+opd+'</p><p class="otherPrice">'+op+'</p><p class="otherQuan">'+"x" +oq+'</p><p class="otherTax">'+ot+'</p><p class="otherCAD">'+oct + " CAD"+'</p><p class="otherExch">'+oet+ " " + unit+'</p></div>');      
      otherC = Math.round((otherC + oC + Number.EPSILON) * 100) / 100;
      otherCT = Math.round((otherCT + oct + Number.EPSILON) * 100) / 100;      
      oCAD.innerHTML = otherCT + " CAD";
      otherE = Math.round((otherE + oE + Number.EPSILON) * 100) / 100;
      otherET = Math.round((otherET + oet + Number.EPSILON) * 100) / 100;   
      oExch.innerHTML = otherET + " " + unit;
    }
    
      subC = Math.round((foodC + healthC + clothesC + houseC + otherC + Number.EPSILON) * 100) / 100;
      subCAD.innerHTML = subC + " CAD";
      subE = Math.round((subC * exch + Number.EPSILON) * 100) / 100;
      subExch.innerHTML = subE + " " + unit;  
      taxC = Math.round((healthC*hst + clothesC*hst + houseC*hst + otherC*hst + Number.EPSILON) * 100) / 100;
      taxCAD.innerHTML = taxC + " CAD";
      taxE = Math.round((taxC * exch + Number.EPSILON) * 100) / 100;
      taxExch.innerHTML = taxE + " " + unit;
      totalC = Math.round((subC + taxC + Number.EPSILON) * 100) / 100;
      totalCAD.innerHTML = totalC + " CAD";
      totalE = Math.round((totalC * exch + Number.EPSILON) * 100) / 100;
      totalExch.innerHTML = totalE + " " + unit;
  }
  
  if(prov == "thirteen"){
    hst = 0.13;
    if(cat == "food"){
      document.getElementById("listFood").style.display = "grid";
      let fpd = product; 
      let fp = "$" + price + "/item"; 
      let ft = "HST $0";
      let fq = quantity; 
      let fC = Math.round((price * quantity + Number.EPSILON) * 100) / 100; 
      let fE = Math.round((price * quantity * exch + Number.EPSILON) * 100) / 100; 
      let addFood = document.getElementById("addFood");
      addFood.insertAdjacentHTML('afterend', '<div class="itemFood"><p class="foodProduct">'+fpd+'</p><p class="foodPrice">'+fp+'</p><p class="foodQuan">'+"x" +fq+'</p><p class="foodTax">'+ft+'</p><p class="foodCAD">'+fC + " CAD"+'</p><p class="foodExch">'+fE+ " " + unit+'</p></div>');
      foodC = Math.round((foodC + fC + Number.EPSILON) * 100) / 100;
      fCAD.innerHTML = foodC + " CAD";
      foodE = Math.round((foodC * exch + Number.EPSILON) * 100) / 100;
      fExch.innerHTML = foodE + " " + unit;
    }
    if(cat == "health"){
      document.getElementById("listHealth").style.display = "grid";
      let hpd = product; 
      let hp = "$" + price + "/item"; 
      let ht = "HST $" + Math.round((price * quantity * hst + Number.EPSILON) * 100) / 100;
      let hq = quantity; 
      let hC = Math.round((price * quantity + Number.EPSILON) * 100) / 100; 
      let hE = Math.round((hC * exch + Number.EPSILON) * 100) / 100; 
      let hct = Math.round((price * quantity + price * quantity * hst + Number.EPSILON) * 100) / 100;
      let het = Math.round((hct * exch + Number.EPSILON) * 100) / 100;
      let addHealth = document.getElementById("addHealth");
      addHealth.insertAdjacentHTML('afterend', '<div class="itemHealth"><p class="healthProduct">'+hpd+'</p><p class="healthPrice">'+hp+'</p><p class="healthQuan">'+"x" +hq+'</p><p class="healthTax">'+ht+'</p><p class="healthCAD">'+hct + " CAD"+'</p><p class="healthExch">'+het+ " " + unit+'</p></div>');
      healthC = Math.round((healthC + hC + Number.EPSILON) * 100) / 100;
      healthCT = Math.round((healthCT + hct + Number.EPSILON) * 100) / 100;      
      hCAD.innerHTML = healthCT + " CAD";
      healthE = Math.round((healthE + hE + Number.EPSILON) * 100) / 100;
      healthET = Math.round((healthET + het + Number.EPSILON) * 100) / 100;   
      hExch.innerHTML = healthET + " " + unit;
    }
    if(cat == "clothes"){
      document.getElementById("listClothes").style.display = "grid";
      let cpd = product; 
      let cp = "$" + price + "/item"; 
      let ct = "HST $" + Math.round((price * quantity * hst + Number.EPSILON) * 100) / 100;
      let cq = quantity; 
      let cC = Math.round((price * quantity + Number.EPSILON) * 100) / 100; 
      let cE = Math.round((cC * exch + Number.EPSILON) * 100) / 100; 
      let cct = Math.round((price * quantity + price * quantity * hst + Number.EPSILON) * 100) / 100;
      let cet = Math.round((cct * exch + Number.EPSILON) * 100) / 100;
      let addClothes = document.getElementById("addClothes");
      addClothes.insertAdjacentHTML('afterend', '<div class="itemClothes"><p class="clothesProduct">'+cpd+'</p><p class="clothesPrice">'+cp+'</p><p class="clothesQuan">'+"x" +cq+'</p><p class="clothesTax">'+ct+'</p><p class="clothesCAD">'+cct + " CAD"+'</p><p class="clothesExch">'+cet+ " " + unit+'</p></div>');      
      clothesC = Math.round((clothesC + cC + Number.EPSILON) * 100) / 100;
      clothesCT = Math.round((clothesCT + cct + Number.EPSILON) * 100) / 100;      
      cCAD.innerHTML = clothesCT + " CAD";      
      clothesE = Math.round((clothesE + cE + Number.EPSILON) * 100) / 100;
      clothesET = Math.round((clothesET + cet + Number.EPSILON) * 100) / 100;   
      cExch.innerHTML = clothesET + " " + unit;
    }
    if(cat == "house"){
      document.getElementById("listHouse").style.display = "grid";
      let ipd = product; 
      let ip = "$" + price + "/item"; 
      let it = "HST $" + Math.round((price * quantity * hst + Number.EPSILON) * 100) / 100;
      let iq = quantity; 
      let iC = Math.round((price * quantity + Number.EPSILON) * 100) / 100; 
      let iE = Math.round((iC * exch + Number.EPSILON) * 100) / 100; 
      let ict = Math.round((price * quantity + price * quantity * hst + Number.EPSILON) * 100) / 100;
      let iet = Math.round((ict * exch + Number.EPSILON) * 100) / 100;
      let addHouse = document.getElementById("addHouse");
      addHouse.insertAdjacentHTML('afterend', '<div class="itemHouse"><p class="houseProduct">'+ipd+'</p><p class="housePrice">'+ip+'</p><p class="houseQuan">'+"x" +iq+'</p><p class="houseTax">'+it+'</p><p class="houseCAD">'+ict + " CAD"+'</p><p class="houseExch">'+iet+ " " + unit+'</p></div>');      
      houseC = Math.round((houseC + iC + Number.EPSILON) * 100) / 100;
      houseCT = Math.round((houseCT + ict + Number.EPSILON) * 100) / 100;      
      iCAD.innerHTML = houseCT + " CAD";      
      houseE = Math.round((houseE + iE + Number.EPSILON) * 100) / 100;
      houseET = Math.round((houseET + iet + Number.EPSILON) * 100) / 100;   
      iExch.innerHTML = houseET + " " + unit;
    }
    if(cat == "other"){
      document.getElementById("listOther").style.display = "grid";
      let opd = product; 
      let op = "$" + price + "/item"; 
      let ot = "HST $" + Math.round((price * quantity * hst + Number.EPSILON) * 100) / 100;
      let oq = quantity; 
      let oC = Math.round((price * quantity + Number.EPSILON) * 100) / 100; 
      let oE = Math.round((oC * exch + Number.EPSILON) * 100) / 100; 
      let oct = Math.round((price * quantity + price * quantity * hst + Number.EPSILON) * 100) / 100;
      let oet = Math.round((oct * exch + Number.EPSILON) * 100) / 100;
      let addOther = document.getElementById("addOther");
      addOther.insertAdjacentHTML('afterend', '<div class="itemOther"><p class="otherProduct">'+opd+'</p><p class="otherPrice">'+op+'</p><p class="otherQuan">'+"x" +oq+'</p><p class="otherTax">'+ot+'</p><p class="otherCAD">'+oct + " CAD"+'</p><p class="otherExch">'+oet+ " " + unit+'</p></div>');      
      otherC = Math.round((otherC + oC + Number.EPSILON) * 100) / 100;
      otherCT = Math.round((otherCT + oct + Number.EPSILON) * 100) / 100;      
      oCAD.innerHTML = otherCT + " CAD";
      otherE = Math.round((otherE + oE + Number.EPSILON) * 100) / 100;
      otherET = Math.round((otherET + oet + Number.EPSILON) * 100) / 100;   
      oExch.innerHTML = otherET + " " + unit;
    }
    
      subC = Math.round((foodC + healthC + clothesC + houseC + otherC + Number.EPSILON) * 100) / 100;
      subCAD.innerHTML = subC + " CAD";
      subE = Math.round((subC * exch + Number.EPSILON) * 100) / 100;
      subExch.innerHTML = subE + " " + unit;  
      taxC = Math.round((healthC*hst + clothesC*hst + houseC*hst + otherC*hst + Number.EPSILON) * 100) / 100;
      taxCAD.innerHTML = taxC + " CAD";
      taxE = Math.round((taxC * exch + Number.EPSILON) * 100) / 100;
      taxExch.innerHTML = taxE + " " + unit;
      totalC = Math.round((subC + taxC + Number.EPSILON) * 100) / 100;
      totalCAD.innerHTML = totalC + " CAD";
      totalE = Math.round((totalC * exch + Number.EPSILON) * 100) / 100;
      totalExch.innerHTML = totalE + " " + unit;
  }

  if(prov == "fifteen"){
    hst = 0.15;
    if(cat == "food"){
      document.getElementById("listFood").style.display = "grid";
      let fpd = product; 
      let fp = "$" + price + "/item"; 
      let ft = "HST $0";
      let fq = quantity; 
      let fC = Math.round((price * quantity + Number.EPSILON) * 100) / 100; 
      let fE = Math.round((price * quantity * exch + Number.EPSILON) * 100) / 100; 
      let addFood = document.getElementById("addFood");
      addFood.insertAdjacentHTML('afterend', '<div class="itemFood"><p class="foodProduct">'+fpd+'</p><p class="foodPrice">'+fp+'</p><p class="foodQuan">'+"x" +fq+'</p><p class="foodTax">'+ft+'</p><p class="foodCAD">'+fC + " CAD"+'</p><p class="foodExch">'+fE+ " " + unit+'</p></div>');
      foodC = Math.round((foodC + fC + Number.EPSILON) * 100) / 100;
      fCAD.innerHTML = foodC + " CAD";
      foodE = Math.round((foodC * exch + Number.EPSILON) * 100) / 100;
      fExch.innerHTML = foodE + " " + unit;
    }
    if(cat == "health"){
      document.getElementById("listHealth").style.display = "grid";
      let hpd = product; 
      let hp = "$" + price + "/item"; 
      let ht = "HST $" + Math.round((price * quantity * hst + Number.EPSILON) * 100) / 100;
      let hq = quantity; 
      let hC = Math.round((price * quantity + Number.EPSILON) * 100) / 100; 
      let hE = Math.round((hC * exch + Number.EPSILON) * 100) / 100; 
      let hct = Math.round((price * quantity + price * quantity * hst + Number.EPSILON) * 100) / 100;
      let het = Math.round((hct * exch + Number.EPSILON) * 100) / 100;
      let addHealth = document.getElementById("addHealth");
      addHealth.insertAdjacentHTML('afterend', '<div class="itemHealth"><p class="healthProduct">'+hpd+'</p><p class="healthPrice">'+hp+'</p><p class="healthQuan">'+"x" +hq+'</p><p class="healthTax">'+ht+'</p><p class="healthCAD">'+hct + " CAD"+'</p><p class="healthExch">'+het+ " " + unit+'</p></div>');
      healthC = Math.round((healthC + hC + Number.EPSILON) * 100) / 100;
      healthCT = Math.round((healthCT + hct + Number.EPSILON) * 100) / 100;      
      hCAD.innerHTML = healthCT + " CAD";
      healthE = Math.round((healthE + hE + Number.EPSILON) * 100) / 100;
      healthET = Math.round((healthET + het + Number.EPSILON) * 100) / 100;   
      hExch.innerHTML = healthET + " " + unit;
    }
    if(cat == "clothes"){
      document.getElementById("listClothes").style.display = "grid";
      let cpd = product; 
      let cp = "$" + price + "/item"; 
      let ct = "HST $" + Math.round((price * quantity * hst + Number.EPSILON) * 100) / 100;
      let cq = quantity; 
      let cC = Math.round((price * quantity + Number.EPSILON) * 100) / 100; 
      let cE = Math.round((cC * exch + Number.EPSILON) * 100) / 100; 
      let cct = Math.round((price * quantity + price * quantity * hst + Number.EPSILON) * 100) / 100;
      let cet = Math.round((cct * exch + Number.EPSILON) * 100) / 100;
      let addClothes = document.getElementById("addClothes");
      addClothes.insertAdjacentHTML('afterend', '<div class="itemClothes"><p class="clothesProduct">'+cpd+'</p><p class="clothesPrice">'+cp+'</p><p class="clothesQuan">'+"x" +cq+'</p><p class="clothesTax">'+ct+'</p><p class="clothesCAD">'+cct + " CAD"+'</p><p class="clothesExch">'+cet+ " " + unit+'</p></div>');      
      clothesC = Math.round((clothesC + cC + Number.EPSILON) * 100) / 100;
      clothesCT = Math.round((clothesCT + cct + Number.EPSILON) * 100) / 100;      
      cCAD.innerHTML = clothesCT + " CAD";      
      clothesE = Math.round((clothesE + cE + Number.EPSILON) * 100) / 100;
      clothesET = Math.round((clothesET + cet + Number.EPSILON) * 100) / 100;   
      cExch.innerHTML = clothesET + " " + unit;
    }
    if(cat == "house"){
      document.getElementById("listHouse").style.display = "grid";
      let ipd = product; 
      let ip = "$" + price + "/item"; 
      let it = "HST $" + Math.round((price * quantity * hst + Number.EPSILON) * 100) / 100;
      let iq = quantity; 
      let iC = Math.round((price * quantity + Number.EPSILON) * 100) / 100; 
      let iE = Math.round((iC * exch + Number.EPSILON) * 100) / 100; 
      let ict = Math.round((price * quantity + price * quantity * hst + Number.EPSILON) * 100) / 100;
      let iet = Math.round((ict * exch + Number.EPSILON) * 100) / 100;
      let addHouse = document.getElementById("addHouse");
      addHouse.insertAdjacentHTML('afterend', '<div class="itemHouse"><p class="houseProduct">'+ipd+'</p><p class="housePrice">'+ip+'</p><p class="houseQuan">'+"x" +iq+'</p><p class="houseTax">'+it+'</p><p class="houseCAD">'+ict + " CAD"+'</p><p class="houseExch">'+iet+ " " + unit+'</p></div>');      
      houseC = Math.round((houseC + iC + Number.EPSILON) * 100) / 100;
      houseCT = Math.round((houseCT + ict + Number.EPSILON) * 100) / 100;      
      iCAD.innerHTML = houseCT + " CAD";      
      houseE = Math.round((houseE + iE + Number.EPSILON) * 100) / 100;
      houseET = Math.round((houseET + iet + Number.EPSILON) * 100) / 100;   
      iExch.innerHTML = houseET + " " + unit;
    }
    if(cat == "other"){
      document.getElementById("listOther").style.display = "grid";
      let opd = product; 
      let op = "$" + price + "/item"; 
      let ot = "HST $" + Math.round((price * quantity * hst + Number.EPSILON) * 100) / 100;
      let oq = quantity; 
      let oC = Math.round((price * quantity + Number.EPSILON) * 100) / 100; 
      let oE = Math.round((oC * exch + Number.EPSILON) * 100) / 100; 
      let oct = Math.round((price * quantity + price * quantity * hst + Number.EPSILON) * 100) / 100;
      let oet = Math.round((oct * exch + Number.EPSILON) * 100) / 100;
      let addOther = document.getElementById("addOther");
      addOther.insertAdjacentHTML('afterend', '<div class="itemOther"><p class="otherProduct">'+opd+'</p><p class="otherPrice">'+op+'</p><p class="otherQuan">'+"x" +oq+'</p><p class="otherTax">'+ot+'</p><p class="otherCAD">'+oct + " CAD"+'</p><p class="otherExch">'+oet+ " " + unit+'</p></div>');      
      otherC = Math.round((otherC + oC + Number.EPSILON) * 100) / 100;
      otherCT = Math.round((otherCT + oct + Number.EPSILON) * 100) / 100;      
      oCAD.innerHTML = otherCT + " CAD";
      otherE = Math.round((otherE + oE + Number.EPSILON) * 100) / 100;
      otherET = Math.round((otherET + oet + Number.EPSILON) * 100) / 100;   
      oExch.innerHTML = otherET + " " + unit;
    }
    
      subC = Math.round((foodC + healthC + clothesC + houseC + otherC + Number.EPSILON) * 100) / 100;
      subCAD.innerHTML = subC + " CAD";
      subE = Math.round((subC * exch + Number.EPSILON) * 100) / 100;
      subExch.innerHTML = subE + " " + unit;  
      taxC = Math.round((healthC*hst + clothesC*hst + houseC*hst + otherC*hst + Number.EPSILON) * 100) / 100;
      taxCAD.innerHTML = taxC + " CAD";
      taxE = Math.round((taxC * exch + Number.EPSILON) * 100) / 100;
      taxExch.innerHTML = taxE + " " + unit;
      totalC = Math.round((subC + taxC + Number.EPSILON) * 100) / 100;
      totalCAD.innerHTML = totalC + " CAD";
      totalE = Math.round((totalC * exch + Number.EPSILON) * 100) / 100;
      totalExch.innerHTML = totalE + " " + unit;
  }
}

let loadSaved = () => {
  if(typeof(Storage)!=="undefined"){
    if(localStorage.hasOwnProperty("saved")){
      document.getElementById("savedList").style.display = "grid";  
      let retrieved = JSON.parse(localStorage.getItem('saved'));  
      let stc = retrieved.total_canada;
      let ste = retrieved.total_exchange;
      let sfc = retrieved.food_canada;
      let sfe = retrieved.food_exchange;
      let shc = retrieved.health_canada;
      let she = retrieved.health_exchange;
      let scc = retrieved.clothes_canada;
      let sce = retrieved.clothes_exchange;
      let sic = retrieved.house_canada;
      let sie = retrieved.house_exchange;
      let soc = retrieved.other_canada;
      let soe = retrieved.other_exchange;
      let sd = retrieved.date;
      let unit = document.getElementById("dropCurrency").value;
      let addTrip = document.getElementById("addTrip");
      addTrip.insertAdjacentHTML('afterend', '<div class="savedItem"><p class="savedDate">'+sd+'</p><p class="savedCAD">'+stc+ " CAD"+'</p><p class="savedExch">'+ste+ " " + unit +'</p><div class="savedFood"><h4>Food & Beverages</h4><p class="valueCAD">'+sfc+ " CAD"+'</p><p class="valueExch">'+sfe+ " " + unit +'</p></div><div class="savedHealth"><h4>Health & Beauty</h4><p class="valueCAD">'+shc+ " CAD"+'</p><p class="valueExch">'+she+ " " + unit +'</p></div><div class="savedClothes"><h4>Clothing, Footwear, & Accessories</h4><p class="valueCAD">'+scc+ " CAD"+'</p><p class="valueExch">'+sce+ " " + unit +'</p></div><div class="savedHouse"><h4>Household Item</h4><p class="valueCAD">'+sic+ " CAD"+'</p><p class="valueExch">'+sie+ " " + unit +'</p></div><div class="savedOther"><h4>Other</h4><p class="valueCAD">'+soc+ " CAD"+'</p><p class="valueExch">'+soe+ " " + unit +'</p></div></div>');
      }
    }else{ 
      console.log("nothing stored");
    }
}

let save = () => {
  document.getElementById("savedList").style.display = "grid";
  
  const d = new Date();
  let today = d.toLocaleDateString();

  const trip = {
    date: today,
    total_canada: totalC,
    total_exchange: totalE,
    food_canada: foodC,
    food_exchange: foodE,
    health_canada: healthCT,
    health_exchange: healthET,
    clothes_canada: clothesCT,
    clothes_exchange: clothesET,
    house_canada: houseCT,
    house_exchange: houseET,
    other_canada: otherCT,
    other_exchange: otherET,   
  }
  localStorage.setItem('saved', JSON.stringify(trip));

  let retrieved = JSON.parse(localStorage.getItem('saved'));
  let stc = retrieved.total_canada;
  let ste = retrieved.total_exchange;
  let sfc = retrieved.food_canada;
  let sfe = retrieved.food_exchange;
  let shc = retrieved.health_canada;
  let she = retrieved.health_exchange;
  let scc = retrieved.clothes_canada;
  let sce = retrieved.clothes_exchange;
  let sic = retrieved.house_canada;
  let sie = retrieved.house_exchange;
  let soc = retrieved.other_canada;
  let soe = retrieved.other_exchange;
  let sd = retrieved.date;
  
  let unit = document.getElementById("dropCurrency").value;
  let addTrip = document.getElementById("addTrip");
  addTrip.insertAdjacentHTML('afterend', '<div class="savedItem"><p class="savedDate">'+sd+'</p><p class="savedCAD">'+stc+ " CAD"+'</p><p class="savedExch">'+ste+ " " + unit +'</p><div class="savedFood"><h4>Food & Beverages</h4><p class="valueCAD">'+sfc+ " CAD"+'</p><p class="valueExch">'+sfe+ " " + unit +'</p></div><div class="savedHealth"><h4>Health & Beauty</h4><p class="valueCAD">'+shc+ " CAD"+'</p><p class="valueExch">'+she+ " " + unit +'</p></div><div class="savedClothes"><h4>Clothing, Footwear, & Accessories</h4><p class="valueCAD">'+scc+ " CAD"+'</p><p class="valueExch">'+sce+ " " + unit +'</p></div><div class="savedHouse"><h4>Household Item</h4><p class="valueCAD">'+sic+ " CAD"+'</p><p class="valueExch">'+sie+ " " + unit +'</p></div><div class="savedOther"><h4>Other</h4><p class="valueCAD">'+soc+ " CAD"+'</p><p class="valueExch">'+soe+ " " + unit +'</p></div></div>');
  document.getElementById("open").click();
}