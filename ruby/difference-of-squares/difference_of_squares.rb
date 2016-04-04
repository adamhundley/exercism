class Squares
  VERSION = 2
  def initialize(num)
    @numbers = (0..num).to_a
  end

  def square_of_sum
    @numbers.inject(:+) ** 2
  end

  def sum_of_squares
    @numbers.reduce(0) do |sum, num|
      num ** 2 + sum
    end
  end

  def difference
    square_of_sum - sum_of_squares
  end
end
