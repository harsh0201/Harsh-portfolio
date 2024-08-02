"use client";

import { BsArrowDownRight } from "react-icons/bs";
import Link from "next/link";

const works = [
  {
    num: "01",
    title: "Bhabha Atomic Research Centre (BARC)",
    description:
      "Focused on advancing gamma ray spectroscopy techniques using convolution Variational Autoencoders (CVAE).",
    href: "https://barc.gov.in/",
  },
  {
    num: "02",
    title: "Straive - LearningMate",
    description:
      "Actively contributed to Chegg’s online community forums, sharing insights and best practices for collaborativelearning.",
    href: "https://learningmate.com/",
  },
  {
    num: "03",
    title: "Boston IT",
    description:
      "Collaborated with a team to analyse WAF logs and fine-tune rule sets for optimal security.",
    href: "https://www.bostonindia.in/default.aspx",
  },
];

import { motion } from "framer-motion";

const Works = () => {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
          }}
          className="grid grid-cols-1 md:grid-cols-2 gap-[60px]"
        >
          {works.map((work, index) => {
            return (
              <div
                key={index}
                className="flex flex-1 flex-col justify-center gap-6 group"
              >
                {/* top */}
                <div className="w-full flex justify-between items-center">
                  <div className="text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-hover transition-all duration-500">
                    {work.num}
                  </div>
                  <Link
                    href={work.href}
                    className="w-[70px] h-[70px] rounded-full bg-white group-hover:bg-accent transition-all duration-500 flex justify-center items-center hover:-rotate-45"
                  >
                    <BsArrowDownRight className="text-primary text-3xl" />
                  </Link>
                </div>
                {/* title */}
                <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500">
                  {work.title}
                </h2>
                {/* description */}
                <p className="text-white/60">{work.description}</p>
                {/* border */}
                <div className="border-b border-white/20 w-full"></div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Works;
