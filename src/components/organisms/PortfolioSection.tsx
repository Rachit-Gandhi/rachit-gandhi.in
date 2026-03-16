import { Link } from "react-router-dom";
import PortfolioAccordion from "../molecules/PortfolioAccordion";
import type { PortfolioItem } from "../molecules/PortfolioAccordion";
import ProjectsList from "./ProjectsList";
import styles from "./PortfolioSection.module.css";

export default function PortfolioSection() {
  const summaryItems: PortfolioItem[] = [
    {
      title: "Profile Summary",
      description: "Software Engineer focused on production GenAI systems and backend architecture.",
      bullets: [
        "Builds LLM APIs, retrieval pipelines, and scalable data workflows.",
        "Hands-on with backend systems, API design, and AI product integration.",
        "Interested in applied AI systems that are reliable, observable, and maintainable.",
      ],
    },
  ];

  const workItems: PortfolioItem[] = [
    {
      title: "Q3 Technologies · Software Developer (Aug 2025 – Present)",
      description: "",
      bullets: [
        "Contributed to an orchestration-based multi-agent chatbot using Azure OpenAI Foundry + Azure AI Search with API calling, RAG, and controlled internet search.",
        "Implemented end-to-end OAuth 2.0 integration with Canvas LMS using JWT-based authentication flows.",
        "Refactored a legacy Django REST API to Django REST Framework, reducing codebase by ~30% and improving maintainability/security.",
        "Designed a reusable Vue.js chatbot component with markdown streaming, reducing new client integration effort by ~80%.",
      ],
    },
    {
      title: "KPMG India · Solutions Intern (Jul 2024 – Dec 2024)",
      description: "",
      bullets: [
        "Developed and deployed a solar downtime + power prediction model on Azure using Azure Functions and Azure ML pipelines.",
        "Reduced transaction-data processing time from 1 day to ~2 hours using Azure Databricks and Spark.",
        "Built an Integer Programming optimization model for power-station management, reducing operational costs by ~20%.",
      ],
    },
  ];


  const publicationItems: PortfolioItem[] = [
    {
      title: "Rubric Is All You Need: Improving LLM-based Code Evaluation (ICER 2025)",
      description: "Primary Author · 21st ACM Conference on International Computing Education Research.",
    },
  ];

  const skillsItems: PortfolioItem[] = [
    {
      title: "Technical Skills",
      description: "",
      bullets: [
        "Core Languages: Python, Go, SQL",
        "AI & GenAI: LLMs, RAG, LangChain, LangGraph, Azure ML, Azure AI Foundry",
        "Backend & APIs: Gin, FastAPI, Flask, Django REST Framework, Node.js",
        "Data & Storage: PostgreSQL, PySpark, Pinecone, Azure AI Search",
        "DevOps & Infra: Docker, Apache Kafka",
      ],
    },
  ];

  const educationItems: PortfolioItem[] = [
    {
      title:
        "BITS Pilani (Pilani Campus) — B.E. (Hons.) Electronics & Instrumentation + M.Sc. (Hons.) Mathematics",
      description: "Sep 2020 – Jun 2025 · Pilani, India",
    },
  ];

  return (
    <section className={styles.section} id="portfolio">
      <div className={styles.header}>
        <h2 className={styles.title}>Portfolio</h2>
      </div>
      <div className={styles.stack}>
        <PortfolioAccordion title="Summary" items={summaryItems} />
        <PortfolioAccordion title="Work Experience" items={workItems} />
        <div id="projects">
          <div className={styles.header}>
            <h3 className={styles.title}>Projects</h3>
            <Link to="/projects" className={styles.link}>See all</Link>
          </div>
          <div className={styles.miniProjects}>
            <ProjectsList limit={3} />
          </div>
        </div>
        <PortfolioAccordion title="Publication" items={publicationItems} />
        <PortfolioAccordion title="Technical Skills" items={skillsItems} />
        <PortfolioAccordion title="Education" items={educationItems} />
      </div>
    </section>
  );
}
