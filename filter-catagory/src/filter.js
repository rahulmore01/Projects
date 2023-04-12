import React from "react";
// import maggi from "../public/images/maggi.jpeg"
const Filter = () => {
  return (
    <section>
      <header>
        <p>order your favourite dish</p>
        <hr />
      </header>
      <main>
        <div className="btn-flex">
            <button className="btn">breakfast</button>
            <button className="btn">lunch</button>
            <button className="btn">evening</button>
            <button className="btn">dinner</button>
            <button className="btn">all</button>
        </div>
        <div className="cards">
            <div className="card">
                <div>
                    <img src={maggi} alt="maggi" />
                </div>
            </div>

        </div>
      </main>
    </section>
  );
};

export default Filter;
