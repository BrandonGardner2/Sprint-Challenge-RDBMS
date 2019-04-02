const db = require("../config");

module.exports = {
  addAction,
  getActions
};

function getActions() {
  return db("actions");
}

async function addAction(action) {
  const [id] = await db("actions").insert(action);

  return db("actions")
    .where({ id })
    .first();
}
