import { groq } from "next-sanity";
import { sanityClient } from "../../sanity";

export default get = async (req, res) => {
  const query = groq`*[_type == "project"]{..., technologies[]->}`;
  const projects = await sanityClient.fetch(query);
  res.status(200).json({ projects });
};
