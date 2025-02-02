import React from "react";
import FullScreenSection from "./FullScreenSection";
import { Box, Heading } from "@chakra-ui/react";
import Card from "./Card";

const projects = [
  {
    title: "Job Portal Application",
    description:
      "A job portal app that connects job seekers with employers, providing a seamless platform for job searching, applications, and recruitment. It offers user-friendly features like resume uploads, job alerts, and employer dashboards for efficient hiring.",
    getImageSrc: () => require("../images/jobportal.png"),
    url: "https://github.com/Anurag-git04/mswd-.git",
  },
  {
    title: "Neflix Clone",
    description:
      "A Netflix clone app that allows users to stream movies and TV shows with a sleek UI, featuring categories, search functionality, and a responsive video player. Built with modern web technologies for a seamless viewing experience.",
    getImageSrc: () => require("../images/Netflix.png"),
    url: "https://github.com/Anurag-git04/fullstack_netfleix",
  },
  {
    title: "E-commerce App Using Redux",
    description:
      "A frontend eCommerce app with Redux for state management, featuring product listings, a cart system, and a basic login for user authentication. Built for a smooth shopping experience with dynamic UI updates.",
    getImageSrc: () => require("../images/Ecommerce.jpg"),
    url: "https://e-commerce-redux-sigma.vercel.app/",
  },
  {
    title: "Todo List Backend project",
    description:
      "A backend project for a todo list app, built with Node.js and Express. It features RESTful APIs for CRUD operations on tasks, with MongoDB for data storage. The app is designed to be scalable and efficient for managing tasks.",
    getImageSrc: () => require("../images/Todo.png"),
    url: "https://github.com/Anurag-git04/todo_backend",
  },
];

const ProjectsSection = () => {
  return (
    <FullScreenSection
      backgroundColor="#14532d"
      isDarkBackground
      p={8}
      alignItems="flex-start"
      spacing={8}
    >
      <Heading as="h1" id="projects-section">
        Featured Projects
      </Heading>
      <Box
        display="grid"
        gridTemplateColumns="repeat(2,minmax(0,1fr))"
        gridGap={8}
      >
        {projects.map((project) => (
          <Card
            key={project.title}
            title={project.title}
            description={project.description}
            imageSrc={project.getImageSrc()}
            url={project.url}
          />
        ))}
      </Box>
    </FullScreenSection>
  );
};

export default ProjectsSection;
