import type { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from "next";
import { SEO } from "../../components/SEO";
import { SiteShell } from "../../src/components/SiteShell";
import { CaseStudyPage } from "../../src/pages/CaseStudyPage";
import { projects, type ProjectSlug } from "../../src/content";
import { routes } from "../../src/routes";

export const getStaticPaths: GetStaticPaths = async () => ({
  paths: projects.map((project) => ({ params: { slug: project.slug } })),
  fallback: false,
});

export const getStaticProps: GetStaticProps<{ slug: ProjectSlug }> = async ({ params }) => {
  const slug = params?.slug;
  if (typeof slug !== "string" || !projects.some((project) => project.slug === slug)) {
    return { notFound: true };
  }
  return { props: { slug: slug as ProjectSlug } };
};

export default function ProjectRoute({ slug }: InferGetStaticPropsType<typeof getStaticProps>) {
  const project = projects.find((item) => item.slug === slug)!;
  const route = routes.find((item) => item.key === slug)!;
  return (
    <SiteShell>
      <SEO title={route.title} description={route.description} path={route.path} type="article" />
      <CaseStudyPage project={project} />
    </SiteShell>
  );
}
