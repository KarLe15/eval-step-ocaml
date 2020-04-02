(*/ If ApplyFunRuntime /*)

let xor (b1: bool) (b2: bool): bool =
  if b1 then (not b2)
  else b2

let _ =
  xor true false
