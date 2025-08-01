use std::hash::pedersen_hash;
mod merkle;

fn main(
    score: u32,
    lectureId: Field,
    secret: Field,
    user_nullifier: Field,
    leafIndex: u32,
    merkleRoot: Field,
    merklePath: [Field; 6]
) {
    assert(score >= 1);
    assert(score <=5);

    let nullifier: Field = pedersen_hash([secret, lectureId]);
    assert(user_nullifier == nullifier);

    let commitment: Field = pedersen_hash([secret]);

    let leaf: Field = pedersen_hash([commitment, nullifier]);

    let calculatedRoot = merkle::computeRoot(leaf, leafIndex, merklePath);
    assert(calculatedRoot == merkleRoot);
}

