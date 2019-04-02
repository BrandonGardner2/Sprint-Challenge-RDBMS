const router = require("express").Router();
const Actions = require("../data/helpers/actions");

router
  .route("/")
  .get(async (req, res) => {
    try {
      const actions = await Actions.getActions();
      res.status(200).json(actions);
    } catch (error) {
      res
        .status(500)
        .json({ message: "Something went wrong retrieving the actions." });
    }
  })
  .post(async (req, res) => {
    const action = req.body;
    if (!action.project_id || !action.description || !action.notes) {
      res.status(400).json({
        message:
          "Please provide a project_id, description, and notes for the action"
      });
    }
    try {
      const newAction = await Actions.addAction(action);
      res.status(201).json(newAction);
    } catch (error) {
      res
        .status(500)
        .json({ message: "Something went wrong adding the action." });
    }
  });

module.exports = router;
