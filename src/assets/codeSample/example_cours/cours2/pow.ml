(*/ /*)

let rec pow (x: int) (n: int): int =
  if (n = 0) then 1
  else x * (pow x (n-1))

let _ =
  pow 3 (4+1)
