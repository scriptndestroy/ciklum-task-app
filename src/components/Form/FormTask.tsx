import { useFormik } from "formik";
import { Dropdown } from "primereact/dropdown";
import { InputText } from "primereact/inputtext";
import { classNames } from "primereact/utils";
import React, { forwardRef, Ref, SyntheticEvent, useEffect } from "react";
import "../../index.css";
import { Task } from "../../interfaces/index";
import { tasksService } from "../../services";

export interface RefObjectFormTask {
  onSubmit: () => void;
}

interface FormTaskProps {
  ref?: ((instance: unknown) => void) | React.MutableRefObject<unknown> | null;
  onSave: (task: Task) => void;
  task?: Task;
}

const FormTask = forwardRef(
  (props: FormTaskProps, ref: Ref<RefObjectFormTask>) => {    
    const { onSave, task } = props;

    const [formTask, setFormTask] = React.useState<Task>(task || ({} as Task));
    const [taskStatus, setTaskStatus] = React.useState<any[]>([]);

    useEffect(() => {
        tasksService.getTaskStatus()
        .then((response: any[]) => {
            setTaskStatus(response);
        })
    }, []);

    const formik = useFormik({
      initialValues: {
        title: task?.title ? task.title : "",
        description: task?.description ? task.description : "",
        status: task?.status ? task.status : "",
      },

      validate: (data: Task) => {
        let errors = {
          title: "",
          description: "",
          status: "",
        };

        if (!data.title) {
          errors.title = "Title is required.";
        }

        if (!data.description) {
          errors.description = "Description is required.";
        }

        if (!data.status) {
          errors.status = "Status is required.";
        }

        return errors;
      },

      onSubmit: (data) => {
        onSave(data);
        console.log("aaa");
      },
    });

    const handleSubmit = (e: SyntheticEvent) => {
      e.preventDefault();
      formik.handleSubmit();
      formik.validateForm(formTask).then((r) => {
        if (!r.title && !r.description) {
          onSave(formTask);
        }
      });
      return false;
    };

    const isFormFieldValid = (name: string) =>
      !!(
        formik.touched[name as keyof Task] && formik.errors[name as keyof Task]
      );
    const getFormErrorMessage = (name: string) => {
      return (
        isFormFieldValid(name) && (
          <small className="p-error">{formik.errors[name as keyof Task]}</small>
        )
      );
    };    

    return (
      <div className="form-demo" style={{ marginTop: "2rem" }}>
        <div className="">
          <form
            id="form-task"
            className="p-fluid"
            onSubmit={(e) => handleSubmit(e)}
          >
            <div className="p-field">
              <span className="p-float-label">
                <InputText
                  id="title"
                  name="title"
                  value={formTask.title}
                  maxLength={100}
                  onChange={(e) =>
                    setFormTask({ ...formTask, title: e.currentTarget.value })
                  }
                  autoFocus
                  className={classNames({
                    "p-invalid": isFormFieldValid("title"),
                  })}
                />
                <label
                  htmlFor="title"
                  className={classNames({
                    "p-error": isFormFieldValid("title"),
                  })}
                >
                  Title*
                </label>
              </span>
              {getFormErrorMessage("title")}
            </div>
            <div className="p-field p-mt-6">
              <span className="p-float-label">
                <InputText
                  id="description"
                  name="description"
                  value={formTask.description}
                  maxLength={300}
                  onChange={(e) =>
                    setFormTask({
                      ...formTask,
                      description: e.currentTarget.value,
                    })
                  }
                  className={classNames({
                    "p-invalid": isFormFieldValid("description"),
                  })}
                />
                <label
                  htmlFor="description"
                  className={classNames({
                    "p-error": isFormFieldValid("description"),
                  })}
                >
                  Description*
                </label>
              </span>
              {getFormErrorMessage("description")}
            </div>
            <div className="p-field p-mt-6">
              <span className="p-float-label">
                <Dropdown
                  id="status"
                  name="status"                  
                  options={taskStatus}
                  value={formTask.status}
                  onChange={(e) =>                  
                    setFormTask({ ...formTask, status: e.value })
                  }
                  className={classNames({
                    "p-invalid": isFormFieldValid("status"),
                  })}
                />
                <label
                  htmlFor="status"
                  className={classNames({
                    "p-error": isFormFieldValid("status"),
                  })}
                >
                  Status*
                </label>
              </span>
              {getFormErrorMessage("status")}
            </div>
          </form>
        </div>
      </div>
    );
  }
);

export default FormTask;
