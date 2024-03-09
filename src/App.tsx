import React, { useState } from "react";
import ExpenseList from "./Expense-tracker/components/ExpenseList";
import ExpenseFilter from "./Expense-tracker/components/ExpenseFilter";
import ExpenseForm from "./Expense-tracker/components/ExpenseForm";
import categories from "./Expense-tracker/components/Categories";

function App() {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [expenses, setExpenses] = useState([
    { id: 1, description: "aaa", amount: 10, category: "Utilities" },
    { id: 2, description: "bbb", amount: 10, category: "Utilities" },
    { id: 3, description: "avg", amount: 10, category: "Utilities" },
    { id: 4, description: "dd", amount: 10, category: "Utilities" },
  ]);

  const VisibleExpenses = selectedCategory
    ? expenses.filter((e) => e.category === selectedCategory)
    : expenses;

  return (
    <div>
      <div className="mb-5">
        <ExpenseForm onSubmit={(expense)=>setExpenses([...expenses,{...expense,id:expenses.length +1}])} />
      </div>
      <div className="mb-3">
        <ExpenseFilter
          onSelectCategory={(category) => setSelectedCategory(category)}
        />
      </div>
      <ExpenseList
        expenses={VisibleExpenses}
        onDelete={(id) => setExpenses(expenses.filter((e) => e.id !== id))}
      ></ExpenseList>
    </div>
  );
}

export default App;
