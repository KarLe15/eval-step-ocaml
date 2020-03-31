exception Not of int

let _ =
  let rec iter f l = match l with
    | [] -> ()
    | p::q -> f p; iter f q
  in
  let forall p l =
    try
      iter (fun x -> if p x then () else raise (Not x)) l;
      -1
    with
    | Not x -> x
  in
  forall (fun x -> x mod 2 = 0) [0;1;4]

