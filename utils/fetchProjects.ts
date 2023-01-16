// import { Project } from "../typings";
import { groq } from "next-sanity";
import { sanityClient } from "../sanity";

const query = groq`
    *[_type == "project"] {
        ...,
        technologies[]->
    }
`;

export const fetchProjects = async() => {
    // const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getProjects`);

    // const data = await res.json()
    // const projects: Project[] = data.projects;

    // return projects;
    return sanityClient.fetch(query);
}