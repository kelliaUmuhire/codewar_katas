class WordDictionary {
  constructor() {
    this.words = "\n";
  }
  addWord(word) {
    this.words += word + "\n";
  }
  search(word) {
    let pattern = new RegExp(`\n${word}\n`, "g");
    return pattern.test(this.words);
  }
}
