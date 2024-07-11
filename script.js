// JavaScript code for handling form submissions and updating the balance and transactions
document.addEventListener('DOMContentLoaded', () => {
    const earnBtn = document.getElementById('earnBtn');
    const expBtn = document.getElementById('expBtn');
    const textInput = document.getElementById('text');
    const amountInput = document.getElementById('amount');
    const balanceDisplay = document.querySelector('.balance h2');
    const transactionsContainer = document.querySelector('.transactions');
  
    let balance = 0;
  
    function updateBalance(amount, isExpense) {
      balance += isExpense ? -amount : amount;
      balanceDisplay.textContent = `₹${balance}`;
    }
  
    function addTransaction(text, amount, isExpense) {
      const transaction = document.createElement('div');
      transaction.classList.add('transaction');
  
      const leftDiv = document.createElement('div');
      leftDiv.classList.add('left');
  
      const description = document.createElement('p');
      description.textContent = text;
  
      const amountDisplay = document.createElement('p');
      amountDisplay.textContent = `${isExpense ? '-' : '+'} ₹${amount}`;
  
      leftDiv.appendChild(description);
      leftDiv.appendChild(amountDisplay);
  
      const status = document.createElement('div');
      status.classList.add('status', isExpense ? 'debit' : 'credit');
      status.textContent = isExpense ? 'D' : 'C';
  
      transaction.appendChild(leftDiv);
      transaction.appendChild(status);
  
      transactionsContainer.appendChild(transaction);
    }
  
    earnBtn.addEventListener('click', (e) => {
      e.preventDefault();
      const text = textInput.value;
      const amount = parseFloat(amountInput.value);
  
      if (text && amount > 0) {
        updateBalance(amount, false);
        addTransaction(text, amount, false);
        textInput.value = '';
        amountInput.value = '';
      }
    });
  
    expBtn.addEventListener('click', (e) => {
      e.preventDefault();
      const text = textInput.value;
      const amount = parseFloat(amountInput.value);
  
      if (text && amount > 0) {
        updateBalance(amount, true);
        addTransaction(text, amount, true);
        textInput.value = '';
        amountInput.value = '';
      }
    });
  });
  