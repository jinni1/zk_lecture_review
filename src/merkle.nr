use std::hash::pedersen_hash;

pub fn computeRoot(
    leaf: Field, 
    leafIndex: u32, 
    merklePath: [Field;6]
) -> Field {
    let mut hash = leaf;
    for i  in 0 .. 6 {
        let bit = (leafIndex >> i) & 1;
        if bit == 0 {
            hash = pedersen_hash([hash, merklePath[(i as u32)]]);
        } else {
            hash = pedersen_hash([merklePath[(i as u32)], hash]);
        }
    }
    hash
}