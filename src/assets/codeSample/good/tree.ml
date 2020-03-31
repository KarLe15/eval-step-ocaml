type 'a btree =
  | Nil
  | Node of ('a * 'a btree * 'a btree)

let size bt =
  let rec loop cursor todos rep =
    match cursor with
    | Nil ->
      (match todos with
       | [] -> rep
       | x::xs -> loop x xs rep
      )
    | Node(_, l, r) -> loop l (r::todos) (1+rep)
  in
  loop bt [] 0

let ex = Node(2,
              Node(3, Node(4, Nil, Nil), Node(5, Nil, Nil)),
              Node(6, Node(7, Nil, Nil), Node(8, Nil, Nil))
             )
let _ =
  size ex
