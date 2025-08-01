import typeorm from "typeorm";

const EntitySchema = typeorm.EntitySchema;

export default new EntitySchema({
    name: "StudentCommitment",
    tableName: "student_commitment",
    columns: {
        id: { primary: true, type: "int", generated: true },
        lectureId: { type: "int" },
        commitment: { type: "varchar", unique: true },
  },
});
