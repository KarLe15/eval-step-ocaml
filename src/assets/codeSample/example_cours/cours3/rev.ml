let rec rev (xs: 'a list): 'a list =
  match xs with
    [] -> []
  | x::xs -> (rev xs) @ [x]

let _ =
  rev [0; 1; 2; 3; 4]
