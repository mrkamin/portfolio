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
            pname,
            "slug": slug.current,
            "pslug": pslug.current,
            "image": image.asset->url,
            "pimage": pimage.asset->url,
            livedemo,
            github,
            description,
            pdescription,
            program
          }`
    )
}
export async function pGetProjects(): Promise<Project[]> {
    const client = createClient({
        projectId: "scav6p92",
        dataset: "production",
        apiVersion: "2024-02-01",
    });

    return client.fetch(
        groq`*[_type == "secondproject"]{
            _pid,
            _pcreatedAt,
            pname,
            "pslug": pslug.current,
            "pimage": pimage.asset->url,
            pdescription,
          }`
    )
}
export async function ppGetProjects(): Promise<Project[]> {
    const client = createClient({
        projectId: "scav6p92",
        dataset: "production",
        apiVersion: "2024-02-01",
    });

    return client.fetch(
        groq`*[_type == "thirdproject"]{
            _ppid,
            _ppcreatedAt,
            "ppslug": ppslug.current,
            "ppimage": ppimage.asset->url,
            ppdescription,
          }`
    )
}