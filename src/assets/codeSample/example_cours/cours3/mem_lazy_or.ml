let rec mem (z: 'a) (xs: 'a list): bool =
  match xs with
  | [] -> false
  | x::xs -> (x = z) || mem z xs

let _ =
  mem (4) [0; 1; 2; 3; 4; 5; 6]
  && not (mem (8) [0; 1; 2; 3; 4; 5; 6])
