let _ =
  let rec fold_right f a l = match l with
    | p::q -> f (fold_right f a q) p
    | []   -> a
  in
  let id l = fold_right (fun acc x -> x :: acc) [] l in
  id [1; 2; 3]
