import React, { useState } from "react";

const CreateTodo = () => {
  const [title, setTitle] = useState("");
  const [description, setDesecription] = useState("");

  return (
    <div>
      <div style={{ margin: 10, padding: 10 }}>
        <input
          type="text"
          placeholder="title"
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        ></input>
      </div>
      <div style={{ margin: 10, padding: 10 }}>
        <input
          type="text"
          placeholder="description"
          onChange={(e) => {
            setDesecription(e.target.value);
          }}
        ></input>
      </div>
      <div style={{ margin: 10, padding: 10 }}>
        <button
          onClick={() => {
            fetch("http://localhost:3000/todos", {
              method: "POST",
              body: JSON.stringify({
                title: title,
                description: description,
              }),
              headers: {
                "Content-type": "application/json",
              },
            }).then(async (res) => {
              const json = await res.json();
              alert("Todo added");
            });
          }}
        >
          Add
        </button>
      </div>
    </div>
  );
};

export default CreateTodo;
