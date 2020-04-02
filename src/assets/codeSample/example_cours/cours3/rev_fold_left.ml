let rev (xs: 'a list): 'a list =
  List.fold_left (fun r x -> x::r) [] xs

let _ =
  rev [0; 1; 2; 3; 4; 5; 6]
