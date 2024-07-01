import React, { useState, useEffect } from "react";
import EverythingCard from "./EverythingCard";
import Loader from "./Loader";

const HomePage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState([]);
  console.log(data);
  const [page, setPage] = useState(1);

  const [totalResults, setTotalResults] = useState(0);

  let pageSize = 6;

  useEffect(() => {
    fetch(`http://localhost:3000/all-news?page=${page}&pageSize=${pageSize}`)
      .then((response) => {
        if (response.ok) {
          setIsLoading(true);
          return response.clone().json();
        }
      })
      .then((myJson) => {
        setTotalResults(myJson.data.totalResults);
        setData(myJson.data.articles);
      });
    setIsLoading(false);
  }, [page]);

  return (
    <>
      <div className="my-10 cards grid lg:place-content-center md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 xs:grid-cols-1 xs:gap-4 md:gap-10 lg:gap-14 md:px-16 xs:p-3 ">
        {isLoading ? (
          data.map((element, index) => {
            return (
              <>
                <EverythingCard
                  title={element.title}
                  imgUrl={element.urlToImage}
                  publishedAt={element.publishedAt}
                  description={element.description.slice(0, 50)}
                  url={element.url}
                  author={element.author}
                  source={element.source.name}
                  key={index}
                  id={element.author}
                />
              </>
            );
          })
        ) : (
          <Loader />
        )}
      </div>
    </>
  );
};

export default HomePage;
