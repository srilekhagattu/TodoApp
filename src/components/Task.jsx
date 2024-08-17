import React from "react";
import styles from "./Task.module.css";
import { MdDeleteOutline } from "react-icons/md";
import { BsFillCheckCircleFill } from "react-icons/bs";

const Task = ({ task, onComplete, onDelete }) => {
  return (
    <div className={styles.task}>
      <button
        className={styles.checkContainer}
        onClick={() => onComplete(task.id)}
      >
        {task.isCompleted ? <BsFillCheckCircleFill /> : <div />}
      </button>
      <p className={task.isCompleted ? styles.textCompleted : ""}>
        {task.title}
      </p>
      <button className={styles.deleteButton} onClick={() => onDelete(task.id)}>
        <MdDeleteOutline size={25} />
      </button>
    </div>
  );
};

export default Task;
