let fact n =
  let rec loop n acc =
    if n = 0 then acc
    else loop (n-1) (n * acc)
  in
  loop n 1

let _ =
  fact 5
