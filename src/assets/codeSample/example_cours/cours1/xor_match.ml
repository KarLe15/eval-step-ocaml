(*/
  Match ApplyFunRuntime
  /*)

let xor (b1: bool) (b2: bool) =
  match b1, b2 with
  | true , true  -> false
  | true , false -> true
  | false, true  -> true
  | false, false -> false

let _ =
  xor true false
