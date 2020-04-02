(*/ Match /*)

type 'a btree =
  | Empty
  | Node of 'a * 'a btree * 'a btree

let rec btree_mem (x: 'a) (bt: 'a btree): bool =
  match bt with
  | Empty -> false
  | Node(y, bt1, bt2) -> (x = y) || (btree_mem x bt1) || (btree_mem x bt2)

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
  btree_mem 2 ex
