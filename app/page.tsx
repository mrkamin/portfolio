import { getProjects } from "@/sanity/sanity-utils";

export default async function Home() {
  const projects = await getProjects();

  return (
    <div className="text-3xl font-bold underline">
      <p>The projects go here:</p>
      {projects.map((project) => (
        <div key={project._id}>{project.name}</div> // ✅ Fix: Properly returning JSX
      ))}
    </div>
  );
}
