let rec fold_left f l a = match l with
  | p::q -> fold_left f q (f a p)
  | [] -> a

let rec append l1 l2 = match l1 with
  | p::q -> p :: (append q l2)
  | [] -> l2

let rev_and_mix l = fold_left (fun acc x -> append l (x :: acc)) l []

let _ =
  rev_and_mix [1;2;3]
