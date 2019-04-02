exports.up = function(knex, Promise) {
  return knex.schema
    .createTable("projects", tbl => {
      //PK
      tbl.increments();

      //Name
      tbl
        .string("name")
        .notNullable()
        .unique();

      //Description
      tbl.text("description").notNullable();

      //Complete
      tbl
        .boolean("complete")
        .notNullable()
        .defaultTo(false);
    })
    .createTable("actions", tbl => {
      //PK
      tbl.increments();

      //FK
      tbl
        .integer("project_id")
        .unsigned()
        .notNullable()
        .references("projects.id")
        .onDelete("CASCADE")
        .onUpdate("CASCADE");

      //Description
      tbl.text("description").notNullable();

      //Notes
      tbl.string("notes").notNullable();

      //Complete
      tbl
        .boolean("complete")
        .notNullable()
        .defaultTo(false);
    });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("projects").dropTableIfExists("actions");
};
