const amountInput = document.getElementById("number");
const addForm = document.getElementById("addForm");
const budgetAmount = document.getElementById("budgetAmount");
const balanceAmount = document.getElementById("balanceAmount");
const expenseForm = document.getElementById("expense-form");
const budgetform = document.getElementById("budgetform");

function getBudgetAmount(amount) {

    budgetAmount.innerText = amount;
    balanceAmount.innerText = amount;
    expenseForm.style.display = "block";
    budgetform.style.display = "none";

    amountInput.value = "";
  }

addForm.addEventListener("submit", (e) => {
  e.preventDefault();
  getBudgetAmount(amountInput.value);
});
 


const expForm = document.getElementById("expForm");
const expensesAmount = document.getElementById("expensesAmount");
const expValue = document.getElementById("expValue");
const displayExpenses = document.getElementById("displayExpenses");

let expName = document.getElementById("expName");
let expNumber = document.getElementById("expNumber");
let id = 0;
let details = [];

function addExpenses(name, number) {
  
    const userExp = {
      id: id,
      name: name,
      number: parseInt(number),
    };
    details.push(userExp);
    displayExp(details);
    id++;
    expName.value = "";
    expNumber.value = "";
  }

function displayExp(details) {
  expValue.innerHTML = null;
  for (i = 0; i < details.length; i++) {
    expValue.innerHTML += `
    <div class="expValue" id="${details[i].id}">
      <div id="expTitleName" class="exp"><p>${details[i].name}</p></div>
      <div id="expValueAmount" class="exp"><p> <span>$ </span> ${details[i].number}</p></div>
      <div id="delete">
        <p>
          <button id="${details[i].id}" onclick="delExpenseDetails(${details[i].id})">Remove</button>
        </p>
      </div>
    </div>
  `;
  }
  calcExpenses();
  displayExpenses.style.display = "block";
}

function calcExpenses() {
  let totalExp = 0;
  for (i = 0; i < details.length; i++) {
    totalExp = details[i].number + totalExp;
  }
  expensesAmount.innerText = totalExp;
  updateBalance();
}

function updateBalance() {
  balanceAmount.innerText =
    parseInt(budgetAmount.innerText) - parseInt(expensesAmount.innerText);
}

function delExpenseDetails(id) {
  let index = details.findIndex((item) => item.id === id);
  details.splice(index, 1);
  displayExp(details);
}

  expForm.addEventListener("submit", (e) => {
  e.preventDefault();
  addExpenses(expName.value, expNumber.value);
});