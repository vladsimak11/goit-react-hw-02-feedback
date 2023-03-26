import css from './FeedbackOptions.module.css';

export const FeedbackOptions = ({options , onLeaveFeedback}) => {
  return (
    <div className={css.listBtn}>
        {options.map((option) => {

          return (
            <button onClick={() => onLeaveFeedback(option)} key={option} className={`${css.itemBtn} ${css.itemBtn__green}`}>{option}</button>
          )
        })
        }
    </div>
  )
}