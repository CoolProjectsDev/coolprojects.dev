import React from "react";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Navbar from "../../components/Navbar";
import Link from "next/link"
import Footer from "../../components/Footer";
import Head from "next/head";

export default function ProjectOverview(props) {
  const projects = props.projects.map((project) => (
    <li key={project.slug}>
      Project #{project.data.id}:{" "}
      <Link href={`/projects/${project.slug}`}>{project.data.title}</Link>
    </li>
  ));

  return (
    <>
    <Head>
      <title>Cool Projects: Project List</title>
    </Head>
      <Navbar />
      <h3>Projects</h3>
      Check out the projects that I've worked on so far:
      <ul>
        {projects}
      </ul>
      <Footer />
    </>
  );
}

export const getStaticProps = async () => {
  const files = fs.readdirSync("posts");

  const projects = files.map((file) => {
    const mdFile = fs.readFileSync(path.join("posts", file));
    return {
      data: matter(mdFile).data,
      slug: file.replace(".md", ""),
    };
  });

  return {
    props: {
      projects: projects.sort(sortPostsById),
    },
  };
};

const sortPostsById = (a, b) => {
  if (a.id < b.id) return 1;
  if (a.id > b.id) return -1;
  return 0;
};
