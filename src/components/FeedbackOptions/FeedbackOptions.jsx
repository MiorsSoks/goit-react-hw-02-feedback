import {Component} from 'react'
import PropTypes from 'prop-types';
import { Title, ButtonItem, } from './FeedbackOptions.styled'


function FeedbackOptions({ options, onLeaveFeedback }) {
        return (<div>
            <Title>Please leave feedback</Title>
             <div>
                {options.map(option => {
                    return (
                    <ButtonItem
                        key={option}
                        onClick={() => {
                        onLeaveFeedback(option);
                        }}
                        >
                            {option}
                    </ButtonItem>
                    );
                })}
            </div>
        </div>  
        )
}

export default FeedbackOptions

FeedbackOptions.propTypes = {
    options: PropTypes.array.isRequired,
    onLeaveFeedback: PropTypes.func.isRequired,
}