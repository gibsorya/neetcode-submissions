import math

class AreaCalc:
    def calculate(self, *args):
        if len(args) == 1:
            return round(math.pi * math.pow(args[0], 2), 2)
        else:
            return math.prod(args)
    
    
# Don't modify the following code
calc = AreaCalc()
print(calc.calculate(5))    
print(calc.calculate(4, 6))
