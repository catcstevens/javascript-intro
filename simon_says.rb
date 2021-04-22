##Only perform commands if it starts with "Simon says"
# if add +
# if subtract -
# if multiply *
# if no Simon says return 0

  def simon_says(arr)
    sum = 0
    arr.each do |str|
      if str.start_with?("Simon says")
        n = str.split(' ')[-1].to_i
        sum += n if str.include?("add")
        sum -= n if str.include?("subtract")
        sum *= n if str.include?("multiply")
      end
    end
    p sum
  end
simon_says(["Simeon says subtract 46", "Firstly, multiply by 3", "Simon says add 18", "Then subtract 50", "Next, multiply by 2", "Then add 17", "Simeon says multiply by 43", "Now add 13", "Now subtract 32", "Firstly, multiply by 35", "Simon says subtract 22", "Joshua says subtract 48", "Simon says subtract 45", "Simon says add 7", "Simon says add 25", "Simeon says add 13"])

# simon_says([
#   "Simon says add 4",
#   "Simon says add 6",
#   "Then add 5"
# ]) 
# ➞ 10

# simon_says([
#   "Susan says add 10",
#   "Simon says add 3",
#   "Simon says multiply by 8"
# ]) ➞ 24

# simon_says([
#   "Firstly, add 4",
#   "Simeon says subtract 100"
# ]) ➞ 0