import React from "react";

function me({msg, userName}) {
  return (
    <div style={{ flex: 1, overflowY: "auto" }}>
      <div style={{ display: "flex", padding: 10, borderBottom: "1px solid", flexDirection: 'row-reverse' }}>
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
          You
        </div>
        <div style={{ flex: 1, padding: "0 10px" }}>
          <h6 style={{textAlign:'right'}}>{userName}</h6>
          <div>
            {msg}
          </div>
        </div>
      </div>
    </div>
  );
}

export default me;
