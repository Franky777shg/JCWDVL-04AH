let users = [
  {
    id: 1,
    username: "bob",
    password: "asd123",
    email: "bob@gmail.com",
  },
  {
    id: 2,
    username: "jin",
    password: "asd123",
    email: "jin@gmail.com",
  },
  {
    id: 3,
    username: "kazuya",
    password: "asd123",
    email: "kazuya@gmail.com",
  },
];

module.exports = {
  getAllUsers: (req, res) => {
    res.status(200).send(users);
  },
  getUserById: (req, res) => {
    let id = +req.params.id;
    let index = users.findIndex((item) => item.id === id);
    res.status(200).send(users[index]);
  },
  register: (req, res) => {
    let checkUser = users.filter(
      (item) =>
        item.username === req.body.username || item.email === req.body.email
    );
    if (checkUser.length !== 0) {
      res.status(400).send("Username or Email is Already Exist");
    } else {
      req.body.id = users[users.length - 1].id + 1;
      users.push(req.body);
      res.status(200).send(users);
    }
  },
  login: (req, res) => {
    let loginUser = users.filter(
      (item) =>
        item.username === req.body.username &&
        item.password === req.body.password
    );
    if (loginUser.length === 0) {
      res.status(400).send("Username or Password is Wrong");
    } else {
      res.status(200).send(loginUser[0]);
    }
  },
  deleteUser: (req, res) => {
    let id = +req.params.id;
    let index = users.findIndex((item) => item.id === id);
    users.splice(index, 1);
    res.status(200).send(users);
  },
};
