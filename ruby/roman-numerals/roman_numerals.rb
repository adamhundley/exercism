class Fixnum
VERSION = 1
  def to_roman
    answer = ""
    num = self
    ROMAN_NUMERALS.each do |k,v|
      while num >= k
        answer << v
        num -= k
      end
    end
    answer
  end

  ROMAN_NUMERALS = {
    1000 => "M",
    900 => "CM",
    500 => "D",
    400 => "CD",
    100 => "C",
    90 => "XC",
    50 => "L",
    40=> "XL",
    10 => "X",
    9 => "IX",
    5 => "V",
    4 => "IV",
    1 => "I"
  }

end
