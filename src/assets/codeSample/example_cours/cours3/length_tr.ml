let length (xs: 'a list): int =
  let rec loop (xs: 'a list) (r: int): int=
  match xs with
  | [] -> r
  | _ :: xs -> loop xs (1 + r)
  in
  loop xs 0
    
let _ =
  length [0; 1; 2; 3; 4; 5]
