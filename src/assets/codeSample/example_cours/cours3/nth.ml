let rec nth (xs: 'a list) (i: int): 'a =
  match xs with
  | [] -> raise (Failure "nth")
  | x::xs -> if i = 0 then x else nth xs (i-1)

let _ =
  nth [7; 8; 9; 10; 11] 3
