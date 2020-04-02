(*/ ApplyFunRuntime /*)
let pow (x: int) (n: int): int =
  let rec loop (n: int) = 
    if (n = 0) then 1
    else x * (loop (n-1))
  in
  if (n < 0) then raise (Invalid_argument "pow: negative exponent")
  else loop n

let _ =
  pow 3 5
