let _ =
  (true || raise Not_found)
  && not (false && raise Not_found)
  && ((fun x -> true) true || raise Not_found)
  && ((try raise Not_found with | Not_found -> true) || raise Not_found)
  && ((||) false (not false))
  && not ((&&) false (raise Not_found))
