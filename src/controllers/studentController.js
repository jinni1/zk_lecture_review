import { AppDataSource } from "../db.js";

const CommitmentRepo = () => AppDataSource.getRepository("StudentCommitment");


export const registerStudent = async (req, res) => {
    const { lectureId, commitment } = req.body;

    try {
        const repo = CommitmentRepo();

        const exists = await repo.find({
            where: {commitment}
        });

        if (exists.length != 0 ) {
            console.log("exists:", exists);
            return res.status(400).json({ message: "이미 등록된 수강생입니다."})
        }

        const student = repo.create({ lectureId, commitment });
        await repo.save(student);

        return res.status(200).json({ message: "수강생 등록 완료"});
    } catch (err) {
        console.log("수강생 등록 에러: ", err);
        return res.status(500).json({ err: "수강생 등록 중 에러가 발생했습니다." })
    }
} 

export const getStudentList = async (req, res) => {
    const lectureId = Number(req.params.lectureId);
    try {
        const repo = CommitmentRepo();
        const commitments = await repo.find({
            where: {lectureId}
        });

        const result = commitments.map( c => c.commitment);
        if (result.length==0) {
            return res.status(200).json({ message: "등록된 수강생이 존재하지 않습니다"});
        }
        return res.status(200).json({ message: "수강생 조회 성공", result});
    } catch (err) {
        console.log("수강생 조회 에러: ", err);
        return res.status(500).json({ err: "수강생 조회 중 에러가 발생했습니다." })
    }
}