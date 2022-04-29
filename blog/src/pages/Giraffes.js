import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <h1>Giraffes</h1>
    <StaticImage
      src="../images/zvt.jpg"
      width={300}
      quality={95}
      formats={["auto", "webp", "avif"]}
      alt="Giraffe Image"
      style={{ marginBottom: `1.45rem` }}
    />
    <h2>Intro</h2>
    <p>The giraffe is a tall African hoofed mammal belonging to the genus Giraffa. It is the tallest living terrestrial animal and the largest ruminant on Earth. 
    Traditionally, giraffes were thought to be one species, Giraffa camelopardalis, with nine subspecies. Most recently, researchers proposed dividing them into 
    up to eight extant species due to new research into their mitochondrial and nuclear DNA, as well as morphological measurements. Seven other extinct species of 
    Giraffa are known from the fossil record. </p>
  </Layout>
)

export default IndexPage
