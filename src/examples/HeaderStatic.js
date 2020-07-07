import React from "react"
import { StaticQuery, graphql } from "gatsby"

const ComponentName = () => (
    <StaticQuery
        query={graphql`
      {
        site {
          info: siteMetadata {
            author
            data
            description
            title
            person {
              name
              age
            }
          }
        }
      }
    `}
        render={data => <pre>{data.site.info.author}</pre>}
    ></StaticQuery>
)

export default ComponentName;

