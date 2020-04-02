(*/ Match /*)

let is_empty (xs: 'a list): bool =
  match xs with
  | [] -> true
  | x::xs' -> false

let _ =
  is_empty [1;2;3;4]
(* is_empty [] *)
