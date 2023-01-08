#!/usr/bin/env node

import { readlineSync } from 'readline-sync';
import { evenGame } from '../games/brain-even.js';
import { greetings } from '../src/cli.js';
import { question } from '../src/cli.js';


greetings();
const name = question();
