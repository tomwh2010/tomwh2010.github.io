# tic-tac-toe
import os

state=[" ", " ", " ", " ", " ", " ", " ", " ", " "]
nextplayer="X"
nummoves=0

def GUI():
	absolutely_unused_variable=os.system("clear")
	print "Tic-Tac-Toe v 0.1"
	print "-------------"
	for y in range(0,3):
		print "|",
		for x in range(0,3):
			print state[y*3+x],"|",
		print ""
	print "-------------"	

def ProcessInput(x):
	global nextplayer	
	global state
	global nummoves
	
	if state[x-1]!=" ":
		print "Feil trekk"
		return False
		
	state[x-1]=nextplayer
	
	if nextplayer=="X":
		nextplayer="O"
	else:
		nextplayer="X"
		
	nummoves=nummoves+1

def CheckWinner():
	global state
	
	#horizontal
	if state[0]==state[1] and state[1]==state[2]:
		return state[0]
		
	if state[3]==state[4] and state[4]==state[5]:
		return state[3]
		
	if state[6]==state[7] and state[7]==state[8]:
		return state[6]
	
	#vertical
	if state[0]==state[3] and state[3]==state[6]:
		return state[0]
		
	if state[1]==state[4] and state[4]==state[7]:
		return state[1]
		
	if state[2]==state[5] and state[5]==state[8]:
		return state[2]
		
	#diagonal
	if state[0]==state[4] and state[4]==state[8]:
		return state[0]
		
	if state[2]==state[4] and state[4]==state[6]:
		return state[2]
	
	return nummoves
		
while True:
	GUI()
	x=int(raw_input(nextplayer+" vennligst tast inn ditt valg, 1-9 (0 for aa avslutte): "))

	if x==0:
		print "Pyse"
		break
	
	ProcessInput(x)
	
	y=CheckWinner()
	
	if y=="O":
		break
	if y=="X":
		break
	if y==9:
		break
	
GUI()
	
if y=="O":
	print "O vant"
if y=="X":
	print "X vant"
if y==9:
	print "Uavgjort"
