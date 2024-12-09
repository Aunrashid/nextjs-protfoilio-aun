"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>Python </li>
        <li>JAVA</li>
        <li>Typescript</li>
        <li>Nextjs</li>
        <li>wordpress</li>
        <li>data analyst</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>Metropolitan Academy</li>
        <li>Adamjee Govt. Science College</li>
        <li>Sir Syed University Of Engineering And Technology</li>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2">
        <li>UI/UX Design</li>
        <li>GIT And Github</li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image src="/images/aun.png" width={2000} height={2000} />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
          I am a passionate and ambitious 3rd-semester Software Engineering student at Sir Syed University of Engineering and Technology, dedicated to mastering the art of technology and innovation. With a growing skill set in Java, Python, HTML, Tailwind CSS, TypeScript, Next.js, and WordPress, I thrive on creating modern, efficient, and user-focused digital solutions.

As a media enthusiast, I thrive at the crossroads of technology and innovation, aiming to create solutions that are both functional and visually compelling. I am eager to explore opportunities that challenge me to think critically, innovate, and make a tangible impact in the tech and media industries.

My enthusiasm extends beyond coding—I am deeply intrigued by the fusion of technology and media. As a media enthusiast, I explore creative ways to combine technical expertise with storytelling and design, aiming to craft impactful projects that resonate with users.

I am on a mission to push boundaries in software development, AI, and web technologies while staying attuned to industry trends. With an unwavering commitment to growth and collaboration, I seek opportunities to contribute to innovative projects that inspire, challenge, and leave a lasting mark in both the tech and media worlds.
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Skills{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Education{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              {" "}
              Certifications{" "}
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
