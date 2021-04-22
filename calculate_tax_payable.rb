def tax_rates(percent, base, threshold, income)
    tax = {:percentage_of_income => 0, :tax_payable => 0}
    tax[:tax_payable] = (percent * (income-threshold) + base)
    tax[:percentage_of_income] =  ((tax[:tax_payable] / income) * 100)
        puts tax

end

def calculate_tax_payable(income)
    
   

    case income 
    when 0 .. 18200
        tax_rates(0, 0, 0, income)
    when 18201 .. 37000
        tax_rates(0.19, 0, 18200, income)  
    when 37001 .. 87000
        tax_rates(0.325, 3572, 37000, income)  
    when 87001 .. 180000
        tax_rates(0.37, 19822, 87000, income)  
    else
        tax_rates(0.45, 54232, 180000, income)
    end   
end
calculate_tax_payable(180000)
