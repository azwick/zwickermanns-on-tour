import React from 'react'
import ReactMarkdown from 'react-markdown'
import fs from 'fs'
import matter from 'gray-matter'
import path from 'path'

type Props = {
  content: string
}

export default function Index({ content }: Props) {

  return (
    <>
      <h1>MyFirstBlog Index Page with an Error</h1>
      <ReactMarkdown source={content} />
    </>
  )
}

export async function getStaticProps() {
  const filePath = path.join(process.cwd(), 'content', 'index.md')
  const fileContent = fs.readFileSync(filePath, 'utf8')
  const { content } = matter(fileContent)

  return {
    props: {
      content,
    },
  }
}