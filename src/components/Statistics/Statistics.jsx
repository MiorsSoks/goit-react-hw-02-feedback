import {Title} from './Statistic.styled'

export default function Statistic({good, neutral, bad}) {
    return (<div>
        <Title>Statistic</Title>
            <ul>
                <Statistic>good: {good}</Statistic>
                <Statistic>neutral: {neutral}</Statistic>
                <Statistic>bad: {bad}</Statistic>
            </ul>
    </div>
        
    )
}