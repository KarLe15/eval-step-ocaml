(*/ Let ApplyFunRuntime /*)

let xor (b1: bool) (b2: bool) =
  match b1, b2 with
  | true , true  -> false
  | true , false -> true
  | false, true  -> true
  | false, false -> false

let half_adder (b1: bool) (b2: bool): (bool * bool) =
  (xor b1 b2, b1 && b2)

let adder (b1: bool) (b2: bool) (c0: bool) : (bool * bool) =
  let (s1, c1) = half_adder b1 b2 in
  let (s2, c2) = half_adder s1 c0 in
  (s2, c1 || c2)

type quartet = bool * bool * bool * bool

let add4bits (q1: quartet) (q2: quartet): (quartet * bool) =
  let (a1, a2, a3, a4) = q1 in
  let (b1, b2, b3, b4) = q2 in
  let (s1, c1) = adder a1 b1 false in
  let (s2, c2) = adder a2 b2 c1 in
  let (s3, c3) = adder a3 b3 c2 in
  let (s4, c4) = adder a4 b4 c3 in
  (s1, s2, s3, s4), c4


let _ =
  add4bits (false, true, false, true) (true, true, false, false)
