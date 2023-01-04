const fetch = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/socials`);
  const { socials } = await res.json();
  return socials;
};

export { fetch };
