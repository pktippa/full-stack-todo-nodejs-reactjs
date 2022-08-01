import { Button, Space } from "antd";

type HeaderListComponentProps = {
  onNewTodo: () => void;
};
const HeaderListComponent = ({ onNewTodo }: HeaderListComponentProps) => {
  return (
    <Space>
      Todo(s)
      <Button type="primary" onClick={onNewTodo}>
        New
      </Button>
    </Space>
  );
};
export default HeaderListComponent;