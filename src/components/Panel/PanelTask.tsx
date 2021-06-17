import 'primeflex/primeflex.css';
import 'primeicons/primeicons.css';
import { Button } from 'primereact/button';
import { Panel } from 'primereact/panel';
// import {Task} from '../../interfaces'
import 'primereact/resources/primereact.css';
import React from 'react';
import DialogTask from '../Dialog/DialogTask';
import '../../index.css';
import { Task } from '../../interfaces';

interface PanelTaskProps {
    tasks?: any[];
    title?: string;
}

const PanelTask: React.FunctionComponent<PanelTaskProps> = (props: PanelTaskProps) => {
    const { title } = props;

    const [tasks, setTasks] = React.useState<Task[]>([]);
    const [selectedTask, setSelectedTask] = React.useState<Task>({
        title: '',
        description: ''
    });
    const [openDialog, setOpenDialog] = React.useState<boolean>(false);

    const template = (options: any) => {
        const className = `${options.className} p-jc-start`;
        const titleClassName = `${options.titleClassName} p-pl-1`;

        return (
            <div className={className}>
                <span className={titleClassName}>
                    {title}
                </span>
                <Button label='Add task' id='addTask' icon='pi pi-plus' onClick={onClickAdd} />
            </div>
        )
    }

    const template2 = (options: any, title: string, index: number) => {
        const className = `${options.className} p-jc-start p-p-2`;
        const titleClassName = `${options.titleClassName} p-pl-1`;

        return (
            <div className={className}>
                <span className={titleClassName}>
                    {title}
                </span>
                <Button className='p-button-rounded p-button-text' icon='pi pi-ellipsis-v' onClick={() => onEdit(index)} />
            </div>
        )
    }

    const onClickAdd = () => {
        setOpenDialog(true);
    }

    const onEdit = (index: number) => {
        setSelectedTask(tasks[index]);
        setOpenDialog(true);
    }

    const onAdd = (task: Task) => {
        let update = [] as Task[];
        if (task.id || task.id === 0) {
            update = [...tasks];
            update[task.id] = task;
        } else {
            task.id = tasks.length;
            update = [...tasks, task];
        }
        setTasks(update);
        setSelectedTask({} as Task);
        setOpenDialog(false);
    }

    return (
        <React.Fragment>
            <DialogTask title='Add Task' task={selectedTask} onSave={(task: Task) => onAdd(task)} onClose={() => { setOpenDialog(false); setSelectedTask({} as Task) }} open={openDialog} />
            <Panel headerTemplate={template} className='p-shadow-1 m-mt-1'>
                {tasks.map((t: Task, i) => {
                    return (
                        <Panel headerTemplate={(o: any) => template2(o, t.title || '', i)} key={i} header={t.title} className='p-mb-1'>{t.description}</Panel>
                    )
                })}
            </Panel>
        </React.Fragment>
    )
}

export default PanelTask;