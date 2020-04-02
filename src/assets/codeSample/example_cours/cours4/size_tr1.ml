type 'a btree =
  | Empty
  | Node of 'a * 'a btree * 'a btree

let rec size (bt: 'a btree): int =
  let rec loop (bt: 'a btree) (bts: 'a btree list) (r: int) =
    match bt with
      Empty ->
      begin
        match bts with
        | [] -> r
        | bt::bts -> loop bt bts r
      end
    | Node(_, bt1, bt2) ->
      loop bt1 (bt2::bts) (r+1)
  in
  loop bt [] 0

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
