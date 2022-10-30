const graphQLAPI = process.env.NEXT_PUBLIC_GRAPHQL;

const fetchData = async (query: any, { variables = {} }) => {
  const headers = { "Content-Type": "application/json" };

  if (!graphQLAPI) return null;

  const res = await fetch(graphQLAPI, {
    method: "POST",
    headers,
    body: JSON.stringify({
      query,
      variables,
    }),
  });

  const json = await res.json();
  if (json.errors) {
    console.error(json.errors);
    throw new Error("Failed to fetch API");
  }

  return json;
};

export default fetchData;
