import React from 'react';
import 'primeflex/primeflex.css';
import 'primeicons/primeicons.css';
import 'primereact/resources/primereact.css';
import '../../index.css';
import PanelTask from '../Panel/PanelTask';
import { Task } from '../../interfaces';

interface TasksProps {    
    // tasks?: Task[]
}

const Tasks: React.FunctionComponent<TasksProps> = (props: TasksProps) => {
    // const { tasks } = props;

    const [tasks, setTasks] = React.useState<Task[]>([] as Task[]);

     const onChange = (task: Task) => {         
        let update = [] as Task[];
        if (task.id) {
            update = [...tasks];
            update[update.findIndex((t: Task) => t.id === task.id)] = task;
        } else {
            task.id = tasks.length === 0 ? 1 : tasks.length;
            update = [...tasks, task];
        }

        setTasks(update);
     }

    return (

        <div className='p-grid'>
            <div className="p-col-12 p-lg-2">
                <PanelTask title='To Do' onChange={onChange} tasks={tasks.filter((t: Task) => t.status === 'TD')} />
            </div>
            <div className="p-col-12 p-lg-2">
                <PanelTask readOnly title='Done' onChange={onChange} tasks={tasks.filter((t: Task) => t.status === 'D')} />
            </div>
        </div>


    )
}

export default Tasks;