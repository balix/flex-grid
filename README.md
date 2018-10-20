# Flex grid #

Personal 12 columns mobile first grid system based on flexbox and written in PostCSS. This project is largely inspired by :

* [Flexbox Grid](https://github.com/kristoferjoseph/flexboxgrid)
* [Gridlex](https://github.com/devlint/gridlex)

## Installation

* Simply add flex_grid.css to your workflow.
* You can also add the minified production version (flex_grid.min.css) for better performances.

## Features

### Columns

The columns classes system follow the bootstrap grid naming convention :

* col-xs-6 (640 pixels)
* col-sm-6 (768 pixels)
* col-md-6 (1024 pixels)
* col-lg-6 (1280 pixels)

### Offsets

* col-xs-offset-3 (640 pixels)
* col-sm-offset-3 (768 pixels)
* col-md-offset-3 (1024 pixels)
* col-lg-offset-3 (1280 pixels)

### Auto-width

* col-xs (640 pixels)
* col-sm (768 pixels)
* col-md (1024 pixels)
* col-lg (1280 pixels)

### Gutter less

Add noGutter class to your <element class="row"></element> to avoid gutters.

### Fixed column

* col-fixed-xs-3 (640 pixels)
* col-fixed-sm-3 (768 pixels)
* col-fixed-md-3 (1024 pixels)
* col-fixed-lg-3 (1280 pixels)

### Horizontal alignment

* .start-md
* .center-md
* .end-md

### Vertical alignment

* .top-md
* .middle-md
* .bottom-md

### Distribution

* Add .spaceBetween to <element class="row"></element>
* Add .spaceAround to <element class="row"></element>
* Add .center to <element class="row"></element>

### Reverse columns

* first-xs (640 pixels)
* first-sm (768 pixels)
* first-md (1024 pixels)
* first-lg (1280 pixels)

### Equal heights

Add equalHeight class to your <element class="row"></element> for the direct children to inherit from the same height.

### Full height

Add on of the following classes to your <element class="row"></element> :

* fullHeight-xs (640 pixels)
* fullHeight-sm (768 pixels)
* fullHeight-md (1024 pixels)
* fullHeight-lg (1280 pixels)

### Hidden columns

* col-hidden-xs (640 pixels)
* col-hidden-sm (768 pixels)
* col-hidden-md (1024 pixels)
* col-hidden-lg (1280 pixels)