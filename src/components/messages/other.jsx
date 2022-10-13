import React from "react";

function other({msg, userName}) {
  return (
    <div style={{ flex: 1, overflowY: "auto" }}>
      <div style={{ display: "flex", padding: 10, borderBottom: "1px solid" }}>
        <div
          style={{
            width: 50,
            height: 50,
            border: "1px solid",
            borderRadius: 50,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          U
        </div>
        <div style={{ flex: 1, padding: "0 10px" }}>
          <h6>{userName}</h6>
          <div>
          {msg}
          </div>
        </div>
      </div>
    </div>
  );
}

export default other;
