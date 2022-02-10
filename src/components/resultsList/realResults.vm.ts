import { useState } from 'react'
import { Result } from '../../models/result'

const mockedResults: Array<Result> = [
  {
    headingText: '"I did it! My dream finally came true"',
    achievement: 'Jane 49, lost 250 pounds (113 kilos)',
    background: require('../../../assets/images/person1.jpg'),
  },
  {
    headingText: '"I feel so much better - tons of energy"',
    achievement: 'Suzanne, lost 30 pounds (16 kilos)',
    background: require('../../../assets/images/person2.jpg'),
  },
  {
    headingText: '"My blood sugar is finally good"',
    achievement: 'Nick, 62 lost 45 pounds (20 kilos)',
    background: require('../../../assets/images/person3.jpg'),
  },
  {
    headingText: '"It\'s a way of life for me now"',
    achievement: 'Candace, 41 lost 150 pounds (70 kilos)',
    background: require('../../../assets/images/person4.jpg'),
  },
  {
    headingText: '"I feel so good now"',
    achievement: 'Nikita, 30 lost 150 pounds (70 kilos)',
    background: require('../../../assets/images/person5.jpeg'),
  },
]

export const useResults = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [results, setResults] = useState(mockedResults)
  return results
}
