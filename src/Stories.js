import React from "react";

import { useGlobalContext } from "./context";

const Stories = () => {
  const { isLoading, hits, removeBtn } = useGlobalContext();

  if (isLoading) {
    return <div className="loading"></div>;
  }
  return (
    <section className="stories">
      {hits.map((story) => {
        const { objectID, num_comments, points, title, url, author } = story;
        return (
          <article className="story" key={objectID}>
            <h4 className="title">{title}</h4>
            <p className="info">
              {points} points by {author} <span>|</span> {num_comments} comments
            </p>
            <div>
              <a href={url} className="read-link">
                read more
              </a>
              <button
                className="remove-btn"
                onClick={() => {
                  removeBtn(objectID);
                }}
              >
                remove
              </button>
            </div>
          </article>
        );
      })}
    </section>
  );
};

export default Stories;
