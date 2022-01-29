import {Component} from 'react'
import FeedbackOptions from './components/FeedbackOptions/FeedbackOptions'
import Statistics from './components/Statistics/Statistics'


export default class App extends Component {

    state = {
        good: 0,
        neutral: 0,
        bad: 0
        }

    handleIncrement = option=> {
        this.setState(prevState => ({
            [option]: prevState[option] + 1    
        }));
    }

    countTotalFeedback = total => {
       return this.state.good 
    }

    createArrayKeysState = () => Object.keys(this.state);

    render() {
        const { good, neutral, bad } = this.state;

        return <>
            <FeedbackOptions
                options={this.createArrayKeysState()}
                onLeaveFeedback={this.handleIncrement}
            ></FeedbackOptions>
            <Statistics good={good} neutral={neutral} bad={bad}>

            </Statistics>
        </>
            
                 
    }
}
        
