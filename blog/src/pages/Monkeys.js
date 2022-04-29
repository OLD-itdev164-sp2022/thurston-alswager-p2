import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <h1>Monkeys</h1>
    <StaticImage
      src="../images/monkey.jpg"
      width={300}
      quality={95}
      formats={["auto", "webp", "avif"]}
      alt="Monkey Image"
      style={{ marginBottom: `1.45rem` }}
    />
    <h2>Intro</h2>
    <p>Monkey is a common name that may refer to most mammals of the infraorder Simiiformes, also known as the simians. 
    Traditionally, all animals in the group now known as simians are counted as monkeys except the apes, a grouping known 
    as paraphyletic; however in the broader sense based on cladistics, apes (Hominoidea) are also included, making the terms 
    monkeys and simians synonyms in regards to their scope. </p>
  </Layout>
)

export default IndexPage
