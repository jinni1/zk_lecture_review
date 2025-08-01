import typeorm from "typeorm";

const EntitySchema = typeorm.EntitySchema;

export default new EntitySchema({
    name: "Lecture", // 참조할 테이블 이름
    tableName: "lecture", // 실제 테이블 이름
    columns: {
        id: { primary: true, type: "int", generated: true },
        lectureName: { type: "varchar" },
    },
});
