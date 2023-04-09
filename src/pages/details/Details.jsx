import React from "react";
import Loading from "../../components/loading/Loading";
import useNoteDetails from "../../hooks/useNoteDetails";

function Details() {
  const { title, desc } = useNoteDetails();

  return (
    <Loading>
      <>
        <div className="card">
          <div className="card-body">
            <h4 className="card-title">{title}</h4>
            <hr />
            <p className="card-text">{desc}</p>
          </div>
        </div>
      </>
    </Loading>
  );
}

export default Details;
