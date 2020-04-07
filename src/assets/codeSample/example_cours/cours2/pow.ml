(*/ /*)

let rec pow (x: int) (n: int): int =
  if (n = 0) then 1
  else x * (pow x (n-1))

