"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Criação de conteudo para instagram (CodeTower)",
    description: "Design de postagens, fotografia e filmagem",
    image: "/images/projects/1.png",
    tag: ["Todos", "Web"],
    gitUrl: "https://www.instagram.com/codetower.ej/" ,
    previewUrl: "/images/projects/1f.png",
  },
  {
    id: 2,
    title: "Design de site de vendas",
    description: "Design e prototipação de UI para site de E-commerce voltado a periféricos de computador ",
    image: "/images/projects/2.png",
    tag: ["Todos", "Web"],
    gitUrl: "/",
    previewUrl: "/images/projects/2f.png",
  },
  {
    id: 3,
    title: "Design de UI para aplicativo ",
    description: "Design de telas para um aplicativo gerenciador de estoque",
    image: "/images/projects/3.png",
    tag: ["Todos", "Web"],
    gitUrl: "/",
    previewUrl: "/images/projects/3f.png",
  },
  {
    id: 4,
    title: "Design de aplicativo mobile",
    description: "Design de telas para um aplicativo movel de anotações e agenda ",
    image: "/images/projects/4.png",
    tag: ["Todos", "Mobile"],
    gitUrl: "/",
    previewUrl: "/images/projects/4f.png",
  },
  {
    id: 5,
    title: "Design e mockup de camiseta",
    description: "Design e mockup para estilos de camiseta",
    image: "/images/projects/5.png",
    tag: ["Todos", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 6,
    title: "Redesign de identidade visual (CodeTower)",
    description: "Design de logo, padrões de postagens e tipográfia",
    image: "/images/projects/6.png",
    tag: ["Todos", "Web"],
    gitUrl: "/",
    previewUrl: "/images/projects/6f.png",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("Todos");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        Meus Projetos
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="Todos"
          isSelected={tag === "Todos"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Mobile"
          isSelected={tag === "Mobile"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
