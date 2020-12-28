import React from "react";
import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer"
import Head from "next/head";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Cool Projects</title>
      </Head>
      <Navbar />
      <p>
        Hello! I'm Nils, a full stack developer from germany who loves to
        work on random projects. So one day I thought to myself: "Hey, wouldn't
        it be nice if I had a place where I could document all of the cool
        projects that I worked on?"
        <br />
        The answer might be quite obvious, because you are reading this, but
        yes, it would be quite cool!
      </p>
      <h3>So what projects will be put on this website?</h3>
      <p>
        I really don't want to turn this website into a dump. That's why I
        decided to only put projects on here that I think I would want to use. I
        will also only write about projects that I finished, starting from{" "}
        <b>January 1st, 2021</b>. Also, every project that is finished and
        published here, including this website, will have a Github repository.
      </p>
      <h3>
        Criteria for a <i>cool</i> project
      </h3>
      <p>
        Now I don't want to put just anything on here. The projects that I
        envision to be on this website should fit these criteria:
        <ul>
          <li>
            fun
          </li>
          <li>
            interesting
          </li>
          <li>
            short<i>(ish)</i>
          </li>
        </ul>
        A fun and interesting project sounds great and is something that probably everyone would want to work on in their free time, but I do have a full time job and family stuff I need to attend to, so I want to keep projects short.
      </p>
      <p>
        Check out my progress on my <Link href="/projects">projects</Link> page.
      </p>
      <Footer/>
    </div>
  );
}
