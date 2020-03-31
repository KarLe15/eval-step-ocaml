let _ =
  let x = [1;2;3] in
  let (a, b, c) = match x with
    | y::z::t::[] -> (y,z,t)
    | _ -> (0, 0, 0)
  in ()
