class Raindrops
  VERSION = 1

  def self.convert(num)
    phrase = []
    phrase << "Pling" if num % 3 == 0
    phrase << "Plang" if num % 5 == 0
    phrase << "Plong" if num % 7 == 0
    phrase << num.to_s if phrase.length == 0
    phrase.join
  end
end
