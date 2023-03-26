import css from './Statistics.module.css';

export const Statistics = ({good, neutral, bad, total, positivePercentage}) => {
  return (
    good || neutral || bad ? <ul className={css.list}>
    <li className={css.item__green}>Good: {good}</li>
    <li className={css.item__blue}>Neutral: {neutral}</li>
    <li className={css.item__red}>Bad: {bad}</li>
    <li className={css.item}>Total: {total}</li>
    <li className={css.item}>Positive Feedback: {positivePercentage}%</li>
    </ul> : <span className={css.blockFeedBack}>There is no feedback</span>
  )
}

