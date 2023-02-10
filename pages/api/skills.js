import { groq } from "next-sanity";
import { sanityClient } from "../../sanity";

const get = async (req, res) => {
  const query = groq`*[_type == "skill"]`;
  const skills = await sanityClient.fetch(query);
  res.status(200).json({ skills });
};

export default get;
