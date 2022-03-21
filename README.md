# html-table-generation
Generate html table from JSON

## Background

The main idea for this is to create html tables to provide software version release information - what has changed in this release etc - in an easy way.

This would be done through adding a json-file to a data directory and simply generate a new .html-file.

The new file would have a added drop down menu option for that release version which would include a html table with all changes made.

(intended to be used for helm parameter release update information, but should be easy enough to configure for other areas)

## How to use
(1) Clone or download repo

(2) Open repo path in terminal and run:
```text 
npm i
```
```text
npm build run  
```

(3) Check so that the generated .html file is the way you want it
