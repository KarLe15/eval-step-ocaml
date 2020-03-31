let rec split l = match l with
  | p::q::r ->
    let (a, b) = split r in
    (p::a),(q::b)
  | p::[] -> ([p], [])
  | [] -> ([], [])


let rec merge l1 l2 = match l1, l2 with
  | p1::q1, p2::q2 -> if p1 < p2 then p1 :: (merge q1 l2) else p2 :: (merge l1 q2)
  | _, [] -> l1
  | [], _ -> l2

let rec merge_sort l =
  match l with
  | [] -> []
  | _ :: [] -> l
  | _ ->
    let a, b = split l in
    let aa = merge_sort a in
    let bb = merge_sort b in
    merge aa bb

let _ =
  merge_sort [9;8;7;6]
