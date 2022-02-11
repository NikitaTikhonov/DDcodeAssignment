const weekdays = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
]

// should be handled in other way for localization purposes
export const currentDayName = () => {
  return weekdays[new Date().getDay()]
}

export const greeting = () => {
  const currentHour = new Date().getHours()
  return new Greeting(currentHour).greeting
}

class Greeting {
  private readonly _greeting: string
  private readonly morning = 'Good morning'
  private readonly evening = 'Good evening'
  private readonly afternoon = 'Good afternoon'

  get greeting(): string {
    return this._greeting
  }

  constructor(hour: number) {
    if (hour < 12) {
      this._greeting = this.morning
    } else if (hour < 18) {
      this._greeting = this.afternoon
    } else {
      this._greeting = this.evening
    }
  }
}
