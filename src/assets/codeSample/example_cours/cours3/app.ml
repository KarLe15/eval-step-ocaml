let rec app (xs: 'a list) (ys: 'a list): 'a list =
  match xs with
  | [] -> ys
  | x::zs -> x :: (app zs ys)

let _ =
  app [1;2;3] [4;5;6;7]
