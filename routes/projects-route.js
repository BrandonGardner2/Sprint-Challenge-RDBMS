const router = require("express").Router();
const Projects = require("../data/helpers/projects");

router.route("/").post(async (req, res) => {
  const project = req.body;
  if (!project.name || !project.description) {
    res.status(400).json({
      message: "Please provide a name and description for the project."
    });
  }
  try {
    const newProject = await Projects.addProject(project);
    res.status(201).json(newProject);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Something went wrong trying to add the project." });
  }
});

router.route("/:id").get(async (req, res) => {
  const { id } = req.params;
  try {
    const project = await Projects.getProjectById(id);
    if (project) {
      res.status(200).json(project);
    } else {
      res.status(404).json({ message: "Project could not be located." });
    }
  } catch (error) {
    res
      .status(500)
      .json({
        message:
          "Something went wrong trying to retrieve that project information."
      });
  }
});

module.exports = router;
