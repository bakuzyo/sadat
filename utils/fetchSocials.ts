// import { Social } from "../typings";
import { groq } from "next-sanity";
import { sanityClient } from "../sanity";

const query = groq`
    *[_type == "socials"]
`;

export const fetchSocial = async() => {
    // const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getSocials`);

    // const data = await res.json()
    // const socials: Social[] = data.socials;

    // return socials;
    return sanityClient.fetch(query);
}