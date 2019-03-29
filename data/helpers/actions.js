const db = require("../config");

module.exports = {
  addAction
};

async function addAction(action) {
  try {
    const [id] = await db("actions").insert(action);

    return db("actions")
      .where({ id })
      .first();
  } catch (error) {
    return error;
  }
}
