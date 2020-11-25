/* eslint-disable filenames/no-index */
import Link from "next/link"
import { Fragment, ReactElement } from "react"

export const IndexPage = (): ReactElement => (
  <Fragment>
    <h1>Hello Next.js 👋</h1>
    <p>
      <Link href="/about">
        <a>About</a>
      </Link>
    </p>
  </Fragment>
)
