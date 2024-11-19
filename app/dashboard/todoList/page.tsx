import AddTask from '@/app/ui/todoList/AddTask';
import TaskList from '@/app/ui/todoList/TaskList';
import { TasksProvider } from '@/app/ui/todoList/TasksContext';
import { lusitana } from '@/app/ui/fonts';

export default function TaskApp() {
  return (
    <TasksProvider>
      <h1 className={`${lusitana.className} mb-4 text-xl md:text-2xl`}>
        Todo List
      </h1>
      <AddTask />
      <TaskList />
    </TasksProvider>
  );
}
