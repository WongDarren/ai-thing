import React, { useState, useEffect } from "react";
import { Loader, Card, FormField } from "../components";

interface RenderCardsProps {
  data: any;
  title: string;
}

interface PostProps {
  _id: string;
  name: string;
  prompt: string;
  photo: any;
}

const RenderCards = ({ data, title }: RenderCardsProps) => {
  if (data?.length > 0) {
    return data.map((post: PostProps) => <Card key={post._id} {...post} />);
  }

  return (
    <h2 className={"mt-5 text-xl font-bold uppercase text-[#6449ff]"}>
      {title}
    </h2>
  );
};

const Home = () => {
  const [loading, setLoading] = useState(false);
  const [allPosts, setAllPosts] = useState(null);
  const [searchText, setSearchText] = useState("");
  const [searchedResults, setSearchedResults] = useState(null);
  const [searchTimeout, setSearchTimeout] = useState(0);

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);

      try {
        const response = await fetch(
          "https://ai-thing.onrender.com/api/v1/post",
          {
            method: "GET",
            headers: { "Content-Type": "application/json" },
          },
        );

        if (response.ok) {
          const result = await response.json();
          setAllPosts(result.data.reverse());
        }
      } catch (error) {
        alert(error);
      } finally {
        setLoading(false);
      }
    };
    fetchPosts();
  }, []);

  const handleSearchChange = (e: {
    target: { value: React.SetStateAction<string> };
  }) => {
    clearTimeout(searchTimeout);
    setSearchText(e.target.value);

    setSearchTimeout(
      setTimeout(() => {
        // @ts-ignore
        const searchResult = allPosts.filter(
          (item: { name: string; prompt: string }) =>
            item.name.toLowerCase().includes(searchText.toLowerCase()) ||
            item.prompt.toLowerCase().includes(searchText.toLowerCase()),
        );
        setSearchedResults(searchResult);
      }, 100),
    );
  };

  return (
    <section className={"mx-auto max-w-7xl"}>
      <div>
        <h1 className={"text-[32px] font-extrabold text-[#222328]"}>
          The Community Showcase
        </h1>
        <p className={"max-w[500px] mt-2 text-[16px] text-[#666e75]"}>
          Browse through a collection of imaginative and visually stunning
          images generated by DALL-E AI.
        </p>
      </div>

      <div className={"mt-16"}>
        <FormField
          labelName={"Search posts"}
          type={"text"}
          name={"text"}
          placeholder={"Search posts"}
          value={searchText}
          handleChange={handleSearchChange}
        />
      </div>

      <div className={"mt-10"}>
        {loading ? (
          <div className={"flex items-center justify-center"}>
            <Loader />
          </div>
        ) : (
          <>
            {searchText && (
              <h2 className={"mb-3 text-xl font-medium text-[#666e75]"}>
                Showing results for{" "}
                <span className={"text-[#222328]"}>{searchText}</span>
              </h2>
            )}
            <div
              className={
                "xs:grid-cols-2 grid grid-cols-1 gap-3 sm:grid-cols-3 lg:grid-cols-4"
              }
            >
              {searchText ? (
                <RenderCards
                  data={searchedResults}
                  title={"No search results found"}
                />
              ) : (
                <RenderCards data={allPosts} title={"No posts found"} />
              )}
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default Home;
