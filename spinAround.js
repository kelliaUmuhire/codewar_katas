function spinAround(turns) {
  // Here be dragons!
  turns = turns.map((d) => (d === "right" ? "+90" : "-90"));
  return turns.length === 0
    ? 0
    : Math.floor(Math.abs(eval(turns.join(""))) / 360);
}
