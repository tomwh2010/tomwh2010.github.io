from random import randint
import os
svar=randint(1,100)
forsoek=0;

print 'Velkommen til gjett et tall'

while True:
  x=int(raw_input('Tast inn et tall mellom 1 og 100: '))
  forsoek=forsoek+1
  if x==svar:
    print 'Riktig svar'
    break
  if x<svar:
    print 'For lavt'
  if x>svar:
    print 'For hoeyt'
  absolutely_unused_variable=os.system("clear")

print 'Du gjettet',svar,'paa',forsoek,'forsoek'
