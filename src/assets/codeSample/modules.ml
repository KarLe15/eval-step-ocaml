module A =
struct 
  type t = | X | Y

  let rec id n = if (n > 0) then (id (n-1)) + 1 else 0

end

module B =
struct
  type t = | X | Y
  let rec pair n =
    match n with
    | 0 -> A.X
    | 1 -> A.Y
    | _ -> 
      match pair (n-1) with
      | A.X -> A.Y
      | A.Y -> A.X

  let copy_id = A.id
end 

let convertAtoB x = match x with
  | A.X -> B.X
  | A.Y -> B.Y


let _ =
  (convertAtoB (B.pair 5), B.pair 4, B.copy_id 3)
