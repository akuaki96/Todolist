import Head from "next/head";
import Image from "next/image";
import { useState } from "react";
import styles from "../styles/Home.module.css";

type Todo = {
  name: string;
  done: boolean;
};

export default function Home() {
  const [data, setData] = useState<number[]>([11, 2, 3]);
  const [todos, setTodos] = useState<Todo[]>([
    { name: "aaa", done: false },
    { name: "bbb", done: false },
    { name: "ええ", done: false },
  ]);
  // useState([...Array(100)].map((_, i) => i + 1));
  const [text, setText] = useState(":::");

  const handleChange = (e) => {
    setText(() => e.target.value);
    console.log(text);
  };

  return (
    <div className={styles.container}>
      <button
        onClick={() => {
          const newData = [2];
          setData(newData);
        }}
      >
        追加
      </button>
      <button
        onClick={() => {
          const newData = [1, 2, 3];
          setData(newData);
        }}
      >
        追加2
      </button>
      <button
        onClick={() => {
          const newData = [...data, 4];
          console.log(data);
          console.log([data, 4]);
          console.log(newData);
          setData(newData);
        }}
      >
        追加3
      </button>

      <button
        onClick={() => {
          const newData = data.slice(1);
          setData(newData);
        }}
      >
        削除
      </button>
      <ul>
        {data.map((value) => (
          <li>
            <p>{value}</p>
            <br />
          </li>
        ))}
      </ul>

      <p>text : {text}</p>
      <input
        value={text}
        onChange={(e) => {
          setText(e.target.value);
          console.log(e);
        }}
        type="text"
      />
      <button onClick={() => console.log(text)}>値の確認</button>

      {/* <form>
        <button>追加</button>
        <input></input>
      </form>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          console.log("You clicked submit.");
        }}
      >
        <button type="submit">Submit</button>
      </form> */}

      {todos.map((todo) => (
        <div>
          <p>{todo.name}</p>
          <div></div>
          <div></div>
        </div>
      ))}
    </div>
  );
}
