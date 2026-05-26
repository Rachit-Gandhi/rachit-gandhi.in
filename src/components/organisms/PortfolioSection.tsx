import { Link } from "react-router-dom";
import type { ReactNode } from "react";
import PortfolioAccordion from "../molecules/PortfolioAccordion";
import type { PortfolioItem } from "../molecules/PortfolioAccordion";
import ProjectsList from "./ProjectsList";
import styles from "./PortfolioSection.module.css";

type SectionRowProps = {
  title: string;
  action?: ReactNode;
  children: ReactNode;
};

function SectionRow({ title, action, children }: SectionRowProps) {
  return (
    <section className={styles.sectionRow}>
      <div className={styles.sectionLabel}>
        <h3>{title}</h3>
        {action}
      </div>
      <div className={styles.sectionContent}>{children}</div>
    </section>
  );
}

export default function PortfolioSection() {
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


  const skills = [
    ["Core", "Python, Go, SQL"],
    ["AI & GenAI", "LLMs, RAG, LangChain, LangGraph, Azure ML, Azure AI Foundry"],
    ["Backend", "Gin, FastAPI, Flask, Django REST Framework, Node.js"],
    ["Data", "PostgreSQL, PySpark, Pinecone, Azure AI Search"],
    ["Infra", "Docker, Apache Kafka"],
  ];

  return (
    <section className={styles.section} id="portfolio">
      <div className={styles.stack}>
        <PortfolioAccordion title="Work Experience" items={workItems} />
        <div id="projects">
          <SectionRow
            title="Projects"
            action={<Link to="/projects" className={styles.link}>See all</Link>}
          >
            <div className={styles.miniProjects}>
              <ProjectsList limit={3} />
            </div>
          </SectionRow>
        </div>
        <SectionRow title="Publication">
          <div className={styles.publication}>
            <div>
              <strong>Rubric Is All You Need: Improving LLM-based Code Evaluation</strong>
              <span>Primary Author · 21st ACM Conference on International Computing Education Research</span>
            </div>
            <span className={styles.meta}>ICER 2025</span>
          </div>
        </SectionRow>
        <SectionRow title="Technical Skills">
          <div className={styles.skills}>
            {skills.map(([label, value]) => (
              <div className={styles.skillRow} key={label}>
                <span>{label}</span>
                <p>{value}</p>
              </div>
            ))}
          </div>
        </SectionRow>
        <SectionRow title="Education">
          <div className={styles.education}>
            <strong>
              BITS Pilani (Pilani Campus) — B.E. (Hons.) Electronics &
              Instrumentation + M.Sc. (Hons.) Mathematics
            </strong>
            <span>Sep 2020 – Jun 2025 · Pilani, India</span>
          </div>
        </SectionRow>
      </div>
    </section>
  );
}
