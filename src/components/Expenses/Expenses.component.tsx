import "./Expenses.component.scss";

interface Props {
    children: React.ReactNode;
}

export const Card = (props: Props) => {
    return (
        <div className="expenses">
            {props.children}
        </div>
    );
};  