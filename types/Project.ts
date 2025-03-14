import { PortableTextBlock } from "next-sanity";

export type Project = {
    _id: string;
    _pid: string;
    _ppid: string;
    _createdAt: Date;
    _pcreatedAt: Date;
    _ppcretedAt: Date;
    name: string;
    pname: string;
    slug: string;
    pslug: string;
    ppslug: string;
    image: string;
    pimage: string;
    ppimage: string;
    livedemo: string;
    github: string;
    description: PortableTextBlock[];
    pdescription: PortableTextBlock[];
    ppdescription: PortableTextBlock[];
    program: PortableTextBlock[];
}