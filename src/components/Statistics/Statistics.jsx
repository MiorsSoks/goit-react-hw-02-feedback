import {Title, StatisticItem} from './Statistic.styled'

export default function Statistic({good, neutral, bad, total, positivePercentage}) {
    return (<div>
        <Title>Statistic</Title>
            <ul>
                <StatisticItem>good: {good}</StatisticItem>
                <StatisticItem>neutral: {neutral}</StatisticItem>
                <StatisticItem>bad: {bad}</StatisticItem>
                <StatisticItem>total: {total}</StatisticItem>
                <StatisticItem>positivePercentage: {positivePercentage}</StatisticItem>
            </ul>
    </div>
        
    )
}