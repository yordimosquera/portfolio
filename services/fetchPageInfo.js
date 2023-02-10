export const fetchPageInfo = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/pageInfo`);
  const { pageInfo } = await res.json();
  return pageInfo;
};
