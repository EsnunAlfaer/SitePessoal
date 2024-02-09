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
        <li>Adobe Photoshop</li>
        <li>Adobe Ilustrator</li>
        <li>Adobe After Effects</li>
        <li>Figma</li>
        <li>CorelDRAW</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>Node.js</li>
        <li>React</li>
        <li>Next.js</li>
        <li>JavaScript</li>
        <li>PostgreSQL</li>
        <li>Java</li>
        <li>C</li>
        
      </ul>
    ),
  },
  {
    title: "premios",
    id: "premios",
    content: (
      <p className="text-base lg:text-lg">Prêmio Ipê concedido pela Goiás Junior, recebido como diretor de marketing da empresa junior Code Tower. Recebendo 2 premiações nas categorias: Junior só no nome e Floresceu</p>  
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
      <div className=" md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <div className="md:flex md:flex-col ">
          <Image src="/images/about-image.png" width={500} height={500} className=""/>
        </div>
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">Sobre mim</h2>
          <p className="text-base lg:text-lg">
          Olá meu nome é Rafael Nunes, sou um profissional multifacetado apaixonado pelos mundos do desenvolvimento web, design de interface, design gráfico e marketing digital. Seja codificando uma página da web, esboçando layouts ou criando logotipos,
          meu objetivo é que cada projeto tenha uma identidade visual forte e coerente focando sempre na usabilidade e inovação.
          </p>
          <h2 className="text-4xl font-bold text-white mt-8">Habilidades e conhecimentos</h2>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Design{" "}
            </TabButton>

            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Progamação{" "}
            </TabButton>
            
            <TabButton
              selectTab={() => handleTabChange("premios")}
              active={tab === "premios"}
            >
              {" "}
              Premiações{" "}
            </TabButton>
             
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div >
      </div>
    </section>
  );
};

export default AboutSection;
