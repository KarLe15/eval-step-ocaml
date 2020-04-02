let rec find (p: 'a -> bool) (xs: 'a list): 'a =
  match xs with
  | [] -> raise Not_found
  | x::xs -> if (p x) then x else (find p xs)

let _ =
  find (fun x -> x mod 5 = 0) [1; 2; 3; 4; 5; 6]
