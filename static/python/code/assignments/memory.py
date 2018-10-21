#memory
from random import shuffle
import os

letters=["A", "A", "B", "B", "C", "C", "D", "D", "E", "E", "F", "F", "G", "G", "H", "H"]
state=[   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0]
player=["Player A", "Player B"]
playerscore=[0, 0]
currentplayer=0

shuffle(letters)

absolutely_unused_variable=os.system("clear")

player[0]=raw_input("Enter name player A: ")
player[1]=raw_input("Enter name player B: ")

def GUI():
	absolutely_unused_variable=os.system("clear")
	print "Memory game v 0.1"
	print "-----------------"
	for y in range(0,4):
		print "|",
		for x in range(0,4):
			if state[y*4+x]>0:
				print letters[y*4+x],"|",
			else:
				print ". |",
		print ""
	print "-----------------"	
	print "Score A-B:", playerscore[0], "-", playerscore[1]

GUI()

while True:
	while True:
		x=int(raw_input("Enter first choice "+player[currentplayer]+"(1-16): "))
		
		if x<1 or x>16:
			continue

		if state[x-1]==0:
			state[x-1]=1
			break
		
	GUI()

	while True:
		y=int(raw_input("Enter second choice "+player[currentplayer]+"(1-16): "))
		
		if y<1 or y>16:
			continue

		if state[y-1]==0:
			state[y-1]=1
			break
	
	if letters[x-1]==letters[y-1]:
		state[x-1]=2
		state[y-1]=2
		playerscore[currentplayer]=playerscore[currentplayer]+1
	else:
		GUI()
		s=raw_input("Wrong choice; next player")
		state[x-1]=0
		state[y-1]=0
		if currentplayer==0:
			currentplayer=1
		else:
			currentplayer=0
		
	GUI()	

	if (playerscore[0]+playerscore[1])==8:
		print "We're done"
		break
