import { groq } from "next-sanity";
import { sanityClient } from "../../sanity";

export default get = async (req, res) => {
  const query = groq`*[_type == "pageInfo"]{..., technologies[]->}`;
  const pageInfo = await sanityClient.fetch(query);
  res.status(200).json({ pageInfo });
};
