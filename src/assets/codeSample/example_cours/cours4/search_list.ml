type 'a btree =
  | Empty
  | Node of 'a * 'a btree * 'a btree

let search (p: 'a -> bool) (bt: 'a btree): 'a =
  let rec loop (bts: 'a btree list) =
    match bts with
    | [] -> raise Not_found
    | Empty::bts -> loop bts
    | Node(x, bt1, bt2)::bts -> if p x then x else loop (bt1::bt2::bts)
  in
  loop [bt]

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

