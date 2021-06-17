import 'primeflex/primeflex.css';
import 'primeicons/primeicons.css';
import { Button } from 'primereact/button';
import { Dialog } from 'primereact/dialog';
import 'primereact/resources/primereact.css';
import React, { useRef } from 'react';
import '../../index.css';
import { Task } from '../../interfaces';
import FormTask, { RefObjectFormTask } from '../Form/FormTask'
// import './DialogDemo.css';


interface DialogTaskProps {
    onSave: (task: Task) => void;
    onClose: () => void;
    open: boolean;
    title: string;
    task?: Task;
}

const DialogTask: React.FunctionComponent<DialogTaskProps> = (props: DialogTaskProps) => {
    const { open, title, task, onSave, onClose } = props;

    const formTaskRef = useRef<RefObjectFormTask>(null);

    const renderFooter = (name: string) => {
        return (
            <div>
                <Button label="No" icon="pi pi-times" onClick={onClose} className="p-button-text" />
                <Button label="Yes" icon="pi pi-check" type='submit' form='form-task' autoFocus />
            </div>
        );
    }

 
    return (
        <Dialog
            draggable={false}
            dismissableMask
            footer={renderFooter('displayBasic')}
            header={title}            
            onHide={onClose}
            position='top'
            style={{ width: '30rem', marginTop: '5rem' }}
            visible={open}
        >
            <FormTask  ref={formTaskRef} task={task} onSave={(task: Task) => onSave(task)} />
        </Dialog>
    );
};

export default DialogTask;