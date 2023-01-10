#!/usr/bin/env node

import { greetings, question } from '../src/cli.js';

greetings();
const name = question();
