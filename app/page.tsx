import { getProjects } from "@/sanity/sanity-utils";

export default async function Home() {

  const projects = await getProjects();
  console.log("click", projects.name)
  return (
   <div>
    <p>the project gose here</p>
    {projects.map((project) => {
      <div key={project._id}>{project.name}</div>
    })}
   </div>
  );
}

