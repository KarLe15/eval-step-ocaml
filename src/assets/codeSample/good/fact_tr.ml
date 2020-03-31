let fact n =
  let rec loop n rep =
    match n with
    | 0 -> rep
    | _ -> loop (n-1) (n*rep)
  in
  loop n 1

let _ =
  fact 5
