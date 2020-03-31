type t = {x: int; y: int}

let _ =
  let a = {x = 0 ; y = 1} in
  let b = {a with y = 2} in
  b.y
