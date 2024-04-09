import { View, StatusBar } from 'react-native'
import React from 'react'

const CStatusBar = () => {
  return (
    <>
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle="dark-content"
      />
    </>
  )
}

export default StatusBar