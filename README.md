# json2html

### :small_red_triangle: Status : Work in progress :running:

## Background

I wanna be able to throw some json-files into a directory and automatically generate html tables for them, but I couldn't really find anything like that on the internet, so I'll just make it myself.

NOTE: I am a simple man.. I will generate a single static html-file that is independent on any other files so it is easy to move around. This is probably not very good, but it is easy :stuck_out_tongue_winking_eye:

## How to use
(1) Clone or download repo

(2) Throw some json-files into the data folder

(3) Open repo path in a terminal and run:
```text 
npm i
```
```text
npm run build 
```
This will generate a .html-file in the repo directory

(4) Check so that the generated .html-file is the way you want it. Then you can move it and use it however you'd like

^
This is what I want it to work like, but right now you have to edit the handlebars template file to match the columns of the table with the json-file keys.
