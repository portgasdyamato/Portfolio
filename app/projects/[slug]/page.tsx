import { projectsData } from "@/lib/projects-data"
import ProjectDetailClient from "@/components/project-detail-client"
import { notFound } from "next/navigation"
import type { Metadata } from "next"

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const project = projectsData.find((p) => p.slug === params.slug)
  if (!project) return { title: "Project Not Found" }
  
  return {
    title: `${project.title} | Sakshi Agrahari`,
    description: project.description,
    openGraph: {
      title: project.title,
      description: project.description,
      images: [project.image],
    },
  }
}

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const project = projectsData.find((p) => p.slug === params.slug)
  
  if (!project) {
    notFound()
  }

  return <ProjectDetailClient project={project} />
}
