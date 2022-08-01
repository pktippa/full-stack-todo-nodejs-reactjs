import { Layout } from "antd";
import React, { useEffect, useState } from "react";
import * as api from "./api";
import { DataType } from "./common/types";
import ListComponent from "./components/List";
import TodoForm from "./components/todo-form";

const { Header, Content, Footer } = Layout;

const App: React.FC = () => {
  const [todos, setTodos] = useState([]);
  const [newOrEditTodo, setNewOrEditTodo] = useState(false);
  const [editing, setEditing] = useState<Partial<DataType>>({});
  async function getTodos() {
    try {
      const todos = await api.getTodosAPI();
      console.log("todods ", todos);
      setTodos(todos);
    } catch (error) {
      console.error(error);
    }
  }
  useEffect(() => {
    getTodos();
  }, []);

  const onComplete = async (item: DataType, isComplete: boolean) => {
    try {
      const res = await api.updateOneTodo(item.id!, { isComplete });
    } catch (error) {
      console.error(error);
    }
    getTodos();
  };
  const onDelete = async (item: DataType) => {
    try {
      const res = await api.deleteOneTodo(item.id!);
    } catch (error) {
      console.error(error);
    }
    getTodos();
  };
  const onEdit = async (item: Partial<DataType>) => {
    setNewOrEditTodo(true);
    setEditing({ id: item.id, title: item.title, desc: item.desc });
  };
  const onCreateNewTodo = async (item: Partial<DataType>) => {
    try {
      if (item.id) {
        const res = await api.updateOneTodo(item.id, {
          title: item.title,
          desc: item.desc,
        });
      } else {
        const res = await api.createNewTodoAPI(item);
      }
      setNewOrEditTodo(false);
    } catch (error) {
      console.error(error);
    }
    getTodos();
  };
  return (
    <Layout className="layout" style={{ minHeight: "100vh" }}>
      <Header>
        <span>Todo App</span>
      </Header>
      <Content style={{ padding: "0 50px" }}>
        {/* Content */}
        <div className="site-layout-content" style={{ textAlign: "center" }}>
          {newOrEditTodo ? (
            <TodoForm
              createNewTodo={onCreateNewTodo}
              id={editing?.id}
              title={editing?.title}
              desc={editing?.desc}
            />
          ) : (
            <ListComponent
              data={todos}
              onComplete={onComplete}
              onDelete={onDelete}
              onEdit={onEdit}
              onNewTodo={() => setNewOrEditTodo(true)}
            />
          )}
        </div>
      </Content>
      <Footer style={{ textAlign: "center" }}></Footer>
    </Layout>
  );
};

export default App;
