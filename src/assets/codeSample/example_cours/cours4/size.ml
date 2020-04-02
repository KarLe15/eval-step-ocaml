type 'a btree =
  | Empty
  | Node of 'a * 'a btree * 'a btree

let rec size (bt: 'a btree): int =
  match bt with
    Empty -> 0
  | Node(_, bt1, bt2) -> 1 + (size bt1) + (size bt2)

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
  size ex
