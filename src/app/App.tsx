import React, { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";

export default function App() {
  const [data, setData] = useState<any>({});
  const [file, setFile] = useState<any>(null);

  useEffect(() => {
    axios.post("http://localhost:3001/v1/auth/login", {
      username: "a@a.com",
      password: "password",
    });
  }, []);

  const handleChange = (name) => (e) =>
    setData((d) => ({
      ...d,
      [e.target.name]: e.target.value,
    }));

  function savePost(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formData = new FormData();
    formData.append("title", data.title);
    formData.append("description", data.description);
    formData.append("image", file);
    axios.post("http://localhost:3001/v1/posts", formData);
  }

  return (
    <div>
      <form noValidate onSubmit={savePost}>
        <input
          type="text"
          name="title"
          placeholder="Title"
          onChange={handleChange("title")}
        />
        <input
          type="text"
          name="description"
          placeholder="Description"
          onChange={handleChange("description")}
        />
        <input
          type="file"
          name="image"
          onChange={(e) => {
            setFile(e.target.files?.[0]);
          }}
        />
        <button type="submit">Save</button>
      </form>
    </div>
  );
}
