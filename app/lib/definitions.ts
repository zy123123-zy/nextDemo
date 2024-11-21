export interface Task {
  id: number;
  text: string;
  done: boolean;
};

export interface TaskAction {
  id: number;
  text: string;
  type: string;
  task: Task;
}

export type TaskReducer = React.Reducer<Task[], TaskAction>