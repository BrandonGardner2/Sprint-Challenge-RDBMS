exports.seed = function(knex, Promise) {
  return knex("actions").insert([
    {
      project_id: 1,
      description: "Vacuum upstairs",
      notes: "Too much dog hair everywhere!"
    },
    {
      project_id: 1,
      description: "Do the dishes",
      notes: "There are quite a few of them"
    },
    {
      project_id: 2,
      description: "Apply to jobs",
      notes: "Only the 6 figure jobs though"
    },
    {
      project_id: 2,
      description: "Go to interviews",
      notes: "Wear nice clothes"
    },
    {
      project_id: 3,
      description: "Save a lot of money",
      notes: "Like.. a lot of money"
    }
  ]);
};
