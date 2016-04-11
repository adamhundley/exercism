class Robot
    attr_reader :name

  def initialize
    @name = random_name
  end

  def reset
    @name = random_name
  end

  def random_name
    name = []
    name << ("A".."Z").to_a.sample(2)
    name << (1..9).to_a.sample(3)
    name.join
  end
end
