import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import schemas from "./sanity/schemas";


const config = defineConfig({
    projectId: "scav6p92",
    dataset: "production",
    title: "My Personal Website",
    apiVersion: "2024-02-01",
    basePath: "/admin",
    plugins: [deskTool()],
    schema: {types: schemas}
})

export default config;