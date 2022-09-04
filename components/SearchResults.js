import React from "react";
import PaginationButtons from "./PaginationButtons";

export default function SearchResults({ results }) {
  console.log(results);
  return (
    <div className="m-2 pt-3 border-t-2 text-sm ">
      <p className="text-gray-500  text-sm mb-3">
        About {results?.searchInformation?.formattedTotalResults} in {""}(
        {results?.searchInformation?.searchTime}) seconds
      </p>
      {results.items?.map((item) => (
        <div className="max-w-2xl mb-4">
          <div className="group">
            <a href={item.link}>
              <p>{item.formattedUrl}</p>
            </a>
            <a href={item.link}>
              <p className="text-blue-500 font-medium text-md md:text-xl group-hover:link">
                {item.title}
              </p>
            </a>
          </div>

          <div className="">{item.snippet}</div>
        </div>
      ))}
      <PaginationButtons />
    </div>
  );
}
