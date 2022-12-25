install: # installing  node package manager 
	npm ci

brain-games: # probably start of the program
	node bin/brain-games.js

brain-even: # probably start of the program
	node bin/brain-even.js
	
publish: #execute выполнит npm publish --dry-run
	npm publish --dry-run

lint: #test linter
	npx eslint

.PHONY: test	
