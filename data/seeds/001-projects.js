exports.seed = function(knex, Promise) {
  return knex("projects").insert([
    { name: "Clean House", description: "Clean that stuff yo" },
    { name: "Get hired", description: "Gotta make that cash" },
    { name: "Retire", description: "Cause working is for chumps" }
  ]);
};
