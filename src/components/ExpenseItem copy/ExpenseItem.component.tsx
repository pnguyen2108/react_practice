
import "./ExpenseItem.component.scss";

interface expenseItem {
    id: string,
    title: string,
    amount: number,
    date: Date;
}

interface Props {
    expeneseItemArray: Array<expenseItem>;
}

export const ExpenseItem = (props: Props) => {
    const expenses = props.expeneseItemArray.map(item =>
        <div key={item.id} className="expense-item container">
            <div>March 28th 2021</div>
            <div className="expense-item__description">
                <h2>{item.title}</h2>
                <div className="expense-item__price">${item.amount}</div>
            </div>
        </div>
    );

    return (
        <>
            {expenses}
        </>
    );
};  