type t = A | B | C

let _ =
  let a = A in
  let b = B in
  match a with
  | B -> 0
  | A -> (match b with | C | B -> 1 | A -> 0)
  | C -> assert false
