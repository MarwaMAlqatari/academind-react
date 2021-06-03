//Some kind of container look with round corners, drop shadows, and elements like this.
//because Expense container content and ExpenseItem content have css in common
import "./Card.css";
function Card(props) {
  const classes = "card" + props.className;

  return <div className={classes}>{props.children}</div>;
}

export default Card;
