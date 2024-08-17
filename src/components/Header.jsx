import { React, useState } from "react";
import styles from "./Header.module.css";
import todologo from "../assets/todologo.svg";
import { CiCirclePlus } from "react-icons/ci";

const Header = ({ onAddTask }) => {
  const [title, setTitle] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    onAddTask(title);
    setTitle("");
  }

  function handleonChange(event) {
    setTitle(event.target.value);
  }

  return (
    <>
      <header className={styles.header}>
        {/* <img src={todologo} rel="logo" /> */}
        <h2 style={{ alignitems: "center", fontSize: "30px" }}>TodoList</h2>

        <form className={styles.newTaskForm} onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Add a new task..."
            value={title}
            onChange={handleonChange}
          />
          <button>
            <CiCirclePlus style={{ fontSize: "30px", color: "white" }} />
          </button>
        </form>
      </header>
    </>
  );
};

export default Header;
