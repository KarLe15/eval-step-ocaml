let failwith s = raise (Failure s)
let invalid_arg s = raise (Invalid_argument s)

let min x y = if x <= y then x else y
let max x y = if x >= y then x else y

let not b = match b with
  | true -> false
  | false -> true

let fst (a, _) = a
let snd (_, b) = b

let rec (@) xs ys =
  match xs with
  | [] -> ys
  | x::zs -> x :: (zs @ ys)
