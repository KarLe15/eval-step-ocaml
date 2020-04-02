let pow (x: int) (n: int): int =
  let rec loop (n: int) (r: int) =
    if (n = 0) then r
    else loop (n-1) (r * x)
  in
  if (n < 0) then raise (Invalid_argument "pow: negative exponent")
  else loop n 1

let _ =
  pow 3 5
