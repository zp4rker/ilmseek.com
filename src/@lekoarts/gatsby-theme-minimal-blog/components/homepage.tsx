/** @jsx jsx */
import React from "react"
import { jsx } from "theme-ui"
import { Link } from "gatsby"
import Layout from "@lekoarts/gatsby-theme-minimal-blog/src/components/layout"
import Title from "@lekoarts/gatsby-theme-minimal-blog/src/components/title"
import Listing from "@lekoarts/gatsby-theme-minimal-blog/src/components/listing"
import useMinimalBlogConfig from "@lekoarts/gatsby-theme-minimal-blog/src/hooks/use-minimal-blog-config"
import replaceSlashes from "@lekoarts/gatsby-theme-minimal-blog/src/utils/replaceSlashes"
import Quote from "../../../texts/quote"

type PostsProps = {
    posts: {
        slug: string
        title: string
        date: string
        excerpt: string
        description: string
        timeToRead?: number
        tags?: {
            name: string
            slug: string
        }[]
    }[]
}

const Homepage = ({ posts }: PostsProps) => {
    const { basePath, blogPath } = useMinimalBlogConfig()

    return (
        <Layout>
            <section sx={{ mb: [4, 5, 6], p: { fontSize: [1, 2, 3], mt: 2 } }}>
                <Quote />
            </section>
            <Title text="Latest Posts">
                <Link to={replaceSlashes(`/${basePath}/${blogPath}`)}>Read all posts</Link>
            </Title>
            <Listing posts={posts} />
        </Layout>
    )
}

export default Homepage
