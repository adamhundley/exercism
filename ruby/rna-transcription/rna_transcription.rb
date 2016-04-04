class Complement
  VERSION = 3

  def self.of_dna(strand)
    solve(strand).join
  end

  def self.solve(strand)
    strand.chars.map do |letter|
      if letter == "G"
        "C"
      elsif letter == "C"
        "G"
      elsif letter == "T"
        "A"
      elsif letter == "A"
        "U"
      else
        raise ArgumentError
      end
    end
  end
end
