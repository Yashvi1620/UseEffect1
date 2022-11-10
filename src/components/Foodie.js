import React, { useState, useEffect } from "react";

const Foodie = () => {
  const [query, setQuery] = useState("Mexican");

  const [data, setData] = useState([]);
  const [setIsclick, setIsclicksetIsclick] = useState(false);

  useEffect(() => {
    fetch(
      `https://api.edamam.com/api/recipes/v2?q=${query}&app_id=a3f740ec&app_key=
      56d6f29e3393c24f4a6ef683e9b5e5a9&type=public`
    )
      .then((Response) => Response.json())
      .then((data) => {
        console.log(data.hits);
        const arrayData = data.hits;
        setData(arrayData);
      });
    // eslint-disable-next-line
  }, [setIsclick]);

  return (
    <div>
      <div className="main">
        <input
          className="int"
          type="text"
          onChange={(e) => {
            setQuery(e.target.value);
          }}
          placeholder="Best Reciepes are here"
        ></input>
        <button
          onClick={() => {
            setIsclicksetIsclick((prevState) => !prevState);
          }}
        >
          Search
        </button>
      </div>
      <div className="content">
        {data.map((item, i) => {
          return (
            <div key={i} className="content-cards">
              <img src={item.recipe.image} alt="receipe" className="images" />{" "}
              <br />
              <h4>{item.recipe.label}</h4>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Foodie;
