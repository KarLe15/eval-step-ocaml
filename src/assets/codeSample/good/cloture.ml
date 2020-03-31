let increment x =
  let f y = x + y in
  f


let toto =
  let x = 4 in
  let f y = x + y in
  f


let _ =
  let f = increment 4 in
  f 38, toto 38
