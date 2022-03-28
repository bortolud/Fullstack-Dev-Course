// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ['A', 'T', 'C', 'G'];
  return dnaBases[Math.floor(Math.random() * 4)];
};

// Returns a random single stand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = [];
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase());
  }
  return newStrand;
};

function pAequorFactory(num, baseArray) {
  return {
    specimenNum: num,
    dna: baseArray,
    mutate() {
      let randIndex = Math.floor(Math.random() * 14);
      this.dna[randIndex] = returnRandBase()
      return this.dna;
    },
    compareDNA(pAequor) {
      let count = 0;
      for (let i = 0; i < 15; i++) {
        if (this.dna[i] == pAequor.dna[i]) {
          count++;
        }
      }
      console.log(`specimen #${this.specimenNum} and specimen #${pAequor.specimenNum} have ${(count / 15) * 100}% DNA in common`)
    },
    willLikelySurvive() {
      let count = 0;
      for (let i = 0; i < 15; i++) {
        if (this.dna[i] == 'C' || this.dna[i] == 'G') {
          count++;
        }
      }
      if (count / 15 > 0.6) {
        return true;
      } else {
        return false;
      }
    }
  }
}

//populate test subjects
let test = []
for (let i = 0; i < 60; i++) {
  test.push(pAequorFactory(i, mockUpStrand()))
}

//test methods
test[34].compareDNA(test[12])
console.log(test[56].dna)
test[56].mutate()
console.log(test[56].dna)
console.log(test[19].willLikelySurvive())







