from random import randint

pos = -1

def checkWin(board):

	i=0

	while i < len(board):

		if(board[i] != 'n' and board[i] == board[i+1] and board[i] == board[i+2] and board[i+1] == board[i+2]):
			
			return True

		i = i + 3

	
	#columns
	i=0
	while i < 3:

		if(board[i] != 'n' and board[i] == board[i+3] and board[i] == board[i+6] and board[i+3] == board[i+6]):

			return True

		i = i + 1
	
	#diagonals
	
	if(board[0] != 'n' and board[0] == board[4] and board[0] == board[8] and board[4] == board[8]):

		return True
	
	elif(board[2] != 'n' and board[2] == board[4] and board[2] == board[6] and board[4] == board[6]):

		return True

	else:

		return False

def checkScore(board,player):

	if(checkWin(board)):

		if(player == 0):
			return 1
		else:
			return -1
	else:

		for i in board:
			if(i == 'n'):
				return 10

		return 0

	
def minimax(board,player):

	score = checkScore(board,(player + 1) % 2)

	if( score == 0 or score == 1 or score == -1):
		return score

	else:

		moves = []
		scoreList = []
	
		for i in xrange(9):
	
			if (board[i] == 'n'):
				moves.append(i)
	
		for i in moves:
	
			if (player == 0):
				board[i] = 'o'
			else:
				board[i] = 'x'
	
			temp= minimax(board,(player + 1) % 2)
			scoreList.append(temp)
			board[i] = 'n'
	
		if(player == 0):
			global pos 
			pos = moves[scoreList.index(max(scoreList))]
			return max(scoreList)
			#return  max(scoreList), moves[len(scoreList) - scoreList[::-1].index(max(scoreList)) - 1]
		else:
			global pos 
			pos = moves[scoreList.index(min(scoreList))]
			return min(scoreList)
			#return  min(scoreList), moves[len(scoreList) - scoreList[::-1].index(min(scoreList)) - 1]

def checkEmpty(board):

	for i in board:
		if(i != 'n'):
			return False
	return True

def getPos(board,player):

	if(checkEmpty(board)):
		return randint(0,8)


	minimax(board,player)

	return pos
