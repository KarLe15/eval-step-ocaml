(*/ ApplyFunRuntime /*)

let find_max (xs: 'a list): 'a =
  match xs with
  | [] -> raise (Invalid_argument "find_max")
  | x::xs -> List.fold_left max x xs

let _ =
  find_max [5; 6; 7; 8; 9; 10; 0; 1; 2; 3; ]
