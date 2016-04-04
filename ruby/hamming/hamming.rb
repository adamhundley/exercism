class Hamming
  attr_reader :zipper
  VERSION = 1

  def self.compute(one, two)
    raise ArgumentError if one.length != two.length
      calculate(one,two)
  end

  def self.zip_town(one, two)
    one.chars.zip(two.chars)
  end

  def self.calculate(one,two)
    score = 0
    zip_town(one, two).each do |x,y|
      if x != y
        score += 1
      end
    end
      score
  end

end
Hamming.compute('GGACTGA', 'GGACTGA')
