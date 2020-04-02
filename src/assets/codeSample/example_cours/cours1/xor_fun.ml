(*/ ApplyFunRuntime /*)
let _ =
  (fun x y -> (x || y) && (not (x && y))) true false
