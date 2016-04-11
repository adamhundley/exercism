class Pangram
VERSION = 1

  def self.is_pangram?(sentance)
    sentance = sentance.gsub(/\W+/, '').downcase.chars
    alphabet(sentance).all?
  end

  def self.alphabet(sentance)
    alphabet = ("a".."z").to_a
    alphabet.map do |x|
      sentance.include?(x)
    end.uniq
  end
end
