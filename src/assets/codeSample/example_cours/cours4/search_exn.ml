(*/ Exn /*)

type 'a btree =
  | Empty
  | Node of 'a * 'a btree * 'a btree

let rec search (p: 'a -> bool) (bt: 'a btree): 'a =
  match bt with
  | Empty -> raise Not_found
  | Node(x, bt1, bt2) ->
    if p x then x
    else
      begin
        try search p bt1
        with Not_found -> search p bt2
      end

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

