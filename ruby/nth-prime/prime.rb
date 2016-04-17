class Prime

  def self.nth(num)
        return false if num <= 1
        2.upto(Math.sqrt(num).to_i) do |x|
            return false if num%x == 0
        end
        true
    end

    def next_prime
        n = num+1
        n = n + 1 until n.is_prime?
        n
    end
end
