import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <h1>Whales</h1>
    <StaticImage
      src="../images/whale.jpg"
      width={300}
      quality={95}
      formats={["auto", "webp", "avif"]}
      alt="Whale Image"
      style={{ marginBottom: `1.45rem` }}
    />
    <h2>Intro</h2>
    <p>Whales are a widely distributed and diverse group of fully aquatic placental marine mammals. They are an informal grouping within the infraorder Cetacea,
      which usually excludes dolphins and porpoises. Whales, dolphins and porpoises belong to the order Cetartiodactyla, which consists of even-toed ungulates.
      Their closest non-cetacean living relatives are the hippopotamuses, from which they and other cetaceans diverged about 54 million years ago. The two parvorders 
      of whales, baleen whales (Mysticeti) and toothed whales (Odontoceti), are thought to have had their last common ancestor around 34 million years ago. Whales consist
      of eight extant families: Balaenopteridae (the rorquals), Balaenidae (right whales), Cetotheriidae (the pygmy right whale), Eschrichtiidae (the grey whale), Monodontidae 
      (belugas and narwhals), Physeteridae (the sperm whale), Kogiidae (the dwarf and pygmy sperm whale), and Ziphiidae (the beaked whales). </p>
  </Layout>
)

export default IndexPage
