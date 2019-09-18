# search-n-replace.js

This script is a extension to jQuery Library.

## Problem Statement

Implement a data quality tool that, given a <table, column> pair, shows the distribution of values for all rows in the table, and allows the user to change a column’s value for all rows that contain that value.
## Dependency
![jQuery Dependencies](https://img.shields.io/badge/Dependencies-jQuery-brightgreen)

## Usage
```jquery
$("table").column_search_replace();
```

The script will automatically generate a search and replace panel with two input fields and one select box.

It will automatically generate the select box with the column names of the given table.

**USER ACTION**

***Search*** for a particular String --> Put the ***Replace*** string --> Select the ***Column Name*** you want to replace.


## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.
