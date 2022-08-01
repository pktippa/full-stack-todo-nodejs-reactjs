import { Button, List, Skeleton, Space } from "antd";
import { DataType } from "../../common/types";
import Header from './Header';

type ListComponentProps = {
  data: Array<DataType>;
  onComplete: (item: DataType, isComplete: boolean) => void;
  onDelete: (item: DataType) => void;
  onEdit: (item: DataType) => void;
  onNewTodo: () => void;
};
const ListComponent = ({
  data,
  onComplete,
  onDelete,
  onEdit,
  onNewTodo
}: ListComponentProps) => {

  const getActions = (item: DataType) => {
    if (item.isComplete) {
      return [
        <a key="list-loadmore-edit" href="#" onClick={() => onComplete(item, false)}>
          incomplete
        </a>,
        <a key="list-loadmore-more" onClick={() => onDelete(item)}>
          delete
        </a>,
      ];
    } else {
      return [
        <a key="list-loadmore-edit" onClick={() => onEdit(item)}>
          edit
        </a>,
        <a key="list-loadmore-edit" onClick={() => onComplete(item, true)}>
          complete
        </a>,
        <a key="list-loadmore-more" onClick={() => onDelete(item)}>
          delete
        </a>,
      ];
    }
  };

  return (

    <List
      className="demo-loadmore-list"
      loading={false}
      itemLayout="horizontal"
      dataSource={data}
      header={<Header onNewTodo={onNewTodo}/>}
      renderItem={(item) => (
        <List.Item actions={getActions(item)}>
          <Skeleton avatar title={false} loading={false} active>
            <List.Item.Meta
              style={item.isComplete ? {backgroundColor: '#90EE90'}: {}}
              title={item.title}
              description={item.desc}
            />
          </Skeleton>
        </List.Item>
      )}
    />
  );
};

export default ListComponent;
