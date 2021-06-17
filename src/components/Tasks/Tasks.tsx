import React from 'react';
import 'primeflex/primeflex.css';
import 'primeicons/primeicons.css';
import 'primereact/resources/primereact.css';
import '../../index.css';
import PanelTask from '../Panel/PanelTask';
interface TasksProps {
    onChange?: () => void;
}

const Tasks: React.FunctionComponent<TasksProps> = (props: TasksProps) => {
    // const { onChange } = props;

    return (

        <div className='p-grid'>
            <div className="p-col-6 p-lg-3">
                <PanelTask title='To Do' />
            </div>
            <div className="p-col-6 p-lg-3">
                <PanelTask title='In progress' />
            </div>
        </div>


    )
}

export default Tasks;