import React from 'react'
import { FallbackComponent } from './fallbackComponent'

export const FALLBACK_ROUTE = 'fallback'

export const FallbackContainer = (): JSX.Element => {
  return <FallbackComponent />
}
