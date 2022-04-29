import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <h1>Nature Blogs</h1>
    <p>Check out our nature blogs</p>
    <StaticImage
      src="../images/animal.png"
      width={300}
      quality={95}
      formats={["auto", "webp", "avif"]}
      alt="Animal Icon"
      style={{ marginBottom: `1.45rem` }}
    />
    <ul>
    {
      data.allContentfulBlogPost.edges.map(edge => (
        <li>
          <Link to={edge.node.slug} key={edge.node.id}>{edge.node.title}</Link>
        </li>
      ))
    }
    </ul>
    <p>
      <Link to="/Giraffes/">Giraffes</Link> <br />
      <Link to="/Monkeys/">Monkeys</Link> <br />
      <Link to="/Whales">Whales</Link> <br />
    </p>
  </Layout>
)

export default IndexPage