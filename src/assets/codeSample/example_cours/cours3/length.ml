let rec length (xs: 'a list): int =
  match xs with
  | [] -> 0
  | _ :: xs -> 1 + (length xs)

let _ =
  length [0; 1; 2; 3; 4; 5]
