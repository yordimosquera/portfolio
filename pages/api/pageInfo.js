import { groq } from "next-sanity";
import { sanityClient } from "../../sanity";

const get = async (req, res) => {
  const query = groq`*[_type == "pageInfo"][0]{..., technologies[]->}`;
  const pageInfo = await sanityClient.fetch(query);
  res.status(200).json({ pageInfo });
};

export default get;
