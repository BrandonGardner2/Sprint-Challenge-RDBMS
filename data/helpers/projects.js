const db = require("../config");

module.exports = {
  addProject,
  getProjectById
};

async function getProjectById(id) {
  const project = await db("projects")
    .where({ id })
    .first();
  const actions = await db("actions").where({ project_id: id });
  if (project) {
    return {
      ...project,
      actions
    };
  } else {
    return false;
  }
}

async function addProject(project) {
  const [id] = await db("projects").insert(project);

  return db("projects")
    .where({ id })
    .first();
}
