let rec iter (n: int) (f: 'a -> 'a) (a: 'a): 'a =
  if n > 0 then f (iter (n-1) f a)
  else a

let _ =
  iter 10 (fun x -> x + 1) 0
