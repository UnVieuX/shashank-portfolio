"use client";

import { FaJava, FaDatabase, FaServer, FaCode, FaCloud } from "react-icons/fa";
import { SiGit } from "react-icons/si";

import {
  SiTailwindcss,
  SiNextdotjs,
  SiMongodb,
  SiCplusplus,
  SiSpringboot,
  SiAmazonaws,
  SiGrafana,
  SiSplunk,
} from "react-icons/si";

import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";

const about = {
  title: "About me",
  description:
    "I am Shashank Singh, a Big Data Developer at JP Morgan Chase & Co., specializing in building scalable data solutions. With a Bachelor's degree in Computer Science from NIT Bhopal, I excel in developing data pipelines and implementing ETL processes using technologies like Kafka, Spark, and Hadoop. My expertise extends to workflow automation, monitoring, and cloud platforms, where I leverage tools like Control-M, Splunk, Grafana, and AWS to drive innovative data solutions.",
  info: [
    {
      fieldName: "Name",
      fieldValue: "Shashank Singh",
    },
    {
      fieldName: "Contact",
      fieldValue: "+(91)-7415223998",
    },
    {
      fieldName: "Email",
      fieldValue: "shashank.singh751@gmail.com",
    },
    {
      fieldName: "Experience",
      fieldValue: "3+ Years",
    },
    {
      fieldName: "Nationality",
      fieldValue: "Indian",
    },
    {
      fieldName: "Languages",
      fieldValue: "English, Hindi",
    },
  ],
};

const experience = {
  icon: "/assets/resume/badge.svg",
  title: "My experience",
  description:
    "As a Software Developer at JP Morgan Chase & Co., I specialize in building scalable data solutions using Kafka, Spark, and Hadoop. I develop and maintain data pipelines, implement ETL processes, and create data models to support business analytics. My work involves leveraging tools like Control-M for workflow automation, Splunk for log management, and Grafana for data visualization. I also work with AWS S3 for data storage and Jules for job scheduling. Additionally, I integrate AI models into our data solutions to drive innovation and improve business outcomes.",
  items: [
    {
      company: "JP Morgan Chase & Co.",
      position: "Software Developer",
      duration: "2022",
    },
    {
      company: "JP Morgan Chase & Co.",
      position: "Summer Intern",
      duration: "2021",
    },
  ],
};

const education = {
  icon: "/assets/resume/cap.svg",
  items: [
    {
      institution: "National Institute of Technology Bhopal",
      degree: "Bachelor of Technology",
      duration: "2018-2022",
      major: "Computer Science and Engineering"
    }
  ],
};

const skills = {
  title: "My skills",
  description:
    "My technical expertise includes proficiency in Big Data technologies such as Apache Kafka, Apache Spark, and Hadoop. I am skilled in programming languages like Java, C++, and Python, with strong experience in Unix/Linux environments. I work extensively with workflow automation tools like Control-M, monitoring tools like Splunk and Grafana, and cloud platforms like AWS (S3). Additionally, I am proficient in version control systems like Git and documentation tools like Confluence. I also have experience with Spring Boot and integrating AI models into data solutions.",
  skillList: [
    {
      icon: <FaDatabase className="w-12 h-12" />,
      name: "big data",
    },
    {
      icon: <FaServer className="w-12 h-12" />,
      name: "distributed systems",
    },
    {
      icon: <FaCode className="w-12 h-12" />,
      name: "java",
    },
    {
      icon: <FaJava className="w-12 h-12" />,
      name: "spring boot",
    },
    {
      icon: <FaCloud className="w-12 h-12" />,
      name: "aws",
    },
    {
      icon: <FaDatabase className="w-12 h-12" />,
      name: "hadoop",
    },
    {
      icon: <FaServer className="w-12 h-12" />,
      name: "kafka",
    },
    {
      icon: <FaCode className="w-12 h-12" />,
      name: "spark",
    },
    {
      icon: <FaServer className="w-12 h-12" />,
      name: "monitoring",
    },
    {
      icon: <SiGit className="w-12 h-12" />,
      name: "git",
    },
  ],
};

