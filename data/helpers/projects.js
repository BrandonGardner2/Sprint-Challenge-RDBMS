const db = require("../config");

module.exports = {
  addProject
};

function getProjectById(id) {
  return; //stuff here
}

async function addProject(project) {
  const [id] = await db("projects").insert(project);

  return db("projects")
    .where({ id })
    .first();
}
