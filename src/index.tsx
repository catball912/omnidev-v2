#!/usr/bin/env node
import React from 'react';
import { render } from 'ink';
import App from './App.js';

if (process.env.TEST_MODE === '1') {
    // Mock TTY environment for headless environments
    Object.defineProperty(process.stdin, 'isTTY', { value: true });
    process.stdin.setRawMode = () => { return process.stdin; };
}

render(<App />);
