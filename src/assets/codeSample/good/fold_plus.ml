let _ =
  let rec fold_left f a l = match l with
    | p::q -> fold_left f (f a p) q
    | [] -> a
  in
  (* let plus = fun a b -> a + b in *)
  fold_left (+) 0 [1;2;3;4]
