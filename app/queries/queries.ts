import fetchData from "../helpers.ts/fetchData";

export const getHomepagePosts = async () => {
  const data = await fetchData(
    `
        query HomepagePosts {
            posts {
                id
                title
                slug
                feature_image {
                    id
                }
                body
            }
        }
        `,
    {
      variables: {},
    }
  );

  return data.data.posts;
};
