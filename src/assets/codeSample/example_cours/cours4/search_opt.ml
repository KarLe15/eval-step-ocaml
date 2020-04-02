type 'a btree =
  | Empty
  | Node of 'a * 'a btree * 'a btree

let search (p: 'a -> bool) (bt: 'a btree): 'a =
  let rec loop (bt: 'a btree): 'a option =
    match bt with
    | Empty -> None
    | Node(x, bt1, bt2) ->
      if p x then Some x
      else
        match loop bt1 with
        | None -> loop bt2
        | Some x -> Some x
  in
  match loop bt with
  | Some x -> x
  | None -> raise Not_found

let ex = Node(1,
              Node(2,
                   Node(3, Empty, Empty),
                   Node(4, Empty, Empty)
                  ),
              Node(5,
                   Node(6, Empty, Empty),
                   Empty
                  )
             )

let _ =
  search (fun x -> x mod 5 = 0) ex

