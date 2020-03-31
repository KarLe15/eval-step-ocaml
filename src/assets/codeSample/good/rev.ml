let _ =
  let rec append l1 l2 = match l1 with
    | p::q -> p :: (append q l2)
    | []   -> l2
  in
  let rec rev l = match l with
    | p::q -> append (rev q) [p]
    | [] -> []
  in
  rev [1;2;3;4]
