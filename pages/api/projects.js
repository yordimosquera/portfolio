import { groq } from "next-sanity";
import { sanityClient } from "../../sanity";

const get = async (req, res) => {
  const query = groq`*[_type == "project"]{..., technologies[]->}`;
  const projects = await sanityClient.fetch(query);
  res.status(200).json({ projects });
};

export default get;
