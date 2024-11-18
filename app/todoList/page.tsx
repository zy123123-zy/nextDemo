import AddTask from '@/ui/todoList/AddTask.tsx';
import TaskList from '@/ui/todoList/TaskList.tsx';
import { TasksProvider } from '@/ui/todoList/TasksContext.tsx';

export default function TaskApp() {
  return (
    <TasksProvider>
      <h1>Day off in Kyoto</h1>
      <AddTask />
      <TaskList />
    </TasksProvider>
  );
}
