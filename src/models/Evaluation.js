import typeorm from "typeorm";

const EntitySchema = typeorm.EntitySchema;

export default new EntitySchema({
    name: "Evaluation",
    tableName: "evaluation",
    columns: {
        id: { primary: true, type: "int", generated: true },
        lectureId: { type: "int" },
        nullifier: { type: "varchar", unique: true },
        score: { type: "int" },
    },
});