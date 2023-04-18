install: # installing  node package manager 
	npm ci

brain-games: # probably start of the program
	node bin/brain-games.js

brain-even: # start of the isEven game
	node bin/brain-even.js

brain-calc: # start of the calculator game
	node bin/brain-calc.js

brain-gcd: # start of the gcd game
	node bin/brain-gcd.js 

brain-progression: # start of the progression game
	node bin/brain-progression.js

brain-prime: # start of the prime game
	node bin/brain-prime.js
	
publish: #execute npm publish --dry-run
	npm publish --dry-run

lint: #test linter
	npx eslint

.PHONY: test	
