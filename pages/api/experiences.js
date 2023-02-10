import { groq } from "next-sanity";
import { sanityClient } from "../../sanity";

const get = async (req, res) => {
  const query = groq`
  *[_type == "experience"]{
    ...,
    technologies[]->
  }
  `;
  const experiences = await sanityClient.fetch(query);
  res.status(200).json({ experiences });
};

export default get;
