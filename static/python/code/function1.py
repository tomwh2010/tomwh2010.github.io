def burger_and_cola(burger, cola):
  print 'Arne Bjarne vil ha', burger, 'burger',
  print 'og', cola, 'cola'

burger_and_cola(1,2)	

def pizza_and_pepsi(pizza, pepsi):
  ret='Arne Bjarne vil ha '+str(pizza)+' pizza'
  ret=ret+' og '+str(pepsi)+' pepsi'
  return ret

print pizza_and_pepsi(2,3)
