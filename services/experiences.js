const fetch = async () => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/experiences`
  );
  const { experiences } = await res.json();
  return experiences;
};

export { fetch };
