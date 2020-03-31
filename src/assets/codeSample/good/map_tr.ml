let map_tr f l =
  let rec loop f l cont =
    match l with
    | x :: xs -> loop f xs (fun rep -> cont ((f x) :: rep))
    | [] -> cont []
  in
  loop f l (fun x -> x)

let _ =
  map_tr (fun x -> 2 * x) [1;2;3;4]
