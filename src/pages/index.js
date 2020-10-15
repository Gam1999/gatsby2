import React, { useState, useEffect } from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Img from "gatsby-image"
const IndexPage = ({ data }) => {
  const [posts, setPosts] = useState([])
  useEffect(() => {
    setPosts(data.allGoogleSheetSheet1Row.nodes)
  }, [])
  return (
    <Layout>
      <SEO title="Home" />
      <h1>Hi people</h1>
      <p>Welcome to your new Gatsby site.</p>
      <p>Now go build something great.</p>
      {posts.map(post => (
        <div
          key={post.id}
          style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}
        >
          <h2>{post.title}</h2>
          <p>{post.description}</p>
          <Img
            fixed={post.localFeaturedImage.childImageSharp.fixed}
            objectFit="cover"
            objectPosition="50% 50%"
          />
        </div>
      ))}
      <Link to="/page-2/">Go to page 2</Link>
    </Layout>
  )
}
export default IndexPage
export const query = graphql`
{
allGoogleSheetSheet1Row {
nodes {
featuredimage
title
id

localFeaturedImage {
childImageSharp {
# Specify the image processing specifications right in the query.
# Makes it trivial to update as your page's design changes.
fixed(width: 800, height: 450) {
...GatsbyImageSharpFixed
}
}
}
}
}
}
`
