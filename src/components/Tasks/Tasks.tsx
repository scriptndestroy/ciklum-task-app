import React, { useEffect } from "react";
import "primeflex/primeflex.css";
import "primeicons/primeicons.css";
import "primereact/resources/primereact.css";
import "../../index.css";
import PanelTask from "../Panel/PanelTask";
import { Task } from "../../interfaces";
import { tasksService } from "../../services";

interface TasksProps {
  // tasks?: Task[]
}

const Tasks: React.FunctionComponent<TasksProps> = (props: TasksProps) => {
  // const { tasks } = props;

  const [tasks, setTasks] = React.useState<Task[]>([] as Task[]);

  useEffect(() => {      
    getAllTasks();
  }, []);

  const getAllTasks = () => {
    tasksService.getAll().then((response: Task[]) => {
      setTasks(response);
    });
  };

  const addTask = (task: Task) => {
    tasksService
      .create(task)
      .then((response: Task[]) => {
        setTasks(response);
      })
      .catch((e: any) => {
        console.error(e);
      });
  };

  const updateTask = (task: Task) => {
    tasksService
      .update(task)
      .then((response: Task[]) => {
        setTasks(response);
      })
      .catch((e: any) => {
        console.error(e);
      });
  };

  const onChange = (task: Task) => {
      debugger
    if (task.id) {
      updateTask(task);
    } else {
      addTask(task);
    }
  };

  return (
    <div className="p-grid">
      <div className="p-col-12 p-lg-2">
        <PanelTask
          title="To Do"
          onChange={onChange}
          tasks={tasks.filter((t: Task) => t.status === "TD")}
        />
      </div>
      <div className="p-col-12 p-lg-2">
        <PanelTask
          readOnly
          title="Done"
          onChange={onChange}
          tasks={tasks.filter((t: Task) => t.status === "D")}
        />
      </div>
    </div>
  );
};

export default Tasks;
