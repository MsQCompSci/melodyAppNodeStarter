# Melody App Starter Code
Starter code for the Melody App tutorial using p5.js, Node.js and Express.js. This code is developed in detail in the [Getting Started with Node.js tutorial](https://docs.google.com/document/d/1n6Je0Lzht2ibQmN1st1ccth47ppNhIYtMBTOwNAAFdo/edit?usp=sharing)

# Steps:
## 1. Download and unzip this repository
## 2. Open the terminal on your computer, and ensure node.js is installed on your device by typing:
   <code> node -v </code> and <code> npm -v </code>

## 3. If node.js is not installed:
Follow **step 2** in [Get Started with Node.js](https://docs.google.com/document/d/1n6Je0Lzht2ibQmN1st1ccth47ppNhIYtMBTOwNAAFdo/edit?usp=sharing)

## 3. If node.js is installed:
Install Express.js in your project directory by creating a <code>package.json</code> file.
- Open a command prompt window on your computer (Terminal on Mac or Command Shell on Windows)
- In the command prompt window, navigate to the directory with this file. If you saved this file in your <code>downloads</code> folder you can type <code> cd/downloads/melodyAppSetup-main</code> and press return
- Create a <code>package.json</code> file by typeing <code> npm init -y </code> and pressing return
- Install Express.js by typing <code>npm install express</code> and pressing return
- Verify installation by typing <code>npm list</code> and pressing enter
Your terminal should display a tree structure listing all <code>npm</code> packages installed on your computer.
If Express.js is installed in your directory, you should see something similar to this:
```
melodyAppSetup-main@1.0.0 /Users/..filepath
└── express@4.19.1
```
Visit [this tutorial](https://www.geeksforgeeks.org/introduction-to-express/) for more information on Express.js, and [Get Started with Node.js](https://docs.google.com/document/d/1n6Je0Lzht2ibQmN1st1ccth47ppNhIYtMBTOwNAAFdo/edit?usp=sharing) for helpful steps and tips if you get stuck.

## 4. Run the server by typing:
<code> node server.js </code> in the terminal
## 5. Visit [http://localhost:3000](http://localhost:3000) using your browser and inspect the console.
You should see a JSON object like this printed to the console:

```
Object i
  files: Array(3)
    0: “C Major Scale.json”
    1: “Frere Jacques.json”
    2: “Mary's Lamb.json”
    length: 3
//…prototype
```


This starter code already prints the filenames from the songs file in your browsers console! 

You are ready to continue with the [Melody App](https://docs.google.com/document/u/0/d/1mzJv-7qU1_CmkWI0ZFeqf3CeBfpOOVIrvPRZtxqFxRI/edit) tutorial!

You can also read more aboute the p5.Oscillator library [here](https://p5js.org/reference/#/p5.Oscillator)
