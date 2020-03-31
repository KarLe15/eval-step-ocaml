module A = struct 
  let x = 0

  module B = struct
    let y = 1
  end 
end

module C = struct
  let z = A.x + 2 * A.B.y
end

let _ =
  A.x + A.B.y + C.z
