let _ =
  let rec pair n = if n = 0 then true else impair (n-1)
  and impair n = if n = 0 then false else pair (n-1)
  in pair 3
