import { PortableTextBlock } from "next-sanity";

export type Project = {
    _id: string;
    _pid: string;
    _createdAt: Date;
    _pcreatedAt: Date;
    name: string;
    pname: string;
    slug: string;
    pslug: string;
    image: string;
    pimage: string;
    livedemo: string;
    github: string;
    description: PortableTextBlock[];
    pdescription: PortableTextBlock[];
    program: PortableTextBlock[];
}