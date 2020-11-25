/* eslint-disable filenames/match-regex */
import { default as NextApp, AppProps } from "next/app"
import React, { Component, ReactElement } from "react"

class App extends NextApp<AppProps> {
  render(): ReactElement {
    return <Component />
  }
}

// eslint-disable-next-line import/no-default-export
export default App
