import React, { Component } from "react";
import css from './App.module.css';
import {Statistics} from './Statistics/Statistics';
import {FeedbackOptions} from './FeedbackOptions/FeedbackOptions';
import {Section} from './Section/Section';

let total = 0;
let positivePercentage = 0;

const options = ['Good', 'Neutral', 'Bad'];
export class App extends Component {

  state = {
    good: 0,
    neutral: 0,
    bad: 0
  }

  handleClick = (value) => {
    value = value.toLowerCase();
    this.setState((prevState)=> {
      return {
        [value]: prevState[value] + 1,
      }
    })
  }

  countTotalFeedback = () => {
    total = this.state.good + this.state.neutral + this.state.bad;
    return total;
  }

  countPositiveFeedbackPercentage = () => {
    positivePercentage = total && Math.round(this.state.good * 100 / total);
    return positivePercentage;
  }

  render() {
    const {good, neutral, bad} = this.state;
    return (
      <div className={css.block}>
        <Section title="Please leave feedback">
          <FeedbackOptions options={options}  onLeaveFeedback={this.handleClick} />
        </Section>

        {/* <h1>Please leave feedback</h1> */}
      
        {/* <div className={css.listBtn}>
          {options.map((option) => {

            return (
              <button onClick={() => this.handleClick(option)} key={option} className={`${css.itemBtn} ${css.itemBtn__green}`}>{option}</button>
            )
          })}
        </div> */}
        
        <Section title="Statistics">
          <Statistics good={good} neutral={neutral} bad={bad} total={this.countTotalFeedback()} positivePercentage={this.countPositiveFeedbackPercentage()} />
        </Section>

        {/* <h2>Statistics</h2> */}

        {/* {good || neutral || bad ? <ul className={css.list}>
          <li className={css.item__green}>Good: {good}</li>
          <li className={css.item__blue}>Neutral: {neutral}</li>
          <li className={css.item__red}>Bad: {bad}</li>
          <li className={css.item}>Total: {this.countTotalFeedback()}</li>
          <li className={css.item}>Positive Feedback: {this.countPositiveFeedbackPercentage()}%</li>
        </ul> : <span className={css.blockFeedBack}>There is no feedback</span>} */}
      </div>
    )
  }
}