const Resume = () => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { delay: 1, duration: 0.2, ease: "easeIn" },
        }}
        className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
      >
        <div className="container mx-auto">
          <Tabs
            defaultValue="experience"
            className="flex flex-col xl:flex-row gap-[60px]"
          >
            <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
              <TabsTrigger value="experience">Experience</TabsTrigger>
              <TabsTrigger value="education">Education</TabsTrigger>
              <TabsTrigger value="skills">Skills</TabsTrigger>
              <TabsTrigger value="about">About me</TabsTrigger>
            </TabsList>

            <div className="min-h-[70vh] w-full">
              <TabsContent value="experience" className="w-full">
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <h3 className="text-4xl font-bold">{experience.title}</h3>
                  <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                    {experience.description}
                  </p>
                  <ScrollArea className="h-[400px]">
                    <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                      {experience.items.map((item, index) => {
                        return (
                          <li
                            key={index}
                            className="bg-[#232329] h-[184px] py-6 px-18 rounded-xl flex flex-col justify-center items-center gap-1"
                          >
                            <span className="text-accent">{item.duration}</span>
                            <h3 className="text-xl max-w-[260px] min-h-[60px] text-center">
                              {item.position}
                            </h3>
                            <div className="flex items-center gap-3">
                              <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                              <p className="text-white/60">{item.company}</p>
                            </div>
                          </li>
                        );
                      })}
                    </ul>
                  </ScrollArea>
                </div>
              </TabsContent>
              <TabsContent value="education" className="w-full">
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <ScrollArea className="h-[400px]">
                    <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                      {education.items.map((item, index) => {
                        return (
                          <li
                            key={index}
                            className="bg-[#232329] min-h-[184px] py-6 px-18 rounded-xl flex flex-col justify-center items-center gap-1"
                          >
                            <span className="text-accent">{item.duration}</span>
                            <h3 className="text-xl max-w-[300px] min-h-[60px] text-center">
                              {item.degree}
                            </h3>
                            <div className="flex items-center gap-3">
                              <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                              <p className="text-white/60 text-center xl:max-w-[300px]">
                                {item.institution}
                              </p>
                            </div>
                            <div>{item.major}</div>
                          </li>
                        );
                      })}
                    </ul>
                  </ScrollArea>
                </div>
              </TabsContent>
              {/* skills */}
              <TabsContent value="skills" className="w-full">
                <div className="flex flex-col gap-[30px]">
                  <div className="flex flex-col gap-[30px] text-center xl:text-left">
                    <h3 className="text-4xl font-bold">{skills.title}</h3>
                    <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                      {skills.description}
                    </p>
                  </div>
                  <ScrollArea className="h-[400px]">
                    <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 xl:grid-cols-5 xl:gap-2 gap-4">
                      {skills.skillList.map((skill, index) => {
                        return (
                          <li key={index}>
                            <TooltipProvider delayDuration={100}>
                              <Tooltip>
                                <TooltipTrigger className="flex flex-col w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
                                  <div className="text-6xl group-hover:text-accent transition-all duration-300 items-center justify-center">
                                    {skill.icon}
                                  </div>
                                  <div className="group-hover:text-accent capitalize">
                                    {skill.name}
                                  </div>
                                </TooltipTrigger>
                                <TooltipContent>
                                  <p className="capitalize">{skill.name}</p>
                                </TooltipContent>
                              </Tooltip>
                            </TooltipProvider>
                          </li>
                        );
                      })}
                    </ul>
                  </ScrollArea>
                </div>
              </TabsContent>
              <TabsContent
                value="about"
                className="w-full text-center xl:text-left"
              >
                <div className="flex flex-col gap-[30px]">
                  <h3 className="text-4xl font-bold">{about.title}</h3>
                  <p className="max-w[600px] text-white/60 mx-auto xl:mx-0">
                    {about.description}
                  </p>
                  <ul className="grid grid-cols-1 gap-y-6 max-w-[620px] mx-auto xl:mx-0">
                    {about.info.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="flex items-center justify-center xl:justify-start gap-4"
                        >
                          <span className="text-white/60">
                            {item.fieldName}
                          </span>
                          <span className="text-xl">{item.fieldValue}</span>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </TabsContent>
            </div>
          </Tabs>
        </div>
      </motion.div>
    </>
  );
};

export default Resume;
