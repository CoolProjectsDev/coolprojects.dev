import React from "react";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Head from "next/head";
import marked from "marked";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

const Post = ({ content, data }) => {
  return (
    <>
      <Head>
        <title>Cool Projects: {data.title}</title>
      </Head>
      <Navbar />
      <h4><i>{data.publishDate}</i></h4>
      <h2>{data.title}</h2>
      <i>Time spent: {data.timeSpent}</i>
      <div dangerouslySetInnerHTML={{ __html: content }} />
      <p>
        Check out this project on <a href={data.github}>Github</a>
      </p>
      <Footer />
    </>
  );
};

export const getStaticPaths = async () => {
  const files = fs.readdirSync("posts");

  return {
    paths: files.map((filename) => {
      return {
        params: {
          slug: filename.replace(".md", ""),
        },
      };
    }),
    fallback: false,
  };
};

export const getStaticProps = async ({ params: { slug } }) => {
  const mdFile = fs.readFileSync(path.join("posts", slug + ".md")).toString();

  const parsed = matter(mdFile);

  const htmlString = marked(parsed.content);

  return {
    props: {
      content: htmlString,
      data: parsed.data,
    },
  };
};

export default Post;
