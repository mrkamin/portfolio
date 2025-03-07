import { Project } from "@/types/Project";
import { createClient, groq } from "next-sanity";

export async function getProjects(): Promise<Project[]> {
    const client = createClient({
        projectId: "scav6p92",
        dataset: "production",
        apiVersion: "2024-02-01",
    });

    return client.fetch(
        groq`*[_type == "project"]{
            _id,
            _createdAt,
            name,
            "slug": slug.current,
            "image": image.asset->url,
            livedemo,
            github,
            description,
            program
          }`
    )
}