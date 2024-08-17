import React from "react";
import styles from "./Tasks.module.css";
import Task from "./Task";

const Tasks = ({ tasks, onComplete, onDelete }) => {
  const taskQuantity = tasks.length;
  const completedTasks = tasks.filter((task) => task.isCompleted).length;
  return (
    <>
      <section className={styles.tasks}>
        <header className={styles.header}>
          <div>
            <p>Create Tasks</p>
            <span>{taskQuantity}</span>
          </div>
          <div>
            <p className={styles.textPurple}>Completed Tasks</p>
            <span>
              {completedTasks} of {taskQuantity}
            </span>
          </div>
        </header>
        <div className={styles.list}>
          {tasks.map((task) => (
            <Task
              key={task.id}
              task={task}
              onComplete={onComplete}
              onDelete={onDelete}
            />
          ))}
        </div>
      </section>
    </>
  );
};

export default Tasks;
