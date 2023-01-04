import { groq } from "next-sanity";
import { sanityClient } from "../../sanity";

export default get = async (req, res) => {
  const query = groq`*[_type == "experience"]{..., technologies[]->}`;
  const experiences = await sanityClient.fetch(query);
  res.status(200).json({ experiences });
};
