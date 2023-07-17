import "./App.css";
import { ExpenseItem } from "./components/ExpenseItem/ExpenseItem.component";
import { Card } from "./components/Expenses/Expenses.component";

const expenses = [
    {
        id: "e1",
        title: "Toilet Paper",
        amount: 94.12,
        date: new Date(2020, 7, 14),
    },
    { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
    {
        id: "e3",
        title: "Car Insurance",
        amount: 294.67,
        date: new Date(2021, 2, 28),
    },
    {
        id: "e4",
        title: "New Desk (Wooden)",
        amount: 450,
        date: new Date(2021, 5, 12),
    },
];

function App() {
    return (
        <>
            <nav style={{ backgroundColor: "rgb(31, 31, 31)" }} className="h-20">
                <div className="relative flex h-16 mr-10 items-end justify-end">
                    <div className="hidden sm:ml-1 sm:block">
                        <div className="flex space-x-4 justify-between">
                            <a href="#" className=" text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 mr-4 font-medium text-3xl">Expense Item</a>
                            <a href="#" className=" text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2  font-medium text-3xl">Concept</a>
                            <a href="#" className="  text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 font-medium text-3xl">Food Order</a>
                        </div>
                    </div>
                </div>
            </nav>

            <Card>
                <ExpenseItem expeneseItemArray={expenses} />
            </Card>
        </>
    );
}

export default App;
