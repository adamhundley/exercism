class Sieve
VERSION = 1
  attr_reader :num

  def initialize(num)
    @num = num
    @prime_numbers = []
  end

  def primes
    all_the_numbers = 2.upto(num).to_a
    until all_the_numbers.empty?
      @prime_numbers << all_the_numbers.shift
      all_the_numbers.each do |number|
        if number % @prime_numbers.last == 0
          all_the_numbers.delete(number)
        end
      end
    end
    @prime_numbers
  end
end
