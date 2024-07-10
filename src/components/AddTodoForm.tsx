import { FC } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

interface AddTodoFormProps {}

export const AddTodoForm: FC<AddTodoFormProps> = (props): React.ReactNode => {
  const {} = props;
  return (
    <form className="flex w-full max-w-sm items-center space-x-2">
      <Input type="new task" placeholder="new task" />
      <Button type="submit">Add</Button>
    </form>
  );
};
