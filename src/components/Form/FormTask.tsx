import { useFormik } from 'formik';
import { InputText } from 'primereact/inputtext';
import { classNames } from 'primereact/utils';
import React, { forwardRef, Ref, SyntheticEvent } from 'react';
import '../../index.css';
import { Task } from '../../interfaces/index';

export interface RefObjectFormTask {
    onSubmit: () => void;    
}

interface FormTaskProps {
    ref?: ((instance: unknown) => void) | React.MutableRefObject<unknown> | null;
    onSave: (task: Task) => void;
    task?: Task;
}

const FormTask = forwardRef((props: FormTaskProps, ref: Ref<RefObjectFormTask>) => {
    const { onSave, task } = props;

    const [formTask, setFormTask] = React.useState<Task>(task || {} as Task);
    
    const formik = useFormik({                
        initialValues: {
            title: task?.title ? task.title : '',
            description: task?.description ? task.description : '',            
        },
        
        validate: (data: Task) => {
            let errors = {
                title: '',
                description: ''
            };

            if (!data.title) {
                errors.title = 'Title is required.';
            }

            if (!data.description) {
                errors.description = 'Description is required.';
            }

            return errors;
        },
        
        onSubmit: (data) =>{
            onSave(data);
            console.log('aaa')
        },        

    });
    
    const handleSubmit = (e: SyntheticEvent) => {        
        e.preventDefault();
        formik.handleSubmit();
        formik.validateForm(formTask).then((r) =>{
            if (!r.title && !r.description) {
                onSave(formTask)   
            }
        })
        return false;
    }


    const isFormFieldValid = (name: string) => !!(formik.touched[name as keyof Task] && formik.errors[name as keyof Task]);
    const getFormErrorMessage = (name: string) => {
        return isFormFieldValid(name) && <small className="p-error">{formik.errors[name as keyof Task]}</small>;
    };
    


    return (
        <div className="form-demo" style={{ marginTop: '2rem' }}>
            <div className="">
                <form id='form-task' className="p-fluid" onSubmit={(e) => handleSubmit(e)}>
                    <div className="p-field">
                        <span className="p-float-label">
                            <InputText id="title" name="title" value={formTask.title} onChange={(e) => setFormTask({...formTask, title: e.currentTarget.value})} autoFocus className={classNames({ 'p-invalid': isFormFieldValid('title') })} />
                            <label htmlFor="title" className={classNames({ 'p-error': isFormFieldValid('title') })}>Title*</label>
                        </span>
                        {getFormErrorMessage('title')}
                    </div>
                    <div className="p-field p-mt-6">
                        <span className="p-float-label">
                            <InputText id="description" name="description" value={formTask.description} onChange={(e) => setFormTask({...formTask, description: e.currentTarget.value})} autoFocus className={classNames({ 'p-invalid': isFormFieldValid('description') })} />
                            <label htmlFor="description" className={classNames({ 'p-error': isFormFieldValid('description') })}>Description*</label>
                        </span>
                        {getFormErrorMessage('description')}
                    </div>                    
                </form>                
            </div>
        </div>
    );
});

export default FormTask;