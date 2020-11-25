/* eslint-disable filenames/match-regex */
import { default as NextApp, AppProps } from "next/app"
import React, { ReactElement } from "react"

class App extends NextApp<AppProps> {
  render(): ReactElement {
    const { Component, pageProps } = this.props

    return <Component {...pageProps} />
  }
}

// eslint-disable-next-line import/no-default-export
export default App
