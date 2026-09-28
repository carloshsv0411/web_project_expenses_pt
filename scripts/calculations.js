// 2. Variáveis iniciais
// Vão mudar durante o uso do app, então usamos let.
let budgetValue = 0;
let totalExpensesValue = 0;

// 3. Despesas iniciais: cada item é [categoria, valor]
const expenseEntries = [
  ["groceries", 33],
  ["restaurants", 50],
  ["transport", 12],
  ["home", 70],
  ["subscriptions", 14],
  ["groceries", 28],
  ["subscriptions", 12],
];

// 4. Total de despesas
for (const entry of expenseEntries) {
  totalExpensesValue += entry[1];
  // Depure com o log abaixo (deve chegar a 219) e remova depois de conferir:
  // console.log("Despesas totais: " + totalExpensesValue);
}

// 5. Despesa média
function calculateAverageExpense() {
  if (expenseEntries.length === 0) {
    return 0; // evita 0 / 0, que daria NaN
  }
  return totalExpensesValue / expenseEntries.length;
}

// 6. Saldo
function calculateBalance() {
  return budgetValue - totalExpensesValue;
}

// 7. Cor do saldo
let balanceColor = "green";

function updateBalanceColor() {
  const balance = calculateBalance();

  if (balance < 0) {
    balanceColor = "red";
  } else if (balance < budgetValue * 0.25) {
    balanceColor = "orange";
  } else {
    balanceColor = "green";
  }
}

// 8. Total de despesas de uma categoria
function calculateCategoryExpenses(category) {
  let categoryTotal = 0;

  for (const entry of expenseEntries) {
    if (entry[0] === category) {
      categoryTotal += entry[1];
    }
  }

  return categoryTotal;
}

// 9. Categoria com o maior total
function calculateLargestCategory() {
  const categories = [
    "groceries",
    "restaurants",
    "transport",
    "home",
    "subscriptions",
  ];
  const categoriesTotals = [];

  for (const category of categories) {
    categoriesTotals.push([category, calculateCategoryExpenses(category)]);
  }

  let largestCategory = categoriesTotals[0][0];
  let largestTotal = categoriesTotals[0][1];

  for (const item of categoriesTotals) {
    if (item[1] > largestTotal) {
      largestTotal = item[1];
      largestCategory = item[0];
    }
  }

  return largestCategory;
}

// 10. Adicionar uma nova despesa: recebe [categoria, valor]
function addExpenseEntry(entry) {
  expenseEntries.push(entry);
  totalExpensesValue += entry[1];
}