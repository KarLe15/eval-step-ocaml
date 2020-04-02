(*/ ApplyFunRuntime /*)

let xor x y = (x || y) && (not (x && y))

let _ =
  xor true false
