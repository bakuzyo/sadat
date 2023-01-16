// import { Experience } from "../typings";
import { groq } from "next-sanity";
import { sanityClient } from "../sanity";

const query = groq`
    *[_type == "experience"] {
        ...,
        technologies[]->
    }
`;

export const fetchExperiences = async() => {
    // const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getExperience`);

    // const data = await res.json()
    // const experiences: Experience[] = data.experiences;

    // return experiences;
    return sanityClient.fetch(query);
}