import { useState } from 'react'

import './App.css'

import data from "./upcoming-events.json"

import { GlobalStyle } from './GlobalStyle'
import { Section } from './Components/Section/Section'
import { Title } from './Components/Title/Title'
import { PageBoard } from './Components/PageBoard/PageBoard'


function App() {

  return (
    <>
      <GlobalStyle/>
      <Section>
        <Title />
        <PageBoard events={data} />
      </Section>
    </>
  )
}

export default App
