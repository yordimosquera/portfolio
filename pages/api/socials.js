import { groq } from "next-sanity";
import { sanityClient } from "../../sanity";

export default get = async (req, res) => {
  const query = groq`*[_type == "social"]`;
  const socials = await sanityClient.fetch(query);
  res.status(200).json({ socials });
};
