DnaTranscriber = function(nucleotide) {
  this.toRna = function(nucleotide){
    var nucleotideMap = {'G': 'C',
                         'C': 'G',
                         'A': 'U',
                         'T': 'A'};
    var transcription = '';

    for (var n = 0; n < nucleotide.length; n++){
      transcription += nucleotideMap[nucleotide[n]];
    }
    return transcription;
  };
};

module.exports = DnaTranscriber;
