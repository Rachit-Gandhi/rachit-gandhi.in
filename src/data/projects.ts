import ScrumCli, { meta as scrumCliMeta } from "../content/projects/gator.mdx";
import GoRouter, { meta as goRouterMeta } from "../content/projects/automated-grading.mdx";
import RubricSummary, { meta as rubricSummaryMeta } from "../content/projects/llm-api-gateway.mdx";
import TraceFlo, { meta as traceFloMeta } from "../content/projects/traceflo.mdx";

export type ProjectMeta = {
  title: string;
  summary: string;
  date: string;
  stack: string;
  tags: string[];
  github?: string;
  website?: string;
  slug: string;
  Component: React.FC;
};

type MetaOnly = Omit<ProjectMeta, "slug" | "Component">;

export const projects: ProjectMeta[] = [
  { ...(traceFloMeta as MetaOnly), slug: "traceflo", Component: TraceFlo },
  { ...(scrumCliMeta as MetaOnly), slug: "scrum-cli", Component: ScrumCli },
  { ...(goRouterMeta as MetaOnly), slug: "go-router", Component: GoRouter },
  { ...(rubricSummaryMeta as MetaOnly), slug: "rubric-is-all-you-need", Component: RubricSummary },
];
