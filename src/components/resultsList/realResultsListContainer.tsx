import React from 'react'
import { useResults } from './realResults.vm'
import RealResultsListComponent from './realResultsListComponent'

const RealResultsListContainer = () => {
  const results = useResults()
  return <RealResultsListComponent results={results} />
}

export default RealResultsListContainer
