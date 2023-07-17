import moment from "moment";
import "./ExpenseDate.component.scss";

interface Props {
    expenseDate: Date;
}

export const ExpenseDate = (props: Props) => {
    return (
        <div className="expense-date">
            <div className="expense-date__month">{moment(props.expenseDate).format('MMMM')}</div>
            <div className="expense-date__year">{moment(props.expenseDate).year()}</div>
            <div className="expense-date__day">{moment(props.expenseDate).format('DD')}</div>
        </div>
    );
};  