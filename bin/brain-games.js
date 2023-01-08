#!/usr/bin/env node

import { greetings } from '../src/cli.js';
import { question } from '../src/cli.js';


greetings();
const name = question();
