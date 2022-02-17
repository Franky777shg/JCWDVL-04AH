import { useState, useEffect } from "react";
import Axios from "axios";
import { Table, Form, Button } from "react-bootstrap";
const URL = "http://localhost:2000/product";

const App = () => {
  const [data, setData] = useState([]);
  const [newData, setNewData] = useState({});
  const [selectedID, setSelectedID] = useState(0);
  const [editData, setEditData] = useState({});

  const inputHandlerAdd = (e) => {
    const name = e.target.name;
    const value = name === "price" ? +e.target.value : e.target.value;

    setNewData({
      ...newData,
      [name]: value,
    });
  };

  const inputHandlerEdit = (e) => {
    const name = e.target.name;
    const value = name === "price" ? +e.target.value : e.target.value;

    setEditData({
      ...editData,
      [name]: value,
    });
  };

  useEffect(() => {
    Axios.get(URL)
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const onSubmit = () => {
    Axios.post(URL + "/add", newData)
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const onDelete = (id) => {
    Axios.delete(URL + `/delete/${id}`)
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const onEdit = (id) => {
    setSelectedID(id);
    let result = data.filter((item) => item.id === id);
    setEditData(result[0]);
  };

  const onCancel = () => {
    setSelectedID(0);
  };

  const onSave = (id) => {
    Axios.patch(URL + `/edit/${id}`, editData)
      .then((res) => {
        setData(res.data);
        setSelectedID(0);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const tableHead = () => {
    return (
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Price</th>
          <th>Category</th>
          <th>Action</th>
        </tr>
      </thead>
    );
  };

  const tableBody = () => {
    const style = {
      width: "100px",
      margin: "0 5px",
    };
    return (
      <tbody>
        {data.map((item) => {
          if (item.id === selectedID) {
            return (
              <tr>
                <td>{item.id}</td>
                <td>
                  <Form.Control
                    placeholder="Name"
                    name="name"
                    value={editData.name}
                    onChange={(e) => inputHandlerEdit(e)}
                  />
                </td>
                <td>
                  <Form.Control
                    type="number"
                    placeholder="Price"
                    name="price"
                    value={editData.price}
                    onChange={(e) => inputHandlerEdit(e)}
                  />
                </td>
                <td>
                  <Form.Select
                    name="category"
                    value={editData.category}
                    onChange={(e) => inputHandlerEdit(e)}
                  >
                    <option>Choose Category</option>
                    <option value={"fashion"}>Fashion</option>
                    <option value={"electronic"}>Electronic</option>
                    <option value={"fruit"}>Fruit</option>
                    <option value={"food"}>Food</option>
                    <option value={"drink"}>Drink</option>
                  </Form.Select>
                </td>
                <td>
                  <Button
                    variant="success"
                    style={style}
                    onClick={() => onSave(item.id)}
                  >
                    Save
                  </Button>
                  <Button variant="danger" style={style} onClick={onCancel}>
                    Cancel
                  </Button>
                </td>
              </tr>
            );
          }
          return (
            <tr>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.price}</td>
              <td>{item.category}</td>
              <td>
                <Button
                  variant="warning"
                  style={style}
                  onClick={() => onEdit(item.id)}
                >
                  Edit
                </Button>
                <Button
                  variant="danger"
                  style={style}
                  onClick={() => onDelete(item.id)}
                >
                  Delete
                </Button>
              </td>
            </tr>
          );
        })}
      </tbody>
    );
  };

  const tableInput = () => {
    return (
      <tbody>
        <tr>
          <td>#</td>
          <td>
            <Form.Control
              placeholder="Name"
              name="name"
              onChange={(e) => inputHandlerAdd(e)}
            />
          </td>
          <td>
            <Form.Control
              type="number"
              placeholder="Price"
              name="price"
              onChange={(e) => inputHandlerAdd(e)}
            />
          </td>
          <td>
            <Form.Select name="category" onChange={(e) => inputHandlerAdd(e)}>
              <option>Choose Category</option>
              <option value={"fashion"}>Fashion</option>
              <option value={"electronic"}>Electronic</option>
              <option value={"fruit"}>Fruit</option>
              <option value={"food"}>Food</option>
              <option value={"drink"}>Drink</option>
            </Form.Select>
          </td>
          <td>
            <Button variant="success" onClick={onSubmit}>
              Submit
            </Button>
          </td>
        </tr>
      </tbody>
    );
  };

  console.log(data);
  return (
    <div>
      <h1 style={{ textAlign: "center", margin: "5% 0 2% 0" }}>Table Data</h1>
      <Table
        striped
        bordered
        hover
        variant="dark"
        style={{ width: "75%", margin: "auto", textAlign: "center" }}
      >
        {tableHead()}
        {tableBody()}
        {tableInput()}
      </Table>
    </div>
  );
};

export default App;
