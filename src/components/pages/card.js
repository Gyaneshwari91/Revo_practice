import React from "react";
// import "./Card.css";

function Card(props) {
  const {
    data: { vt1, vt2, crt, tp1, tp2, trm, cap, soc },
  } = props;

  return (
    <tr>
      <td>
        <p className="card-text">{vt1}</p>
      </td>
      {vt2 ? (
        <td>
          <p className="card-text">{vt2}</p>
        </td>
      ) : null}
      <td>
        <p className="card-text">{crt}</p>
      </td>
      {cap ? (
        <td>
          <p className="card-text">{cap}</p>
        </td>
      ) : null}
      <td>
        <p className="card-text">{trm}</p>
      </td>
      <td>
        <p className="card-text">{tp1}</p>
      </td>
      {tp2 ? (
        <td>
          <p className="card-text">{tp2}</p>
        </td>
      ) : null}
      <td>
        <p className="card-text">{soc}</p>
      </td>
    </tr>
  );
}

export default Card;
